const environment = process.env.NODE_ENV || "development";
const isProduction = environment === "production";

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: environment,

  // パフォーマンスサイズのmaxサイズを500KiBに変更
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000
  },

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/assets/ts/main.ts",

  // JavaScript出力先ファイル名
  output: {
    filename: "index.js"
  },
  devtool: isProduction ? "source-map" : "eval-source-map",
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // node_modulesと、Swiper.jsの除外（※IE11用）
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // モジュールを読み込むときに検索するディレクトリの設定
    extensions: [".ts", ".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  }
};
