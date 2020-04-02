/**
 * モーダル
 * 第一引数にID指定
 * tab("#modal");
 */

// vueインポート
import Vue from "vue";

export default function modal(modalId): void {
  if (document.querySelector(modalId)) {
    new Vue({
      el: modalId,
      data: {
        showModal: false
      },
      methods: {
        openModal: function(): void {
          this.showModal = true;
        },
        closeModal: function(): void {
          this.showModal = false;
        }
      }
    });
  }
}
