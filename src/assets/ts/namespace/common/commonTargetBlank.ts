/**
 * rel="noopener"の自動付与
 * https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=ja
 */

export default function commonTargetBlank(): void {
  const targetBlank = document.querySelectorAll("a");
  targetBlank.forEach(element => {
    if (element.hasAttribute("target") === false) {
      return;
    }
    if (element.getAttribute("target") !== "_blank") {
      return;
    }
    element.setAttribute("rel", "noopener");
  });
}
