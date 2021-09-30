function saberi (a: number, b:number): number {
    return a + b
}
function saberi2 (a: number, b: number): void {
  console.log(`Zbir broja ${a} i ${b} je ${a+b}`)
}
function average (a: number, b: number, c?: number): string {
    let count = 1
    let suma = a
    count++
    suma += b
    if (typeof c !== 'undefined') {
        count++
        suma += c
    }
    return 'Average is ' + suma / count
}
console.log(average(4, 6))
let brojA: number = 4
let brojB: number = 5

let rezultat = saberi (brojA, brojB)
console.log('rezultat', rezultat)

let promenljiva: string = 'niska'
console.log('promenljiva', promenljiva)
// string, number, boolean, symbol
let broj: number = 0xf00d

enum TipPrevoza {
    Automobil,
    Autobus,
    Tramvaj,
    Voz
}
let mojTip = TipPrevoza.Automobil
let imeMogTipa = TipPrevoza[mojTip]
console.log('imeMogTipa', imeMogTipa)
//undefined
//null
//void
//never
let union: string | number
union = 12
union = 'niska union'
// union = true

// PRESEK TIPOVA
interface Runner{
    run(): string
}
interface Swimmer{
    swim(): string
}
type Triaton = Runner & Swimmer
type StringOrError = string | Error
const prom: StringOrError = 'stringic'
console.log('prom', prom)

let niz: string[]
let niz2: Array<string>
// console.log('niz', niz)
// console.log('niz2', niz2)
