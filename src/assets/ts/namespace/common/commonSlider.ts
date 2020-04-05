/**
 * Swiperスライダー
 * 利用しない場合はライブラリCSSも削除してください
 * https://swiperjs.com/
 */

// swiperインポート
import Swiper from "swiper";

export default function slider(): void {
  if (document.querySelector(".swiper-container")) {
    new Swiper(".swiper-container", {
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
