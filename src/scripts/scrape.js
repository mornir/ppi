import { parse } from 'node-html-parser'
export function scrape(htmlText) {
  const root = parse(htmlText)
  const titlesNodes = Array.from(root.querySelectorAll('.accordion__btn'))

  function getList(query) {
    const links = titlesNodes
      .find((e) => e.textContent.includes(query))
      ?.nextElementSibling?.querySelectorAll('a')

    return links.map((link) => {
      return {
        text: link.textContent.trim(),
        href: link.getAttribute('href'),
      }
    })
  }

  return getList('Directives')
}
