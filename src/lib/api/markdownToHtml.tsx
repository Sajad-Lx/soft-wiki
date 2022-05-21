import { remark } from "remark";
import html from "remark-html";
// import MuiMarkdown from "mui-markdown";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
