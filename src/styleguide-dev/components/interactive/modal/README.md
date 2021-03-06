## モダールモジュールに関するメモ
Vue.js依存モーダルウインドウとMicromodal.jsを利用したモーダルウインドウ、2パターンを用意しています。

Vue.js依存モーダルウインドウは自由にスタイル適用ができ、Vue.js既習者であれば簡易に実装できます。
利用方法は該当するTypeScriptモジュールを参照してください。

Micromodal.jsを利用したモーダルウインドウは特定のライブラリに依存せず利用できます。
またWAI-ARIAガイドライン準拠の実装を標準でカバーしているため、アクセシビリティを考慮した実装が可能となります。
ただし、マークアップの自由度が高い分、実装難易度が少し高くなります。また、標準ではIE非対応になります。

[Micromodal.js公式サイト](https://micromodal.now.sh/#introduction)

### モジュールパターン名
1. Modal-A-01: Vue.jsシンプルモーダルウインドウ
2. Modal-B-01: Micromodal.jsシンプルモーダルウインドウ
