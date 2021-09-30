"use strict"

let previewScreen = document.querySelector('.preview-screen')
let operationScreen = document.querySelector('.operation-screen')
let currentScreen = document.querySelector('.current-screen')

let number_1 = null
let number_2 = null
let numberLength = null

let equals = null
let operations = null

let btns = document.querySelectorAll('.btn')
btns.forEach(function (btn) {
    btn.addEventListener('click', btnsEventsTargets)
})
function btnsEventsTargets (e) {
    let btnEventCurrentTarget = e.currentTarget.value
    if (btnEventCurrentTarget === '+' ||
        btnEventCurrentTarget === '-' ||
        btnEventCurrentTarget === '*' ||
        btnEventCurrentTarget === '/' ||
        btnEventCurrentTarget === '%') {
        operations = btnEventCurrentTarget
        console.log('operations', operations)
        number_1 = parseFloat(currentScreen.innerHTML)
        console.log('number_1', number_1) 
        console.log('numberLength', numberLength)
        previewScreen.innerHTML = currentScreen.innerHTML
        operationScreen.innerHTML = btnEventCurrentTarget
        currentScreen.innerHTML = ''
    } else if (btnEventCurrentTarget === 'C') {
        currentScreen.innerHTML = ''
        operationScreen.innerHTML = ''
        previewScreen.innerHTML = ''
        number_1 = null
        number_2 = null
        equals = null
    } else if (btnEventCurrentTarget === '=') {
        number_2 = parseFloat(currentScreen.innerHTML)
        console.log('number_2', number_2)
        previewScreen.innerHTML = previewScreen.innerHTML + operationScreen.innerHTML + currentScreen.innerHTML
        operationScreen.innerHTML = '='
        if (operations === '+') {
            equals = number_1 + number_2
        } else if (operations === '-') {
            equals = number_1 - number_2
        } else if (operations === '*') {
            equals = number_1 * number_2
        } else if (operations === '/') {
            equals = number_1 / number_2
        } else if (operations === '%') {
            equals = number_2  * (number_1 / 100) //number_1 % number_2
        }
        currentScreen.innerHTML = equals
        console.log('equals', equals)
    } else {
        numberLength = currentScreen.innerHTML
        console.log('numberLength', numberLength.length)
        if (numberLength.length < 8) {
            currentScreen.innerHTML += btnEventCurrentTarget

        }
    }
}