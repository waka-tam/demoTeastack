// axiosインポート
import axios from "axios";

export default function jsonGet(request): void {
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const getUrl = `${baseUrl}${request}`;
  // axiosサンプル処理
  axios
    // JSONPlaceholderへのリクエスト
    .get(getUrl)
    .then(function(response) {
      // 通信成功時の処理
      const title = document.querySelector(".js-ttl");
      const body = document.querySelector(".js-body");
      title.innerHTML = response.data.title;
      body.innerHTML = response.data.body;
      console.log(response);
    })
    .catch(function(error) {
      // エラー時の処理
      console.log(error);
    })
    .finally(function() {
      // 常に実行する処理
    });
}
