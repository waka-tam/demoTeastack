// ベースファイル
import "./polyfill";

// Namespace（プロジェクト開始時には以下削除してください）
import commonMenu from "./namespace/common/commonMenu";
import topTextReturn from "./namespace/top/topTextReturn";
import sampleJsonGet from "./namespace/sample/sampleJsonGet";
import sample02Count from "./namespace/sample02/sample02Count";

// Common
commonMenu();
// Top
topTextReturn();
// Sample
sampleJsonGet();
// Sample02
sample02Count();
