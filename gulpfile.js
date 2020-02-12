/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * プラグインの読み込み
 */
const gulp = require("gulp");

// Pug
const pug = require("gulp-pug");
const data = require("gulp-data");
const fs = require("fs");
const path = require("path");
const cache = require("gulp-cached");

// CSS
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const postcss = require("gulp-postcss");
const flexBugsFixes = require("postcss-flexbugs-fixes");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const stylelint = require("stylelint");
const reporter = require("postcss-reporter");

// JS
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");

// Image
const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

// SVG sprite
const gulpSvgSprite = require("gulp-svg-sprite");

// Utility
const browserSync = require("browser-sync").create();
const connectSSI = require("connect-ssi");
const gulpif = require("gulp-if");
const changed = require("gulp-changed");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const del = require("del");

/**
 * 環境変数
 */
const environment = process.env.NODE_ENV || "development";
const isDevelopment = environment === "development";
const isProduction = environment === "production";

/**
 * 開発用ディレクトリ
 */
const src = {
  root: "src/",
  pug: "src/**/*.pug",
  data: "src/_data/",
  css: "src/assets/_scss/**/*.scss",
  ts: "src/assets/ts/**/*.ts",
  img: "src/assets/img/**/*.{png,jpg,gif,svg}",
  svgSprite: "src/assets/svg/**/*.svg"
};

/**
 * 公開用ディレクトリ
 */
const dist = {
  root: "dist/",
  css: "dist/assets/css",
  js: "dist/assets/js",
  img: "dist/assets/img",
  svgSprite: "dist/assets/svg"
};

/**
 * Pugファイルのトランスパイル
 */
gulp.task("pug", done => {
  const locals = {
    site: JSON.parse(fs.readFileSync(`${src.data}site.json`))
  };
  return gulp
    .src([src.pug, "!src/**/_*.pug"])
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(
      data(file => {
        // 各ページのルート相対パスを格納
        locals.pageAbsolutePath = `/${path
          .relative(file.base, file.path.replace(/.pug$/, ".html"))
          .replace(/index\.html$/, "")}`;
        return locals;
      })
    )
    .pipe(cache("pug"))
    .pipe(
      pug({
        // `locals`に渡したデータを各Pugファイルで取得
        locals,
        // ルート相対パスでincludeできるようにする
        basedir: "src",
        // Pugファイル整形
        pretty: true
      })
    )
    .pipe(gulp.dest(dist.root));
  done();
});

/**
 * Scssファイルのトランスパイル
 */
const postCssOption = [autoprefixer, flexBugsFixes, stylelint, reporter];
gulp.task("sass", done => {
  return gulp
    .src(src.css)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(postcss(postCssOption))
    .pipe(gulpif(isProduction, cleanCSS()))
    .pipe(
      gulpif(
        isDevelopment,
        cleanCSS({
          format: "beautify"
        })
      )
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist.css));
  done();
});

/**
 * WebpackによるTSファイルのコンパイル
 */
gulp.task("webpack", done => {
  return (
    gulp
      .src(src.ts)
      .pipe(webpackStream(webpackConfig, webpack))
      .pipe(gulp.dest(dist.js))
      // エラー発生時に終了させない
      .on("error", error => {
        this.emit("end");
      })
  );
  done();
});

/**
 * 画像圧縮
 */
gulp.task("image", done => {
  return gulp
    .src(src.img)
    .pipe(changed(dist.img))
    .pipe(
      plumber({
        errorHandler(err) {
          // eslint-disable-next-line no-console
          console.log(err.messageFormatted);
          this.emit("end");
        }
      })
    )
    .pipe(
      imagemin([
        imageminMozjpeg({
          // 画質
          quality: 70
        }),
        imageminPngquant({
          // 画質
          quality: [0.7, 0.8]
        }),
        imagemin.svgo({
          plugins: [
            // viewBox属性を削除（widthとheight属性がある場合）
            { removeViewBox: false },
            // <metadata>を削除
            { removeMetadata: false },
            // SVGの仕様に含まれないタグ、属性、id属性、version属性を削除
            { removeUnknownsAndDefaults: false },
            // コードが短くなる場合だけ<path>に変換
            { convertShapeToPath: false },
            // 重複や不要な`<g>`タグを削除
            { collapseGroups: false },
            // SVG内に<style>や<script>がなければidを削除
            { cleanupIDs: false }
          ]
        }),
        imagemin.optipng(),
        imagemin.gifsicle()
      ])
    )
    .pipe(gulp.dest(dist.img));
  done();
});

/**
 * SVGスプライト作成
 */
gulp.task("svgSprite", done => {
  return gulp
    .src(src.svgSprite)
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(
      gulpSvgSprite({
        mode: {
          // SVGファイルをsymbol要素として結束
          symbol: {
            dest: "./",
            // 出力ファイル名
            sprite: "sprite.svg"
          }
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  // `style`属性を削除
                  { removeStyleElement: true },
                  // `fill`属性を削除
                  { removeAttrs: { attrs: "fill" } }
                ]
              }
            }
          ]
        },
        svg: {
          // xml宣言を出力
          xmlDeclaration: false,
          // DOCTYPE宣言を出力
          doctypeDeclaration: false
        }
      })
    )
    .pipe(gulp.dest(dist.svgSprite));
  done();
});

/**
 * 公開ファイル削除
 */
gulp.task("clean", done => {
  return del(["dist/**", "!dist"]);
  done();
});

/**
 * 開発ローカルサーバー立ち上げ
 */
const browserSyncOption = {
  server: dist.root,
  middleware: [
    connectSSI({
      baseDir: __dirname + "/dist",
      ext: ".html"
    })
  ]
};
gulp.task("serve", done => {
  browserSync.init(browserSyncOption);
  done();
});

/**
 * ファイルの監視
 */
gulp.task("watch", done => {
  const browserReload = done => {
    browserSync.reload();
    done();
  };
  gulp.watch(src.pug, gulp.series("pug"));
  gulp.watch(src.css, gulp.series("sass"));
  gulp.watch(src.ts, gulp.series("webpack"));
  gulp.watch(src.img, gulp.series("image"));
  gulp.watch(src.svgSprite, gulp.series("svgSprite"));
  gulp.watch(dist.root, browserReload);
  done();
});

gulp.task("default", gulp.series("serve", "watch"));

/**
 * 開発環境ビルド
 */
gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("pug", "sass", "webpack", "image", "svgSprite")
  )
);
