// スクロールトップ
export default function commonPageTop(): void {
  const pageTopBtn = document.querySelector(".js-pageTop");
  pageTopBtn.addEventListener("click", function interval() {
    const offsetY = window.pageYOffset;
    window.scrollTo(0, offsetY - 50);
    if (offsetY > 0) {
      window.setTimeout(interval, 10);
    }
  });
}
