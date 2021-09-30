function saberi(a, b) {
    return a + b;
}
function saberi2(a, b) {
    console.log("Zbir broja " + a + " i " + b + " je " + (a + b));
}
function average(a, b, c) {
    var count = 1;
    var suma = a;
    count++;
    suma += b;
    if (typeof c !== 'undefined') {
        count++;
        suma += c;
    }
    return 'Average is ' + suma / count;
}
console.log(average(4, 6));
var brojA = 4;
var brojB = 5;
var rezultat = saberi(brojA, brojB);
console.log('rezultat', rezultat);
var promenljiva = 'niska';
console.log('promenljiva', promenljiva);
// string, number, boolean, symbol
var broj = 0xf00d;
var TipPrevoza;
(function (TipPrevoza) {
    TipPrevoza[TipPrevoza["Automobil"] = 0] = "Automobil";
    TipPrevoza[TipPrevoza["Autobus"] = 1] = "Autobus";
    TipPrevoza[TipPrevoza["Tramvaj"] = 2] = "Tramvaj";
    TipPrevoza[TipPrevoza["Voz"] = 3] = "Voz";
})(TipPrevoza || (TipPrevoza = {}));
var mojTip = TipPrevoza.Automobil;
var imeMogTipa = TipPrevoza[mojTip];
console.log('imeMogTipa', imeMogTipa);
//undefined
//null
//void
//never
var union;
union = 12;
union = 'niska union';
var prom = 'stringic';
console.log('prom', prom);
var niz;
var niz2;
// console.log('niz', niz)
// console.log('niz2', niz2)
