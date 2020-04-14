/**
 * Vue バナーリストコンポーネントParent
 */

// vueインポート
import Vue from "vue";
// bannerコンポーネントインポート
import BnrComponent from "../../component/banner";

// Vueバナーコンポーネント
export default function sample02Banner(): void {
  if (document.querySelector("#sample02Banner")) {
    new Vue({
      el: "#sample02Banner",
      data(): object {
        return {
          // コンポーネントのデータ定義
          bnrItems: [
            {
              // 画像パス
              img: "https://placehold.jp/600x250.png",
              // バナーリンク
              url: "#",
              // 画像ALT
              alt: "サンプル画像1"
            },
            {
              // 画像パス
              img: "https://placehold.jp/600x250.png",
              // バナーリンク
              url: "#",
              // 画像ALT
              alt: "サンプル画像2"
            },
            {
              // 画像パス
              img: "https://placehold.jp/600x250.png",
              // バナーリンク
              url: "#",
              // 画像ALT
              alt: "サンプル画像3"
            }
          ]
        };
      },
      // bnr-componentの包括要素にレイアウト指定のclassを設定
      template: `
      <div class="p-bnr">
        <ul class="p-bnr__list p-bnr__list-col3">
         <bnr-component v-for="bnrItem in bnrItems" :bnr-item="bnrItem"></bnr-component>
        </ul>
      </div>
      `,
      // BnrComponentの呼び出し
      components: {
        "bnr-component": BnrComponent
      }
    });
  }
}
