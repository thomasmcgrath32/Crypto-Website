const apiPrice = {
  url: 'https://api.coingecko.com/api/v3/simple/price?',
  ids: "ids=bitcoin%2Clitecoin%2Cethereum%2C%2Cuniswap%2Cchainlink%2Cdogecoin%2Czcash%2Ccardano%2Ctezos%2Cpolkadot%2Cbat%2c0x%2Cbinancecoin",
  vs_currencies: "&vs_currencies=USD",

}

const apiUrl = `${apiPrice.url}${apiPrice.ids}${apiPrice.vs_currencies}`
console.log(apiUrl)
fetch(apiUrl)
    .then( (price) => price.json())
    .then( (btc) => createHTML(btc))




const createHTML = (price) => {
  console.log(price.bitcoin.usd)
  const htmlb = `<div class = "name"><span>Bitcoin: $${price.bitcoin.usd}</span></div>`
  const htmle = `<div class = "name"><span>Ethereum: $${price.ethereum.usd}</span></div>`
  const htmll = `<div class = "name"><span>Litecoin: $${price.litecoin.usd}</span></div>`
  const htmlu = `<div class = "name"><span>Uniswap: $${price.uniswap.usd}</span></div>`
  const htmlc = `<div class = "name"><span>Chainlink: $${price.chainlink.usd}</span></div>`
  const htmld = `<div class = "name"><span>Dogecoin: $${price.dogecoin.usd}</span></div>`
  const htmlz = `<div class = "name"><span>Zcash: $${price.zcash.usd}</span></div>`
  const htmlcc = `<div class = "name"><span>Cardano: $${price.cardano.usd}</span></div>`
  const htmlt = `<div class = "name"><span>Tezos: $${price.tezos.usd}</span></div>`
  const htmlp = `<div class = "name"><span>Polkadot: $${price.polkadot.usd}</span></div>`
  const htmlbn = `<div class = "name"><span>BinanceCoin: $${price.binancecoin.usd}</span></div>`

      const priceDivb = document.querySelector('.btc')
      const priceDive = document.querySelector('.eth')
      const priceDivl = document.querySelector('.ltc')
      const priceDivu = document.querySelector('.uni')
      const priceDivc = document.querySelector('.link')
      const priceDivd = document.querySelector('.doge')
      const priceDivz = document.querySelector('.zec')
      const priceDivcc = document.querySelector('.ada')
      const priceDivt = document.querySelector('.tezos')
      const priceDivp = document.querySelector('.dot')
      const priceDivbn = document.querySelector('.bnb')

      priceDivb.innerHTML = htmlb
      priceDive.innerHTML = htmle
      priceDivl.innerHTML = htmll
      priceDivu.innerHTML = htmlu
      priceDivc.innerHTML = htmlc
      priceDivd.innerHTML = htmld
      priceDivz.innerHTML = htmlz
      priceDivcc.innerHTML = htmlcc
      priceDivt.innerHTML = htmlt
      priceDivp.innerHTML = htmlp
      priceDivbn.innerHTML = htmlbn
}
