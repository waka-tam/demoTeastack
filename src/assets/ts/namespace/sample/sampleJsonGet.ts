/**
 * Axios通信処理
 */

// Axoios GET通信処理インポート
import jsonGet from "../../api/jsonGet";

export default function sampleJsonGet(): void {
  jsonGet
    .then(response => {
      console.log(response.data.data.pref);
    })
    .catch(error => {
      // エラー時の処理
      console.log(error);
    })
    .finally(() => {
      // 常に実行する処理
    });
}
