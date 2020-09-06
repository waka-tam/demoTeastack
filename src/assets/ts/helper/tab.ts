/**
 * タブナビゲーション切り替え
 * 第一引数にID指定、第二引数に初期表示させたいパネルを指定
 * tab("#tab", "panel1");
 */

// vueインポート
import Vue from "vue";

function tab(tabId, panelNum): void {
  if (document.querySelector(tabId)) {
    new Vue({
      el: tabId,
      data: {
        tab: panelNum
      },
      methods: {
        /**
         * クリック時のイベントハンドラー
         */
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        changeTab(event) {
          // イベント発生源の要素を取得
          const element = event.currentTarget;
          // aria-controls 属性の値を取得
          const tabState = element.getAttribute("aria-controls");
          // プロパティーを更新
          this.tab = tabState;
        }
      }
    });
  }
}

export { tab };
