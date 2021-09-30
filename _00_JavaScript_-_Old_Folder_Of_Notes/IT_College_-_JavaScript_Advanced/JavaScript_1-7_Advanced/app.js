'use strict'
console.log('HALLO Mr.DRAGAN')
function getUserInput (selector) {
    const el = document.querySelector(selector)
    return el.value 
}
function plus (a, b) {
    const c = a + b
    return c
}
function displayValue (selector, value) {
    const el = document.querySelector(selector)
    el.value = value
}
function clickEvent () {
    // const plusdugme = e.currentTarget

    const prvi = parseFloat(getUserInput('#prvi'))
    console.log('prvi', prvi)
    const drugi = parseFloat(getUserInput('#drugi'))
    console.log('drugi', drugi)
    displayValue('#result', plus(prvi, drugi))
}
const plusdugme = document.querySelector('#plus')
console.log('plusdugme', plusdugme)
plusdugme.addEventListener('click', clickEvent)