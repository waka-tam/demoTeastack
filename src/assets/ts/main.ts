/**
 * エントリーポイントファイル
 */

// 主要ライブラリインポート例
// import * as $ from "jquery";
// import Vue from "vue";

// ベースファイル
import "./polyfill";

// Namespace（プロジェクト開始時には以下ファイルを適宜削除もしくは移動させて利用してください）
// Commonインポート
import commonMenu from "./namespace/common/commonMenu";
import commonSmoothScroll from "./namespace/common/commonSmoothScroll";
import commonTargetBlank from "./namespace/common/commonTargetBlank";
// Topインポート
import topTab from "./namespace/top/topTab";
import topAccordion from "./namespace/top/topAccordion";
// Sampleインポート
import sampleFormValidate from "./namespace/sample/sampleFormValidate";
import sampleJsonGet from "./namespace/sample/sampleJsonGet";
import sampleModal from "./namespace/sample/sampleModal";
// Sample02インポート
import sample02Banner from "./namespace/sample02/sample02Banner";
import sample02Slider from "./namespace/sample02/sample02Slider";

// Common処理実行
commonMenu();
commonSmoothScroll();
commonTargetBlank();
// Top処理実行
topAccordion();
topTab();
// Sample処理実行
sampleFormValidate();
sampleJsonGet();
sampleModal();
// Sample02処理実行
sample02Banner();
sample02Slider();
