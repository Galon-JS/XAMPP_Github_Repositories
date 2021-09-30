'use strict'
// const x = document.querySelector('#x')
// const y = document.querySelector('#y')
const screen = document.querySelector('.screen')

function add (x, y) {
    x = parseFloat(document.querySelector('#x').value)
    y = parseFloat(document.querySelector('#y').value)
    screen.innerHTML = x + y
}
function subtract (x, y) {
    x = parseFloat(document.querySelector('#x').value)
    y = parseFloat(document.querySelector('#y').value)
    screen.innerHTML = x - y
}
function callAnother (fun, x, y) {
    console.log(fun(x, y))
}
const operation = {
    add: add,
    subtract: subtract,
    multiple: (x, y) => {return x * y}
}
document.querySelector('#btnadd').addEventListener('click', add)
document.querySelector('#btnsubtract').addEventListener('click', subtract)