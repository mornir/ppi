import { parse } from "node-html-parser";
export function scrape(htmlText) {
  const root = parse(htmlText);

  const links = root.querySelectorAll("main a");

  console.table(links);

  /* const directive = links.map(link =>) */

  return links;
}
