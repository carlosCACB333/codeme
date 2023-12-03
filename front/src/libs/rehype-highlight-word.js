import { toHtml } from "hast-util-to-html";
import rehypeParse from "rehype-parse";
import { unified } from "unified";

const CALLOUT = /__(.*?)__/g;

export default function wrapLinesFunction(code) {
  const html = toHtml(code);
  const result = html.replace(
    CALLOUT,
    (_, text) => `<span class="highlight-word">${text}</span>`
  );
  const hast = unified().use(rehypeParse).parse(result);

  return hast.children;
}
