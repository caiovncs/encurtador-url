const btnShort = document.querySelector('.short')
const inputLink = document.querySelector('.link-input')
const statistics = document.querySelector('.statistic')
const copyBtn = document.querySelector('.copybtn')
const links = document.querySelectorAll('.link')

btnShort.addEventListener('click', clickShort);

function clickShort() {
  const fetchUrl = inputLink.value
  if(fetchUrl !== '') {
    fetch(`https://api.shrtco.de/v2/shorten?url=${fetchUrl}`)
    .then(response => response.json())
    .then(r => {if(r.ok == true) { 
      const divLink = document.createElement('div')
      divLink.classList.add('link')

      const inputLinkResult = document.createElement('p')
      inputLinkResult.classList.add('link-input-result')

      const divOutput = document.createElement('div')
      divOutput.classList.add('link-output')

      const resultShort = document.createElement('span')
      resultShort.classList.add('result')

      const btnCopyCreate = document.createElement('button')
      btnCopyCreate.appendChild(document.createTextNode('Copy'))
      btnCopyCreate.classList.add('copybtn')

      divLink.appendChild(inputLinkResult)
      divLink.appendChild(divOutput)
      divOutput.appendChild(resultShort)
      divOutput.appendChild(btnCopyCreate)
      statistics.appendChild(divLink)

      resultShort.innerText = r.result.short_link;
      inputLinkResult.innerHTML = fetchUrl;
      inputLink.classList.remove('error')
    } else {
      inputLink.classList.add('error')
    }})
    inputLink.value = ''
  } else {
    inputLink.classList.add('error')
  }
}

