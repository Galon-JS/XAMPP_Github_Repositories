"use strict"

const pScreen = document.querySelector('.preview-Screeen');
const oScreen = document.querySelector('.operation-Screeen');
const cScreen = document.querySelector('.current-Screeen');

function clickedButton(numbers, operations) {
    let number1 = null;
    let number2 = null;
    let operation = null;
    let result = null;
    // POMOCNE VARIJABLE
    let dot = false;
    let equal = false;

    if(operations === '+' || operations === '-' || operations === '*' || operations === '/') {
        if(cScreen.innerHTML !== '') {
            number1 = regulateDot(cScreen.innerHTML);
            oScreen.innerHTML = operations;
            pScreen.innerHTML = number1;
            cScreen.innerHTML = '';
            operation = operations;
            dot = false;
        }
    } else {
        cScreen.innerHTML = numbers.innerHTML;
        // if(equal === false) {
        //     if(numbers === '.') {
        //         if(dot === false) {
        //             cScreen.innerHTML = cScreen.innerHTML + numbers;
        //         }
        //     }
        // }
    }  
}

function regulateDot(x) {
    if(x.endsWith('.')) {
        x = x.slice(0, -1)
    }
    return x;
}
