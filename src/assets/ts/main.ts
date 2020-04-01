// ベースファイル
import "./polyfill";

// Namespace（プロジェクト開始時には以下削除してください）
import commonMenu from "./namespace/common/commonMenu";
import commonAccordion from "./namespace/common/commonAccordion";
import commonSmoothScroll from "./namespace/common/commonSmoothScroll";
import commonTab from "./namespace/common/commonTab";
import topTextReturn from "./namespace/top/topTextReturn";
import sampleJsonGet from "./namespace/sample/sampleJsonGet";
import sample02Count from "./namespace/sample02/sample02Count";

// Common
commonMenu();
commonAccordion();
commonSmoothScroll();
commonTab();
// Top
topTextReturn();
// Sample
sampleJsonGet();
// Sample02
sample02Count();
