// ベースファイル
import "./polyfill";

// Namespace（プロジェクト開始時には以下削除してください）
import commonMenu from "./namespace/common/commonMenu";
import commonSmoothScroll from "./namespace/common/commonSmoothScroll";
import topTab from "./namespace/top/topTab";
import topAccordion from "./namespace/top/topAccordion";
import topTextReturn from "./namespace/top/topTextReturn";
import sampleJsonGet from "./namespace/sample/sampleJsonGet";
import sample02Count from "./namespace/sample02/sample02Count";

// Common
commonMenu();
commonSmoothScroll();
// Top
topAccordion();
topTab();
topTextReturn();
// Sample
sampleJsonGet();
// Sample02
sample02Count();
