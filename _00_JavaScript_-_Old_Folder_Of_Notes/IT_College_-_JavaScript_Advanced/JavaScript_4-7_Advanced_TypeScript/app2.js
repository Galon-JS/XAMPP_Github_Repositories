// "use strict"
class StudentClass {
    constructor(constructor_ime, constructor_prezime, constructor_prosek, constructor_godine) {
        this.ime = constructor_ime
        this.prezime = constructor_prezime
        this.prosek = constructor_prosek
        this.godine = constructor_godine
    }
}
const osobE = [ 
    osobE1 = new StudentClass('Ana', 'Stanic', 9.3, 2004), 
    osobE2 = new StudentClass('Vanja', 'Jovanovic', 7.3, 1984),
    osobE3 = new StudentClass('Mila', 'Aleckovic', 8.3, 1955),
    osobE4 = new StudentClass('Zoja', 'Minic', 9.7, 1986)
]
for (let osobA of osobE) {
    console.log('osobA.prosek', osobA.prosek)
    if (osobA.prosek > 9.0) {
        console.log('Stipendisti : ', osobA)
    }
    let godina = new Date().getFullYear()
    if (godina - osobA.godine > 18) {
        console.log('Punoletni studenti : ', osobA)
    }
}
console.log('OsobE: ', osobE1.prosek)
