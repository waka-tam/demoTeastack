/**
 * Axoios GET通信サンプル
 */

// axiosインポート
import axios from "axios";

export default function jsonGet(): void {
  // 通信先ドメイン
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const request = "posts/3";
  const getUrl = `${baseUrl}${request}`;
  // GET通信
  axios
    .get(getUrl)
    .then(response => {
      // 通信成功時の処理
      console.log("タイトル:" + response.data.title);
      console.log("本文:" + response.data.body);
    })
    .catch(error => {
      // エラー時の処理
      console.log(error);
    })
    .finally(() => {
      // 常に実行する処理
    });
}
