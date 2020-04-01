/**
 * タブナビゲーション切り替え
 * 第一引数にID指定、第二引数に初期表示させたいパネルを指定
 * tab("#tab", "panel1");
 */

// タブ出力処理インポート
import tab from "../../helper/tab";

export default function commonTab(): void {
  if (document.querySelector("#tab")) {
    // 第一引数にID指定、第二引数に初期表示させたいパネルを指定
    tab("#tab", "panel1");
  }
}
