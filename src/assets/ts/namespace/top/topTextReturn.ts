import * as $ from "jquery";
import MediaQuery from "../../helper/MediaQuery";
import TextReturn from "../../helper/textReturn";

export default function topTextReturn(): void {
  // jQueryサンプル処理（プロジェクト開始時には以下削除してください）
  // SampleTtlクラスをインスタンス化
  const message = new TextReturn.SampleTtl(
    "これはjQueryのサンプル処理です!画面サイズに応じて文言が切り替わります。"
  );
  // jsメディアクエリサンプル処理（プロジェクト開始時には以下削除してください）
  MediaQuery.matches("md", matches => {
    matches
      ? $(".js-sample").html(message.getTtl() + "画面幅が768以上ですね！")
      : $(".js-sample").html(
          message.getTtl() + "画面幅が768以下ですね！（モバイルでの表示）"
        );
  });
}
