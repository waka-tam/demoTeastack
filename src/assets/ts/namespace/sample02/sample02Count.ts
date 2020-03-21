import Vue from "vue";
import CountComponent from "../../component/count";

// Vueサンプル処理（プロジェクト開始時には以下削除してください）
export default function sample02(): void {
  if (document.querySelector("#sample02")) {
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
}
