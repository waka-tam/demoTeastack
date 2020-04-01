/**
 * Vue サンプル
 */

// vueインポート
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  template: `
    <div>
      <h2>{{ message }}</h2>
      <p>{{ count }}</p>
      <p>
        <button @click="onClick">カウント +1</button>
      </p>
    </div>
  `,
  props: ["message"]
})
export default class CountComponent extends Vue {
  count = 0;

  onClick(): void {
    console.log("クリックしました！！");
    this.count = this.count + 1;
  }
}
