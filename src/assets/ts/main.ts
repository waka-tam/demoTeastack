"use strict";

// jsファイルインポート
import "./polyfill";
import MediaQuery from "./helper/MediaQuery";
import * as $ from "jquery";
import Sample from "./namespace/sample";

// jsサンプル処理（プロジェクト開始時には以下削除してください）
const message = new Sample.SampleTtl("Hello TypeScript!");
console.log(message.getTtl());

// jQueryサンプル処理（プロジェクト開始時には以下削除してください）
$(() => {
  $(".js-sample").html(message.getTtl());
});

// jsメディアクエリサンプル処理（プロジェクト開始時には以下削除してください）
MediaQuery.matches("md", matches => {
  console.log(matches ? "画面幅が768以上です" : "画面幅が768以下です");
});
