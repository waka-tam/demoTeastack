import jsonGet from "../../api/jsonGet";

export default function sampleJsonGet(): void {
  if (document.querySelector("#sample")) {
    const request = "posts/3";
    jsonGet(request);
  }
}
