/**
 * `em`基準のフォントサイズ。
 */
const BROWSER_DEFAULT_FONT_SIZE = 16;
/**
 * メディアクエリ変数
 */
const list = {
  sm: 375,
  md: 768,
  lg: 1028,
  xl: 1230
};

/**
 * メディアクエリ判定
 */
export default class MediaQuery {
  /**
   * メディアクエリ変数返却
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static get list() {
    return list;
  }

  /**
   * 利用サンプル
   * MediaQuery.matches('md', matches => {
   *   console.log(matches ? 'md' : 'sm');
   * });
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static matches(query, layoutChangedCallback) {
    let mediaQuery = `(min-width: ${list[query] /
      BROWSER_DEFAULT_FONT_SIZE}em)`;

    if (typeof query === "number") {
      mediaQuery = `(min-width: ${query / BROWSER_DEFAULT_FONT_SIZE}em)`;
    }

    const mql = window.matchMedia(mediaQuery);
    const listener = (event): void => {
      layoutChangedCallback(event.matches);
    };
    mql.addListener(listener);
    layoutChangedCallback(mql.matches);
    const uninstall = (): void => {
      mql.removeListener(listener);
    };
    return uninstall;
  }
}
