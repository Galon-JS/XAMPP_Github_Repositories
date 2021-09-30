// 'use strict'
function calculateArea (a, b) {
    return a * b
}
let rezultat = calculateArea (5, 40)
console.log('rezultat', rezultat)
function sayHello (name) {
    console.log('Hello' + name )
}
sayHello('bla')
function sayHelloWorld () {
    console.log('Hello WORLD')
}
sayHelloWorld()

const calculateAreaConst = new Function ('a', 'b', 'return a * b')
let result = calculateAreaConst (5, 50)
console.log('result', result)

function sum () {
    let returnValue = 0
    for (let index = 0; index < arguments.length; index++) {
        returnValue += arguments[index];
    }
    return returnValue
}
console.log('sum', sum(4,44,44,44))

function newYearTimer (start) {
    start = document.querySelector('#startParametar').value
    for (let index = start; index >= 0; index--) {
        let timerScreen = document.querySelector('.timerScreen')
        timerScreen.innerHTML +=  index 
    }
}
// window.setTimeout(newYearTimer, 1000)
document.querySelector('.button').addEventListener('click', newYearTimer)

            //  FUNKCIJE SAMOPOZIVAJUCE

function sort (array) {
    let sorted = true
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array[index + 1]) {
            temp = array[index]
            array[index] = array[index + 1]
            array[index + 1] = temp
            sorted = false
        }        
    }
    if (!sorted) {
        sort(array)
    }
    return array
}
let numArray = [8, 10, 13, 3, 5, 7, 45, 6, 33, 9, 4, 1, 21, 77, 2, 11]
numArray = sort(numArray)
console.log(numArray)

            // ANONIMNE FUNKCIJE

let a = function (x) {
    return x * x
}
console.log(a(5))

let names = ['Ana', 'Johan', 'Notes', 'Arena']
// for (const name of names) {
    // function sayHallo(name) {
    //     console.log('Hello ' + name)
    // }
//     sayHallo(name)
// }
function sayHallo(name) {
    console.log('Hello ' + name)
}
function sayHelloToMany(names, sayHello) {
    for (let index = 0; index < names.length; index++) {
        sayHello(names[index])        
    }
}
sayHelloToMany(names, sayHallo)

            // ARROW FUNKCIJE

let arrow = (x) => { return x * x }
console.log('arrow', arrow(5))

let arrow2 = x => { return x * x }
console.log('arrow2', arrow2(5))

let arrow3 = x => x * x
console.log('arrow3', arrow3(5))

let arrow4 = () => 'Hello World !!!!!!!'
console.log('arrow4', arrow4())

let arrow5 = () => {console.log('halooooooo')}
arrow5()
// console.log('arrow5', arrow5())
let arrow6 = name => {console.log('heloo ' + name)}
arrow6('Ana')

let arrow7 = (x, y) => x * y
console.log('arrow7', arrow7(4, 5))

let arrow8 = (x, y) => { x++; return x * y }
console.log('arrow8', arrow8(3, 5))

function sayHelloToMany2(names, sayHello) {
    for (let index = 0; index < names.length; index++) {
        sayHello(names[index])
    }
}
sayHelloToMany2 (names, name => {console.log('halo ' + name)})

            //KONSTRUKTORSKA FUNKCIJA

function Student () {
    this.courses = []
    this.addCourses = function (courses) {
        courses.forEach(function (value) {
            this.courses[index]
        })
    }
}