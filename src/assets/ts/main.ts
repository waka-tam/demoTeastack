// ベースファイル
import "./polyfill";

// API（プロジェクト開始時には以下削除してください）
import placeholder from "./api/placeholder";

// Namespace（プロジェクト開始時には以下削除してください）
import commonMenu from "./namespace/common/menu";
import top from "./namespace/top";
import sample02 from "./namespace/sample02";

// 処理実行
commonMenu();
top();
sample02();
placeholder();
