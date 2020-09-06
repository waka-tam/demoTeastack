/**
 * スムーススクロール
 * https://github.com/wadackel/sweet-scroll
 */

import SweetScroll from "sweet-scroll";
function commonSmoothScroll(): void {
  const scroller = new SweetScroll({
    trigger: 'a[href*="#"]:not([href*="/"])', // トリガーとなる要素をCSSセレクタで指定
    header: "[data-scroll-header]", // 固定ヘッダをCSSセレクタで指定
    duration: 1000, // アニメーション再生時間のミリ秒
    easing: "easeOutQuint", // イージングのタイプ
    offset: 0, // スクロール位置のオフセット
    vertical: true, // 垂直方向のスクロールを許可する
    horizontal: false, // 水平方向のスクロールを許可する
    cancellable: true, // ホイールやタッチイベント発生時にスクロールを停止する
    updateURL: true, // スクロール完了後にURLを更新する
    preventDefault: true, // コンテナ要素のクリックイベントを防止する
    stopPropagation: true // コンテナ要素のバブリングを防止する
  });

  // ページ読み込み時にURLのハッシュと同じid属性があれば指定要素まで移動
  const locationHash = window.location.hash;
  const hashExists = locationHash.length >= 1;

  if (!hashExists) return;

  if (hashExists) {
    window.location.hash = "";
  }

  window.addEventListener("load", () => {
    const scrollElement = document.getElementById(locationHash.substr(1));
    const needsInitialScroll = scrollElement != null;

    if (needsInitialScroll) {
      scroller.to(locationHash, { updateURL: "replace" });
    }
  });
}

export { commonSmoothScroll };
