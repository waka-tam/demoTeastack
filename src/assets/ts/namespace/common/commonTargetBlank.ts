/**
 * rel="noopener"の自動付与
 * https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=ja
 */

export default function commonTargetBlank(): void {
  const targetBlank = document.querySelectorAll("a");
  // querySelectorAllで生成されるNodelistを配列へ変換し、IE11でforEachが利用できるようにする
  const targetBlankArr = Array.prototype.slice.call(targetBlank);
  targetBlankArr.forEach(element => {
    if (element.hasAttribute("target") === false) {
      return;
    }
    if (element.getAttribute("target") !== "_blank") {
      return;
    }
    element.setAttribute("rel", "noopener");
  });
}
