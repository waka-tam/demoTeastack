/**
 * Vue バナーリストコンポーネントChild
 */

// vueインポート
import Vue from "vue";
// TypeScript内でVueコンポーネントを利用するためにインポート
import Component from "vue-class-component";
// コンポーネント登録
@Component({
  template: `
    <li class="p-bnr__list-item">
      <a class="p-bnr__list-link" :href="bnrItem.url">
        <img :src="bnrItem.img" :alt="bnrItem.alt"
      /></a>
    </li>
  `,
  // propsはv-bind経由で親コンポーネントから引き渡される
  // 親コンポーネントではケバブケースで記述される
  // ex) bnr-item
  props: {
    bnrItem: {
      type: Object,
      required: true
    }
  }
})
export default class BnrComponent extends Vue {}
