/**
 * フォームバリデーション
 * VeeValidate Vue.js依存フォームバリデーションプラグイン
 * https://logaretm.github.io/vee-validate/
 */

// vueインポート
import Vue from "vue";
// VeeValidateインポート
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
// VeeValidateバリデーションルールインポート
import { required, email, regex } from "vee-validate/dist/rules";

// ValidationProvider, ValidationObserverの読み込み
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

// 必須項目ルール
extend("required", {
  ...required,
  message: "これは必須の入力項目です"
});

// メールアドレスバリデーションルール
extend("email", {
  ...email,
  message: "正しいメールアドレスを入力してください"
});

// 正規表現ルール
extend("regex", {
  ...regex,
  message: "正しい電話番号を入力してください(ハイフンあり)"
});

function sampleFormValidate(): void {
  if (document.querySelector("#inquiryForm")) {
    new Vue({
      el: "#inquiryForm",
      data: {
        // お名前
        name: "",
        // メールアドレス
        email: "",
        // 電話番号
        tel: "",
        // 問い合わせ種別
        contactType: "",
        // 問い合わせ方法
        checkContact: "tel",
        // 問い合わせ内容
        content: "",
        // プライバシーポリシー同意
        privacy: false
      },
      methods: {
        onSubmit: function(): void {
          alert("送信されました");
        }
      }
    });
  }
}

/**
 * Axios通信処理
 */

// Axoios GET通信処理インポート
// import jsonGet from "../api/jsonGet";

// function sampleJsonGet(): void {
//   jsonGet
//     .then(response => {
//       console.log(response.data.data.pref);
//     })
//     .catch(error => {
//       // エラー時の処理
//       console.log(error);
//     })
//     .finally(() => {
//       // 常に実行する処理
//     });
// }

/**
 * Vue.jsモーダル
 * 第一引数にID指定
 * tab("#modal");
 */

// タブ出力処理インポート
import { modal } from "../helper/modal";

function sampleModal(): void {
  modal("#modal");
}

/**
 * Micromodal.jsモーダル
 * https://micromodal.now.sh/#introduction
 */
import MicroModal from "micromodal";
function sampleMicoModal(): void {
  MicroModal.init();
}

export { sampleModal, sampleMicoModal, sampleFormValidate };
