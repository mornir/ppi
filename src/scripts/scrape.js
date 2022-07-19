import { parse } from 'node-html-parser'
export function scrape(html) {
  const root = parse(html)
  const titlesNodes = Array.from(root.querySelectorAll('.accordion__btn'))

  function getList(query) {
    const links = titlesNodes
      .find((e) => e.textContent.includes(query))
      ?.nextElementSibling?.querySelectorAll('a')

    return links.map((link) => {
      const [code, ...rest] = link.textContent.trim().split(' ')
      return {
        code,
        text: rest.join(' '),
        href: link.getAttribute('href'),
      }
    })
  }

  return getList('Directives')
}
