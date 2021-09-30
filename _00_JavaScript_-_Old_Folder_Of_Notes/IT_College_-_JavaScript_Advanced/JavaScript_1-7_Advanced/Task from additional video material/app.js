'use strict'
class Proizvod_CLASS {
    constructor(barkod, naziv, cena, slika, opis) {
        this._barkod = barkod
        this._naziv = naziv
        this._cena = cena
        this._slika = slika
        this._opis = opis
    }
    getBarkod () {return this._barkod}
    setBarkod () {this._barkod = barkod}
}
// let bARKOD = document.querySelector('#barkod').value
// let addProizvod = new proizvod(bARKOD)
const storageInventar = {
    speakers : {},
    headphones : {},
    proaudio : {}
}
const screenHTML = document.querySelector('.screen')
function dodajProizvodFunc () {
    let bARKOD = document.querySelector('#barkod').value    
    let nAZIV = document.querySelector('#naziv').value
    let cENA = document.querySelector('#cena').value
    let sLIKA = document.querySelector('#slika').value
    let oPIS = document.querySelector('#opis').value

    let spkSELECTED = document.querySelector('#spk')
    let hdpSELECTED = document.querySelector('#hdp')
    let proSELECTED = document.querySelector('#pro')
    
    let add_Proizvod_CLASS = new Proizvod_CLASS (bARKOD, nAZIV, cENA, sLIKA, oPIS)
    let tEMPLATE = ''

    // let addProizvod = new Object(bARKOD, nAZIV, cENA, sLIKA, oPIS)
    // {
    //     Barkod : bARKOD,
    //     Naziv : nAZIV,
    //     Cena : cENA,
    //     Slika : sLIKA,
    //     Opis : oPIS,
    // }
    console.log('add_Proizvod_CLASS', add_Proizvod_CLASS)
    if (!bARKOD) {alert('BARKOD ERROR [input is empty]' )}
     else {
         if (spkSELECTED.selected) {
            
         } else if (hdpSELECTED.selected) {
         } else if (proSELECTED.selected) {
         }
        console.log('storageInventar', storageInventar)
            tEMPLATE = `
                <div class="tmp m-1">
                    <div class="naziv+barkod d-flex justify-content-center p-1">
                        <div class="n1 text-center"><b>${nAZIV}</b></div>
                        <div class="b2 text-center">${bARKOD}</div>
                    </div>
                    <div class="cena+slika">
                        <div>
                            ${cENA}
                        </div>
                        <div>
                            <img class="img" src="${sLIKA}">
                        </div>
                    </div>
                    <div class="opis">${oPIS}</div>
                </div>
                `
        screenHTML.innerHTML += tEMPLATE
    }
}
let btnDodaj = document.querySelector('.btn-primary')
btnDodaj.addEventListener('click', dodajProizvodFunc)
let jsAroow = document.querySelector('.js')
let outputArrow = document.querySelector('.arrow')
jsAroow.addEventListener('click', () => {
    outputArrow.innerHTML += 'arrow'
})
// MENCMELOU
    // } 
    // else if (!nAZIV) {
    //     console.log('nAZIV.value', nAZIV.value)
    //     isAllValidation = false
    //     alert('NAZIV ERROR [input is empty]')
    // } else if (!cENA) {
    //     console.log('cENA.value', cENA.value)
    //     isAllValidation = false
    //     alert('CENA ERROR [input is empty]')
    // } else if (!sLIKA) {
    //     console.log('sLIKA.value', sLIKA.value)
    //     isAllValidation = false
    //     alert('SLIKA ERROR [input is empty]')
    // } else if (!oPIS) {
    //     console.log('oPIS.value', oPIS.value)
    //     isAllValidation = false
    //     alert('OPIS ERROR [input is empty]')