/**
 * エントリーポイントファイル
 */

// 主要ライブラリインポート例
// import * as $ from "jquery";
// import Vue from "vue";

// ベースファイル
import "./polyfill";

// Namespace（プロジェクト開始時には以下削除してください）
import commonMenu from "./namespace/common/commonMenu";
import commonSmoothScroll from "./namespace/common/commonSmoothScroll";
import commonSlider from "./namespace/common/commonSlider";
import commonTargetBlank from "./namespace/common/commonTargetBlank";
import topTab from "./namespace/top/topTab";
import topAccordion from "./namespace/top/topAccordion";
import sampleJsonGet from "./namespace/sample/sampleJsonGet";
import sampleModal from "./namespace/sample/sampleModal";
import sample02Count from "./namespace/sample02/sample02Count";

// Common
commonMenu();
commonSmoothScroll();
commonSlider();
commonTargetBlank();
// Top
topAccordion();
topTab();
// Sample
sampleJsonGet();
sampleModal();
// Sample02
sample02Count();
