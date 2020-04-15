/**
 * 文字数制限
 * text: 対象テキスト
 * trimLength: トリミング文字数(default: 50)
 * afterText: トリミング後に付与する文字列(default: "…")
 * trimTxt("テキスト", 20, "…");
 */

export default function trimTxt(
  text: string,
  trimLength: number,
  afterText: string
): string {
  trimLength = trimLength || 50;
  afterText = afterText || "…";
  if (text.length < trimLength) {
    return text;
  }
  return text.substring(0, trimLength) + afterText;
}
