// axiosインポート
import axios from "axios";

export default function placeholder(): void {
  // axiosサンプル処理
  axios
    // JSONPlaceholderへのリクエスト
    .get("https://jsonplaceholder.typicode.com/posts/1")
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
