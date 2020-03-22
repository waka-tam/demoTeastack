// ハンバーガーメニュー開閉時class, 属性処理
export default function commonMenu(): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const body = document.body;
  const menu = document.querySelector(".js-menu");
  menu.addEventListener("click", function() {
    body.classList.toggle("is-menuActive");
    if (this.getAttribute("aria-expanded") == "false") {
      this.setAttribute("aria-expanded", "true");
    } else {
      this.setAttribute("aria-expanded", "false");
    }
  });
}
