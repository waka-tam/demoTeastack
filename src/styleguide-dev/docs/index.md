---
title: スタイルガイド
label: スタイルガイド
---

# 本スタイルガイドについて
スタイルガイドジェネレーター(Fractal)でUIパーツを一覧で出力。

[Fractal](https://fractal.build/guide/)

[Fractalテーマ設定](https://fractal.build/guide/web/default-theme.html#configuration)

## カテゴリー
コンポーネントの分類ルールは以下です。（必要に応じて変更してください）

- **Global:** サイト全体で使われる要素
- **Layout:** コンポーネントの余白指定などのレイアウトパターン
- **Navigation:** グローバルナビやパンくずリストなどユーザーを誘導するする要素
- **Image:** ロゴやメインビジュアル、アバターやサムネイルや背景画像などの画像
- **Icon:** アイコンなど用途やカテゴリーを端的に示す画像、要素
- **Form:** テキスト入力エリア、Selectメニューなどのフォーム要素
- **Button:** オンオフや遷移、表示や非表示といった操作の切り替えに使われる要素
- **Heading:** タイトルなどの見出し要素
- **Text:** 文章やラベルのようなテキスト要素
- **Link:** テキストリンク要素
- **List:** 順序付きや定義リストまたなどの要素
- **Table:** 表組であらわされる要素
- **Block:** 見出しや画像、テキストなどが1つのまとめりになっているエリア
- **Interactive:** アコーディオン、カルーセルなどユーザー操作で稼働する要素
- **Media:** ビデオやオーディオのようなリッチメディア要素
- **ThirdParty:**  ThirdParty：Google Mapsなどサードパーティサービス
- **Notification:** 警告メッセージ、エラーメッセージ、ローディング、ポップアップなどユーザーに知らせる為の要素

## CSS設計
CSS設計はFLOCSSを採用。FLOCSSはレイヤーという概念が強く、レイヤーに分けてCSSを管理。
レイヤーは大きくFoundation、Layout、Objectに分けられ、ObjectレイヤーにProject、Component、Utilityといったサブレイヤーを配置。

### Foundation
リセットCSSを記述し、ブラウザのデフォルトスタイルを初期化。
標準で設定済みですので詳細は本テンプレートの`README.md`ファイルを参照してください。

### Layout
レイアウト、コンテンツ幅、余白などコンテナーブロックのスタイルを定義。
記述量が少ないレイヤーの為、Projectで巻き取れる場合は無理に作成する必要はありません。

### Object
プロジェクト内で繰り返されるデザインパターンを定義。

### Component
再利用可能で汎用的なパターンを定義。

### Project
プロジェクト固有のパターンを定義。

### Utility
細かなスタイル調整が必要な場合のスタイルを定義。

### 命名規則
命名規則は以下のように各レイヤーを表す接頭辞を付与。

- **Layout:** .l-*
- **Component:** .c-*
- **Project:** .p-*
- **Utility:** .u-*

### BEM記法
class名はBEMの構造に合わせて記述。

Block__Element--modifier  
ex) .c-article__txt--arert

### ComponentとProjectの仕分け方
基本的にProjectレイヤーとしてパターンを定義し、その中で抽象化できる箇所だけをComponentにするフローが推奨。
パターンを作成する際は以下を繰り返し行う。

1. Projectレイヤーでパターンを定義する
2. コードのリファクタリングを行い、Componentレイヤーにできる箇所がないか検討する
3. 汎用的に再利用できる箇所があればComponentに抽象化したパターンを記述する。


