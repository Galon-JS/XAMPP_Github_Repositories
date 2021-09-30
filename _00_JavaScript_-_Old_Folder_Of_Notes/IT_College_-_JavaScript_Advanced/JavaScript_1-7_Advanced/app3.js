'use strict'
console.log(`HALLO Mr.DRAGAN`)
// const ispis = document.querySelector('.ispis')
// const tmp = document.querySelector('.tmp')
class Osoba {
    constructor(fullname, telephone, email, image) {
        this._fullname = fullname
        this._telephone = telephone
        this._email = email
        this._image = image
    }
}
const fullName = document.querySelector('#fullname')
const telePhone = document.querySelector('#tel')
const eMail = document.querySelector('#email')
const imaGe = document.querySelector('#url')
const template = document.querySelector('.tmp')
const btnAdd = document.querySelector('#btn')
const storage = []
console.log('storage', storage.length)
console.log('1', fullName.value, telePhone.value, eMail.value, imaGe.value)
const screen = document.querySelector('.screen')
screen.innerHTML = 'IMENIK JE PRAZAN'
btnAdd.addEventListener('click', () => {
    if (storage.length === 0) {
        if (!fullName.value) {
            alert('UNESITE IME I PREZIME MAJMUNE')
        } else if (!telePhone.value) {
            alert('UNESITE telefon MAJMUNE')
        } else {
            storage.push(template)
            console.log('storage', storage.length)
            screen.innerHTML = ''
            screen.innerHTML += template.innerHTML.replace('{{fullName}}', fullName.value === '' ? alert('Unesite Name') : fullName.value)
                .replace('{{telePhone}}', telePhone.value === '' ? alert('Unesite Telephone Number') : telePhone.value)
                .replace('{{eMail}}', eMail.value === '' ? '' : `<p><b>E-mail : </b>${eMail.value}</p>`)
                .replace('{{imaGe}}', imaGe.value === '' ? 'nophoto.jpeg' : imaGe.value)
        }
    }
})
// let addOsoba = new Osoba(fullName, telephone, email, image)
// let osobe = [
//     {'fullName':'Ana Bogic', 'telephone':'jagoda', 'email':'banana djus'},
//     {'fullName':'Marina Katic', 'telephone':'jagoda', 'email':'banana djus'}
// ]
// for (let osoba of osobe) {
//     ispis.innerHTML += tmp.innerHTML.replace('{{fullName}}', osoba.fullName)
//         .replace('{{telephone}}', osoba.telephone)
//         .replace('{{email}}', osoba.email)
// }
// ispis.innerHTML = tmp.innerHTML.replace('{{ime}}', 'ANA')
//                                 .replace('{{prezime}}', 'Bogic')
//                                 .replace('{{voce}}', 'jagoda')
//                                 .replace('{{pice}}', 'banana djus')