/**
 * エントリーポイントファイル
 */

// 主要ライブラリインポート例
// import * as $ from "jquery";
// import Vue from "vue";

// ベースファイル
// Polyfill ポリフィル
import "./polyfill";
// Lazy Load 画像遅延読み込み
import "lazysizes";

// Namespace（プロジェクト開始時には以下ファイルを適宜削除もしくは移動させて利用してください）
// Commonインポート
import { commonMenu } from "./namespace/common/commonMenu";
import { commonSmoothScroll } from "./namespace/common/commonSmoothScroll";
import { commonTargetBlank } from "./namespace/common/commonTargetBlank";
// Topインポート
import { topTab, topAccordion } from "./namespace/top";
// Sampleインポート
import {
  sampleModal,
  sampleMicoModal,
  sampleFormValidate
} from "./namespace/sample";
// Sample02インポート
import { sample02Banner, sample02Slider } from "./namespace/sample02";

// Common処理実行
commonMenu();
commonSmoothScroll();
commonTargetBlank();
// Top処理実行
topAccordion();
topTab();
// Sample処理実行
sampleFormValidate();
sampleModal();
sampleMicoModal();
// Sample02処理実行
sample02Banner();
sample02Slider();
