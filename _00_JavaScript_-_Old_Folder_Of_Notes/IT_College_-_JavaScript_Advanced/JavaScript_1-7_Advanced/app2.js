'use strict'
const sadrzaj = `<h2>Neki Naslov</h2>
<p>Ovo je neki paragraf u Template literal-u.</p>
<p>${3 < 5 ? '3 je manje od 5' : '5 je vece od 3'}</p>`
document.body.innerHTML += sadrzaj 

let q = 5
let w = 10
console.log(`Fifteen is ${q + w} and ${2 * (q + w) / 2}`)