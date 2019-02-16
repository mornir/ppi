const API = 'https://79yex6i5.api.sanity.io/v1/data/query/production'
const query = `?query=*[_type=="prescription"] | order(code asc)`

const prescriptionsRef = document.querySelector('#prescriptions')

fetch(API + query)
  .then(res => {
    return res.json()
  })
  .then(prescriptions => {
    const htmlDump = prescriptions.result.map(p => {
      return `
     <article class="flex items-center p-2 tracking-wide border-color-grey border-b text-black">
      <span class="flex-no-shrink font-serif text-xl code">${p.code}-15</span>
      <div>
        <a href="https://services.vkg.ch/rest/public/georg/bs/publikation/documents/${
          p.de.link
        }.pdf/content" target="_blank" class="block mb-1 cursor-pointer title-prescription text-black no-underline">${
        p.de.title
      }</a>
        <a href="https://services.vkg.ch/rest/public/georg/bs/publikation/documents/${
          p.fr.link
        }.pdf/content" target="_blank" class="block cursor-pointer title-prescription text-black text-black no-underline">${
        p.fr.title
      }</a>
      </div>
    </article>
    `
    })

    prescriptionsRef.innerHTML = htmlDump.join('')
  })
  .catch(e => {
    console.log(e)
  })
