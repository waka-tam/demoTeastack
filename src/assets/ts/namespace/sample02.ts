/**
 * Vue バナーリストコンポーネントParent
 */

// vueインポート
import Vue from "vue";
// bannerコンポーネントインポート
import BnrComponent from "../component/banner";

// Vueバナーコンポーネント
function sample02Banner(): void {
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

/**
 * Swiperスライダー
 * 利用しない場合はライブラリCSSも削除してください
 * https://swiperjs.com/
 */

//import Swiper from "swiper";
// swiperインポートIE11対応
import Swiper from "swiper/js/swiper.min.js";

function sample02Slider(): void {
  if (document.querySelector("#commonSlider")) {
    new Swiper("#commonSlider", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true
      }
    });
  }
}

export { sample02Banner, sample02Slider };
