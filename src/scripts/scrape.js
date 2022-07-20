import { got } from 'got'
import { parse } from 'node-html-parser'

export async function scrape() {
  const [htmlFR, htmlDE] = await Promise.all([
    got('https://www.bsvonline.ch/fr/prescriptions/').text(),
    got('https://www.bsvonline.ch/de/vorschriften/').text(),
  ])

  const rootFR = parse(htmlFR)
  const rootDE = parse(htmlDE)

  function getList(query, doc) {
    const titlesNodes = Array.from(doc.querySelectorAll('.accordion__btn'))

    const links = titlesNodes
      .find((e) => e.textContent.includes(query))
      ?.nextElementSibling?.querySelectorAll('a')

    return links.map((link) => {
      const [code, ...rest] = link.textContent.trim().split(' ')
      return {
        code,
        title: rest.join(' '),
        link: link.getAttribute('href'),
      }
    })
  }

  function getBilingualList(titleFR, titleDE) {
    const listFR = getList(titleFR, rootFR)
    const listDE = getList(titleDE, rootDE)
    return listFR.map((item, index) => {
      return {
        code: item.code,
        fr: {
          title: item.title,
          link: item.link,
        },
        de: {
          title: listDE[index].title,
          link: listDE[index].link,
        },
      }
    })
  }

  const norme = getBilingualList('Norme', 'Norm')
  const directives = getBilingualList('Directives', 'Richtlinien')

  return {
    directives: [...norme, ...directives],
  }
}
