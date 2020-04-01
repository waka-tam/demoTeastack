/**
 * ハンバーガーメニュー開閉
 * https://www.w3.org/TR/2014/REC-wai-aria-20140320/states_and_properties#aria-expanded
 */

export default function commonMenu(): void {
  const body = document.body;
  const menu = document.querySelector(".js-menu");
  if (menu) {
    menu.addEventListener("click", function() {
      // body要素でis-menuActive切り替え
      body.classList.toggle("is-menuActive");
      // 開閉状態を示すaria-expanded属性の切り替え
      if (this.getAttribute("aria-expanded") == "false") {
        this.setAttribute("aria-expanded", "true");
      } else {
        this.setAttribute("aria-expanded", "false");
      }
    });
  }
}
