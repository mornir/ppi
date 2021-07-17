const API = "https://79yex6i5.api.sanity.io/v1/data/query/production"
const query = `?query=*[_type=="prescription"] | order(code asc)`

const prescriptionsRef = document.querySelector("#prescriptions")

fetch(API + query)
  .then((res) => {
    return res.json()
  })
  .then((prescriptions) => {
    const htmlDump = prescriptions.result.map((p) => {
      return `
     <li class="flex flex-col lg:items-center lg:flex-row px-4 lg:px-2 lg:py-4 py-5 tracking-wide border-gray-300 border-b text-black">
      <span class="font-serif text-xl w-24 lg:pl-6 mb-2 lg:mb-0">${p.code}&#8209;15</span>
      <div>
        <a href="${p.de.link}" target="_blank" class="block cursor-pointer title-prescription no-underline mb-1 lg:text-lg ">${p.de.title}</a>
        <a href="${p.fr.link}" target="_blank" class="block cursor-pointer title-prescription no-underline lg:text-lg">${p.fr.title}</a>
      </div>
    </li>
    `
    })

    prescriptionsRef.innerHTML = htmlDump.join("")
  })
  .catch((e) => {
    console.log(e)
  })
