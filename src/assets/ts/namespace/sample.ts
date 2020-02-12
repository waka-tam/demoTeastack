"use strict";
// サンプル処理（プロジェクト開始時には削除してください）
namespace Sample {
  export class SampleTtl {
    constructor(private title: string) {}

    public getTtl(): string {
      return this.title;
    }
  }
}
export default Sample;
