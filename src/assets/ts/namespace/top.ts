/**
 * アコーディオンメニュー開閉
 */

function topAccordion(): void {
  const trigger = document.querySelectorAll(".js-accordion-trigger");
  const triggerArr = Array.prototype.slice.call(trigger);
  for (let i = 0; i < triggerArr.length; i++) {
    triggerArr[i].addEventListener("click", function() {
      const parent = this.parentNode;
      const body = parent.nextElementSibling;
      if (this.classList.contains("is-accordion-active")) {
        this.classList.remove("is-accordion-active");
        body.classList.remove("is-accordion-open");
      } else {
        this.classList.add("is-accordion-active");
        body.classList.add("is-accordion-open");
      }
    });
  }
}

/**
 * タブナビゲーション切り替え
 * 第一引数にID指定、第二引数に初期表示させたいパネルを指定
 * tab("#tab", "panel1");
 */

// タブ出力処理インポート
import { tab } from "../helper/tab";

function topTab(): void {
  // 第一引数にID指定、第二引数に初期表示させたいパネルを指定
  tab("#tab", "panel1");
}

export { topAccordion, topTab };
