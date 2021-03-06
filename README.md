# static-web-custom
静的Webサイトを構築する為のテンプレートです。
中〜大規模開発向けテンプレートのため、プロジェクト規模や用途に応じて使い分けてください。

## 利用メリット
- Pugによるテンプレート管理によってHTMLファイルの保守性が高まる
- 利用頻度の高いHTMLマークアップをPugのMixinによって効率化できる
- OGPなどメタ情報が事前にテンプレート化されている
- ファイル変更ごとにブラウザがリロードされる
- FLOCSSベースの設計で開発をすぐに始められる
- 頻繁に使用するSCSSの変数やMixinが用意されている
- 環境に応じてSCSSのトランスパイルができる（開発、公開環境による場合わけ）
- 印刷用のprint.cssが用意されている
- WebP（ウェッピー）が自動生成される
- SVGスプライトでアイコン管理が容易
- TypeScriptによる型定義ができる
- ES2015基準でトランスパイルされる
- Vue.js, jQueryを標準で利用することができる
- スタイルガイドの生成ができる
- Lighthouseによる監査をローカル環境で実行できる
- Core Web Vitalsの測定をローカル環境で実行できる

## 利用デメリット
- Pug, SCSS, FLOCSSに関する知識を前提とする
- TypeScriptの利用で学習コストが上がる（configの設定次第で許容範囲の変更対応可能）
- 利用パッケージがプロジェクトに対してオーバースペックになっている可能性がある

## 対応環境
このテンプレートが保証する対応OS, ブラウザ環境は以下になります。
テンプレートにはIE非対応技術が一部含まれています。必要に応じてポリフィルを入れてください。

### PC
Windows 10：Chrome最新版、MicrosoftEdge最新版、Firefox最新版、IE11
Mac OS 10.13以降：Chrome最新版、Safari最新版、Firefox最新版

### スマートフォン・タブレット
iPhone, iPad iOS 12以降 ：Chrome最新版、Safari最新版
Android 6.0以降：Chrome最新版

## 依存環境&アプリケーション
- [Node v10以上(v12.18.3推奨)](https://nodejs.org/ja/) 
- [npm](https://www.npmjs.com/) 
- [Yarn](https://classic.yarnpkg.com/ja/) 
- [gulp](https://gulpjs.com/) 
- [Webpack](https://webpack.js.org/) 
- [Pug](https://pugjs.org/api/getting-started.html) 
- [Sass](https://sass-lang.com/) 
- [TypeScript](https://www.typescriptlang.org/) 
- [ESLint](https://eslint.org/) 
- [stylelint](https://stylelint.io/) 
- [Fractal](https://fractal.build/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

## 設定ファイル
- [.editorconfig](https://editorconfig.org/) フォーマット統一
- [webpack.config.js](https://webpack.js.org/configuration/) webpackでのJavaScript管理
- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) TypeScriptのルール設定
- [.eslintrc.json](https://eslint.org/) JavaScriptの検証設定
- [.stylelintrc.json](https://stylelint.io/) CSSの検証設定
- [.gitignore](https://git-scm.com/docs/gitignore) Git管理に含めないファイル指定
- [gulpfile.js](https://gulpjs.com/) Gulpで実行するタスク管理
- [package.json](https://docs.npmjs.com/files/package.json) NPMでのパッケージ管理
- [lighthouserc.yml](https://docs.npmjs.com/files/package.json) プロダクト品質監査の設定

## 利用方法
「開発環境の設定」にしたがってコマンドを実行すると静的Webサイト構築で必要な環境が整います。
必要に応じでパッケージの追加インストールを行い、プロジェクトに合わせて最適化させてください。
環境変数にdevelopmentとproductionを用意していますので設定されたコマンドの環境に応じてタスクを振り分けることができます。

### 開発環境の設定
1. パッケージのインストール
パッケージマネジャーにnpmもしくはYarnを使用します。特別な理由がない場合はYarnの利用を推奨します。
テンプレートのダウンロード完了後、該当ディレクトリでターミナルを開き以下のコマンドを入力してください。
`npm install`

    ※Yarnを使う場合
    yarnをインストールします。(Homerewからインストールする場合)
    `brew install yarn`
    下記コマンドを入力してパッケージをインストールします。
    `yarn install`

[Yarn | 概要](https://classic.yarnpkg.com/ja/docs/getting-started)

2. 初期ビルド
デフォルトで用意されているHTML, CSS, JSファイルを以下コマンドで出力します。
`npm run build`

    ※Yarnの場合
    `yarn build`

3. 開発スタート
初期ビルドでHTMLファイル等のファイルがdistディレクトリ配下に出力されているのを確認できたら以下コマンドを実行し開発を進めます。
`npm run start`

    ※Yarnの場合
    `yarn start`

## コマンド一覧
開発環境で事前に用意されているコマンド一覧です。  
利用ケースも記載していますので状況に応じて使い分けてください。

### 開発起動コマンド
標準ブラウザを立ち上げ、ファイルの変更を監視し、gulpfile.jsで設定されているタスクを実行します。開発時に利用します。   

`npm run start`

※Yarnの場合
`yarn start`

以下のようにローカルサーバーが起動します。
デフォルトでは端末検証をしやすくするため、Externalで展開されます。

```
-------------------------------------
   Local: http://localhost:3000
   External: http://192.XXX.XX.X:3000
-------------------------------------
```

***

### ビルドコマンド
distフォルダー内のファイルをすべて削除し、開発環境タスクを実行します。開発時に利用します。  

`npm run build`

※Yarnの場合
`yarn build`

***

### リリースコマンド
distフォルダー内のファイルをすべて削除し、本番環境タスクを実行します。納品時に利用します。  

`npm run release`

※Yarnの場合
`yarn release`

***

### 削除コマンド
distフォルダー内のファイルをすべて削除します。不要なファイルが出力されてしまった場合などで利用します。  

`npm run clean`

※Yarnの場合
`yarn clean`

***

### HTMLバリデーションコマンド
HTMLの検証を行います。納品・開発時に利用します。  

`npm run htmlValidate`

※Yarnの場合
`yarn htmlValidate`

***

### TypeScriptバリデーションコマンド
TypeScriptの検証を行います。納品・開発時に利用します。
修正必要箇所が見つかった場合はTypeScript補正コマンドを実行してみてください。  
検証設定はeslintrc.jsonに記述されています。

`npm run lint`

※Yarnの場合
`yarn lint`

***

### TypeScript補正コマンド
TypeScriptの検証で見つかったエラー内容を補正します。納品・開発時に利用します。    
検証設定はeslintrc.jsonに記述されています。

`npm run lint:fix`

※Yarnの場合
`yarn lint:fix`

***

### SCSS補正コマンド
stylelint-config-standardに基いてSCSSの補正を行います。開発時に利用します。  
検証レポートはSCSSファイルをトランスパイル時に都度表示されます。検証設定はstylelintrc.jsonに記述されています。  

[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

`npm run stylelint`

※Yarnの場合
`yarn stylelint`

***

### スタイルガイド起動コマンド
スタイルガイドジェネレーター(Fractal)を起動します。スタイルガイド作成時に利用します。
スタイルの調整時には別途、開発起動コマンドを立ち上げてください。

`npm run styleguide`

※Yarnの場合
`yarn styleguide`

***

### スタイルガイド作成コマンド
スタイルガイドジェネレーター(Fractal)で作成したUIパーツを公開用にビルドします。スタイルガイド公開時に利用します。

`npm run styleguide:build`

※Yarnの場合
`yarn styleguide:build`

***

### Lighthouse CIコマンド
Lighthouseによる品質監査を実行します。納品・開発時に利用します。
検証設定は .lighthouseciに記述されています。

`npm run lighthouse`

※Yarnの場合
`yarn lighthouse`

## HTMLについて
HTMLのメタ言語にPugを採用し、ファイルの分割管理ができるよう設計されています。
共通パーツなどはPugのIncludesを利用して管理します。SSIで分割ファイルを任意の場所に出力することも可能です。  
SSIのファイルはssiディレクトリ配下に格納し、接頭辞に "ssi" を付与します。SSIの利用例は以下になります。

```
//- SSIバナーエリア
<!--#include virtual="/assets/ssi/ssi-bnr.html" -->
```

サイト情報やメタ情報はあらかじめテンプレートを用意しています。プロジェクトに合わせて変更してください。 

マークアップはHTML5およびW3Cの規格に準拠した形で行ってください。
HTMLバリデーションのタスクを用意していますので、納品・開発時にはHTMLバリデーションコマンドを実行して検証してください。

### ディレクトリ構成
- **\_data/site.json:** サイトの基本情報を記述します。
- **\_mixin/_all.pug:** mixinのエントリーポイントです。各mixinをまとめてインクルードする共通ファイルテンプレートです。
- **\_mixin/_breadcrumb.pug:** MicrodataとWAI-ARIAに準拠したパンくずリストの生成を行うmixinです。
- **\_mixin/_picture.pug:** picture要素による画像の出し分けを行うmixinです。
- **\_partial/_site.pug:** headタグ内の記述をまとめた共通ファイルテンプレートです。
- **\_partial/_script.pug:** JavaScriptの読み込みをまとめた共通ファイルテンプレートです。
- **\_partial/_header.pug:** ヘッダーの共通ファイルテンプレートです。
- **\_partial/_footer.pug:** フッターの共通ファイルテンプレートです。
- **\_template/_layout.pug:** レイアウトを司るテンプレートです。共通ファイルテンプレートをまとめてインクルードします。

[HTML5](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/HTML5)

[W3C Markup Validation Service](https://validator.w3.org/)

## CSSについて
CSSのメタ言語にSCSSを採用し、FLOCSSベースのCSS設計に対応します。プロジェクトに応じて改変してください。
ユーザーエージェントの初期化にはHTML5 Doctor Reset CSSを利用しています。Eric Mayer’s Reset CSSをHTML5に対応させたCSSリセットです。
「」や『』などの約物を半角化させる為、Yaku Han JPを読み込んでいます。また、印刷用Print CSSをデフォルトで用意しています。
緊急対応で記述したコードやリファクタリングをあとで行いたいコードはメインファイルから分離し、`shame`ディレクトリ配下に格納します。
このようにリファクタリングが必要なコードを分離したCSSを`shame.css`と呼びます。`shame.css`の中身はできるだけ空になることを理想とします。
納品・開発時にはCSS, SCSSバリデーションタスクを用意していますのでSCSS補正コマンドを実行して検証・補正を行ってください。

[FLOCSS](https://www.tam-tam.co.jp/tipsnote/html_css/post10205.html)

[HTML5 Doctor Reset CSS](http://html5doctor.com/html-5-reset-stylesheet/)

[Yaku Han JP](https://yakuhanjp.qranoko.jp/)

[shame.css](https://csswizardry.com/2013/04/shame-css/)

### ディレクトリ構成
- **common.scss:** SCSSのエントリーポイント
- **\_print.scss:** 印刷用CSSでcommon.scssへインポート
- **fundation:** リセットCSSやMixinファイルを格納
- **layout:** ヘッダー、フッターなどレイアウトを構成するファイルを格納
- **object/component:** 再利用可能なコンポーネントを構成するファイルを格納
- **object/project:** プロジェクト固有のパターンを構成するコンポーネントファイルを格納
- **object/utility:** 余白やインデントといった補助的なファイルを格納

＊ページ単位で名前空間を持たせる場合はProject配下にページ単位のディレクトリを作成し、`p-`の接頭辞を外します。  

ex) `.top-block__element`

***

#### Common
サイト内で使用するCSSモジュールを読み込みます。SCSSファイルのエントリーポイントになります。  
Foundationレイヤー以外のCSSモジュールはglobを用いてインポートします。

**src/assets/_scss/common.scss**

***

#### Base
サイトのベースとなるデフォルトスタイルを定義します。

**src/assets/_scss/foundation/_base.scss**

***

#### Variable
再利用を想定する値を変数に格納します。
標準でコンテンツ幅変数、フォント変数、カラー変数を用意しています。

**src/assets/_scss/foundation/_variable.scss**

***

#### Mixin
メディアクエリ、vw自動計算、フォントサイズ自動計算、フォームリセット、フォームプレイスホルダーカラー、ホバーアクションなどWebフロントエンド開発で頻出する記述をMixinや変数として設定しています。
利用方法は以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/foundation/_mixin.scss**

***

#### Utility
margin, paddingそれぞれ5px毎に余白を取るclassを用意しています。
ex) Class Name: u-mb10, u-mb15, u-mb20, u-pt10, u-pt20, u-pt30
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_margin.scss**
**src/assets/_scss/object/utility/_padding.scss**

改行位置を指定するclassを用意しています。
ex) Class Name: .u-newLine-pc, .u-newLine-sp
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_newLine.scss**

CSSのDisplayプロパティを制御するclassを用意しています。
ex) Class Name: .u-dsp-block, .u-dsp-none
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_display.scss**

文字インデントを制御するclassを用意しています。
ex) Class Name: .u-indent
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_indent.scss**

***

#### Print
印刷用CSSを定義します。

**src/assets/_scss/_print.scss**

## JavaScriptについて
TypeScriptを採用し、静的型付き言語としてJavaScriptを扱います。
TypeScriptのエントリーポイントはmain.tsとします。

インポート先モジュールはwebpackを用いてバンドルしindex.jsとして出力します。
型システムは厳密にし過ぎず、生産性を重視した思想でコーディングを行います。

import/export構文はできる限りnamed exportを利用してください。
[なぜ default export を使うべきではないのか？](https://engineering.linecorp.com/ja/blog/you-dont-need-default-export/)

レガシーブラウザとの互換性を保つ為、polyfillを入れる場合は必要なモジュールをpolyfill.tsでインポートしてください。
TypeScriptのバリデーションタスクを用意していますので、納品・開発時にはTypeScriptバリデーションコマンド、TypeScript補正コマンドを実行して検証・補正を行ってください。

[がんばらないTypeScript](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)

### ディレクトリ構成
- **main.ts:** TypeScriptのエントリーポイント
- **namespace:** 名前空間で分けたTypeScriptファイルを格納
- **component:** コンポーネントを構成するTypeScriptファイルを格納
- **helper:** 重複処理行う再利用可能なTypeScriptファイルを格納
- **api:** APIなど外部サーバーとの通信処理に用いるTypeScriptファイルを格納

#### Namespace
使用状況によって名前空間を分けてファイルを用意します。書かれた処理はHTMLに紐ずきます。
標準ではサイト内で共通して利用する処理を `namespace/common` 以下に配置し、作成ページ毎に名前空間を付与しています。
ex) top.tsにはトップページで使用する処理が記述されています。
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/ts/namespace/**

#### Helper
重複する処理を使用用途に応じてファイル分割します。  
Class構文を利用することでさまざまな関数をひとまとめにして、再利用できます。
ex) mediaQuery.tsはメディアクエリの判定を行います。
詳しくは以下ディレクトリのファイル内コメントを参照してください。

[クラス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)

**src/assets/ts/helper/**

#### API
APIやDBと通信する際の処理を書いたファイルを用意します。
ex) placeholder.tsはサンプルでAPI通信を行います。

**src/assets/ts/api/**

### 主要ライブラリの利用方法
#### jQuery
jQueryを利用したい場合は利用したいモジュールで以下を記述してください。

```
import * as $ from "jquery";
```

#### Vue.js
Vue.jsを利用したい場合は利用したいモジュールで以下を記述してください。

```
import Vue from "vue";
```

### 便利なプラグイン
Web制作で頻繁に利用するプラグインを標準搭載しています。

- **スライダー:** [Swiper](https://swiperjs.com/)を利用することで特定ライブラリに依存することなくスライダーやカルーセルを簡易実装できます。
- **スムーススクロール:** [Sweet Scroll](https://github.com/wadackel/sweet-scroll)を利用することで特定ライブラリに依存することなくスクロールアニメーションが簡易実装できます。
- **画像遅延読み込み:** [lazysizes](https://github.com/aFarkas/lazysizes)を利用することで特定ライブラリに依存することなく画像の遅延読み込みを簡易実装できます。
- **非同期通信:** [axios](https://github.com/axios/axios)を利用することで特定ライブラリに依存することなく非同期通信を簡易実装できます。
- **モーダル:** [Micromodal.js](https://micromodal.now.sh/#introduction)を利用することで特定ライブラリに依存することなくWAI-ARIAガイドライン準拠のモーダルを簡易実装できます。（標準ではIE非対応）
- **Vueコンポーネント:** [Vue Class Component](https://github.com/vuejs/vue-class-component)を利用することでVueコンポーネントを実装できます。
- **フォームバリデーション:** [VeeValidate](https://logaretm.github.io/vee-validate/)を利用することでフォームバリデーションを簡易実装できます。（標準ではIE非対応）
- **UX計測:** [web-vitals](https://github.com/GoogleChrome/web-vitals)を利用することでCore Web Vitalsの計測結果をブラウザのコンソールに出力できます。

## 画像について
画像ファイルは標準で解像度を80%に圧縮するよう設定されています。
また、WebP（ウェッピー）の自動生成にも対応しています。必要に応じてgulpfile.jsの設定を変更してください。
画像の自動圧縮は適宜 `npm run build` or `yarn build` を実行して不要な画像ファイルがdistディレクトリに残らないよう心がけてください。

### 画像の読み込み
画像の読み込みは状況に応じて最適な形式で処理されるようにしてください。

[画像埋め込み要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/img)

#### レスポンシブ画像
srcset属性を利用することで画像解像度に応じた読み込みが可能となります。

```
<img src="640x300.png" srcset="1280x600.png 2x, 1920x900.png 3x" alt="サンプル画像" />
```

srcset属性と共にsizes属性を利用することでビューポート幅に応じた読み込みが可能となります。

```
<img srcset="sample-320w.jpg 320w,
             sample-480w.jpg 480w,
             sample-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="sample-800w.jpg" alt="サンプル画像">
```

picture要素とsource要素を組み合わせることでビューポート幅や次世代画像フォーマットに応じたアートディレクションが可能となります。

```
/* ビューポート幅対応 */
<picture>
  <source media="(min-width: 1028px)" srcset="1200x600.png">
  <source media="(min-width: 768px)" srcset="800x500.png">
  <img src="300x300.png" alt="サンプル">
</picture>
```

当テンプレートでは便利なmixinが用意されています。

```
+picture内にネストをして記述します。
Pug： +source(md, 'https://placehold.jp/600x600.png')
HTML： <source media="(min-width: 768px)" srcset="https://placehold.jp/600x600.png">
```
[レスポンシブ画像](https://developer.mozilla.org/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### WebP（ウェッピー）
WebPはGoogleが開発した画像フォーマットです。WebPを利用することでより軽量に画像を読み込むことが可能となります。
Googleの示した事例では、ファイルサイズは非可逆圧縮モードで（同一画像、同等画質の）JPEGと比較して25-34%小さくなり、可逆圧縮モードでPNGと比較して28%小さくなるとしている。

[WebPについて](https://ja.wikipedia.org/wiki/WebP)

[対応ブラウザ](https://caniuse.com/webp)

以下のように記述すると対応ブラウザでのみWebP画像を表示できます。

```
/* 次世代画像フォーマット対応 */
<picture>
  <source srcset="sample.webp" type="image/webp"/>
  <img src="sample.jpg" alt="サンプル"/>
</picture>
```

当テンプレートでは便利なmixinが用意されています。

```
+picture内にネストをして記述します。
Pug： +source(none, "/assets/img/share/note01.webp", "image/webp")
HTML： <source srcset="/assets/img/share/note01.webp" type="image/webp">
```

#### レイアウトシフト対策
画像ロード時に起こる表示のガタつきを防ぐため、基本的に画像にはwidth属性、height属性を指定します。
レイアウトシフトはLighthouse v6よりパフォーマンス計測対象となっています。

```
<img src="image.jpg" width="640" height="360" alt="代替テキスト" />
```

[Optimize Cumulative Layout Shift](https://web.dev/optimize-cls/#images-without-dimensions)

#### 画像の非同期読み込み
decoding属性を利用することで画像を非同期で読み込むことができます。
`decoding="async"`を指定すると他のコンテンツの表示が遅れないように、画像が非同期的にデコードされます。

```
<img src="image.jpg" decoding="async" width="640" height="360" alt="代替テキスト" />
```

#### 画像の遅延読み込み
画像の遅延読み込みでエフェクト等を付与する必要がなければloading属性を利用してください。
ファーストビュー以外で指定します。スクール表示されるような画像で利用することを推奨します。

```
<img src="image.jpg" loading="lazy" width="640" height="360" alt="代替テキスト" />
```

[Native image lazy-loading for the web!](https://addyosmani.com/blog/lazy-loading/)

画像の遅延読み込みには`lazysizes.js`を利用できます。
アニメーションやエフェクトが必要な場合に利用してください。

[lazysizes](https://github.com/aFarkas/lazysizes)

利用時には`data-src`で画像を読み込み`lazyload`クラスを付与することで実装できます。

```
<img data-src="image.jpg" alt="代替テキスト" class="lazyload" />
```

### 画像命名規則
画像ファイル、フォルダー名で使用する文字記号は「半角英数字・ハイフン・アンダースコア」のみとしてください。
全角やその他記号を利用した場合、文字化けなどのバグが発生します。

#### 共通画像の命名
サイト全体で使用するロゴ画像やアイコンなどはshareフォルダーに格納します。
以下ディレクトリを参照してください。

**src/assets/img/share/**

共通画像の命名は以下フォーマットにしたがってください。

**/share/share + "_" +（必要に応じて接頭辞をつける_内容が推測可能な任意の文字列）+ "（複数種類あれば連番or種類を表す任意の文字列）" + ".（拡張子）"**

#### 画面固有画像の命名
ページ単位で使用するロゴ画像やアイコンなどはpageフォルダー以下にページ名のフォルダーを作成して画像を格納します。
sampleというページで利用する画像であればsampleフォルダーを作成します。

**src/assets/img/page/**

ページ単位で使用する画像の命名は以下フォーマットにしたがってください。

**/page/ページ名フォルダー/（必要に応じて接頭辞をつける_内容が推測可能な任意の文字列）+ "_" +（複数種類あれば連番or種類を表す任意の文字列）+ ".（拡張子）"**

#### 内容が推測可能な任意の文字列
命名の際は以下の文字列を参照してみてください。

* 見出し `heading`
* ロゴ画像 `logo`
* ナビゲーション `nav`
* 背景画像 `bg`
* 画像テキスト `txt`
* 画像タイトル `ttl`
* アイコン `icon`
* 画像全般 `img`
* 写真 `pic`
* バナー `bnr`
* ボタン `btn`

## SVGスプライトについて
アイコン管理にはSVGスプライトを採用しています。Gulpを起動させた状態で利用したいSVGファイルを `/assets/svg` 配下へ格納するとSVGファイルを結合し `sprite.svg` として出力します。以下ディレクトリを参照してください。

**src/assets/svg/**
**dist/assets/svg/sprite.svg**

利用時は以下のようにしてアイコンを呼び出します。SVGファイル名はIDと紐づけられます。

```
<!-- SVGスプライト出力 -->
<svg class="icon" role="img">
  <use xlink:href="/assets/svg/sprite.svg#icon01"></use>
</svg>
<!--//End SVGスプライト出力 -->
```

[Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)

## スタイルガイドについて
スタイルガイドはプロジェクト内で使用するフォント、カラー、UIパーツを一覧参照することができるツールです。
プロジェクト規模が大きい場合はスタイルガイド利用を検討してみてください。
スタイルガイドを用意することで以下のメリットを受けることができます。

### スタイルガイド利用のメリット

* 利用するUIパーツを最小限に留め、デザインの一貫性を保つ
* UIパーツを再利用しやすくする
* プロジェクト参画人数が増えた場合や制作担当者が変わった場合、引継ぎを容易にする
* 全体的なフロントエンド開発工数を抑える
* 運用フェーズ、ページ量産における担当者の属人化を防ぐ

[質の高いスタイルガイドを作成するために考えておくべきこと](https://www.tam-tam.co.jp/tipsnote/html_css/post14750.html)

### スタイルガイドジェネレーター(Fractal)
スタイルガイドジェネレーターにFractalを採用しています。Fractalを利用することでUIパーツの一覧出力が容易になります。  
Fractalで利用されているテンプレートエンジンは通常Handlebarsですが、このテンプレートではpugファイルで管理できるようにしています。

[Fractal](https://fractal.build/guide/)

### ディレクトリ構成
styleguide-dev配下へスタイルガイドに掲載するUIパーツを作成します。

**src/styleguide-dev/**

## Lighthouse CIについて
Lighthouse CIで定期的にプロダクトの品質監査を行うことができます。

#### ローカル環境で実行する場合
コンテンツをdistフォルダー内にビルドした状態で以下コマンドを実行してください。

```
yarn lighthouse
```

#### CI/CDで実行する場合
CI/CDに組み込む場合、GitHub Actionsの利用を推奨します。

[GitHub Actions](https://github.co.jp/features/actions)

[GitHub Actionsで静的ファイルの自動デプロイ（CI / CD）環境を構築する方法](https://medium.com/@yonemoto/github-actions%E3%81%A7%E9%9D%99%E7%9A%84%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E8%87%AA%E5%8B%95%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4-ci-cd-%E7%92%B0%E5%A2%83%E3%82%92%E6%A7%8B%E7%AF%89%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95-77de803851ba)

#### 監査結果の確認
ローカル環境で実行した場合、実行結果はターミナルと`.lighthouseci`フォルダーに出力されます。
uploadオプションでtarget=temporary-public-storageにするとGCP Cloud Storageに7日間一時的に監査結果が保存されます。
デフォルトではuploadオプションをコメントアウトしています。
監査結果を確認する場合はGCP Cloud StorageにアップされたURLで確認するか`.lighthouseci`フォルダーに生成されたHTMLファイルを展開して確認できます。

[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md#collect-lighthouse-results)

[Lighthouse CIを利用したWebサイト品質監査の自動化](https://medium.com/@yonemoto/lighthouse-ci%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9Fweb%E3%82%B5%E3%82%A4%E3%83%88%E5%93%81%E8%B3%AA%E7%9B%A3%E6%9F%BB%E3%81%AE%E8%87%AA%E5%8B%95%E5%8C%96-9f1b3b431c54)

## Web Vitalsについて
Web VitalsはGoolgeが提唱するUXを高品質に保つための指標です。
核となる測定項目は「Core Web Vitals」と呼ばれます。測定項目は大きく以下3つに分けられます。

* LCP(Largest Contentful Paint ): ユーザーがページでもっとも有意義なコンテンツをどのくらい早く見ることができるかを表します。
* FID(First Input Delay ): 最初の入力までの遅延を表します。
* CLS(Cumulative Layout Shift): ページがどのくらい安定しているように感じられるかを表します。

ローカル環境ではCore Web Vitalsの計測結果をブラウザのコンソールに出力します。
計測結果の判定は以下指標を参考にしてください。

|  指標  |  良好  | 改善の余地あり | 改善が必要 |
| ---- | ---- | ---- |---- |
|  LCP  |  2.5秒未満  | 4秒以下  | 4秒を超える  |
|  FID  |  100ミリ秒未満  | 300ミリ秒未満  | 300ミリ秒を超える  |
|  CLS  |  0.1未満 | 0.25以下  | 0.25を超える  |

[Web Vitals](https://web.dev/vitals/)

[Web Vitals の概要: サイトの健全性を示す重要指標](https://developers-jp.googleblog.com/2020/05/web-vitals.html)
