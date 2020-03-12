"use strict";

// jsファイルインポート
import "./polyfill";
import MediaQuery from "./helper/MediaQuery";
import * as $ from "jquery";
import Vue from "vue";

// apiインポートサンプル処理（プロジェクト開始時には以下削除してください）
import "./api/placeholder";

// namespaceインポートサンプル処理（プロジェクト開始時には以下削除してください）
import Sample from "./namespace/sample";
import CountComponent from "./namespace/count";

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

// Vueサンプル処理（プロジェクト開始時には以下削除してください）
if (document.querySelector("#app")) {
  new Vue({
    el: "#app",
    template: `
      <div class="app">
        <section>
          <h2>Vue.jsでカウンターを作成しました!</h2>
          <count-component message="TypeScriptでVueを利用するチュートリアル"></count-component>
        </section>
      </div>
      `,
    components: {
      "count-component": CountComponent
    }
  });
}
