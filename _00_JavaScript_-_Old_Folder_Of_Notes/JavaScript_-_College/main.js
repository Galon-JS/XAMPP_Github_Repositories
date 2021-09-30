"use strict"
class Student {
    constructor(fname, lname) {
        this._fname = fname
        this._lname = lname        
    } 
}
const storage = []
console.log(storage.length, 'ssssssssssssssssss')
function sync() {
    if(storage.lenght > 0) {
        let tmp = ''
        storage.forEach(function(addS, index) {
            tmp += `<div data-index="${index}" class="tmp"><p>${addS._fname}</p>
                    <p>${addS._lname}</p>
                    <button data-index="${index}" class="btn-edit btn-info p-2">Edit</button>
                    <button data-index="${index}" class="btn-delete btn-info p-2">Delete</button></div>`
        })
        let stg = document.querySelector('.stg').innerHTML

        stg = tmp

    } else {
        document.querySelector('.stg').innerHTML = ''
    }
    console.log(storage.length, 'ssssssssssssssssss')

    let info = document.querySelector('.info')
    let stg = document.querySelector('.stg')
    if (storage.length === 0) {
        info.innerHTML = `Nema studenata`
    } else if (storage.length === 1) {
        info.innerHTML = `Ukupno je upisano ${storage.length} student`
    } else if (storage.length > 1 && storage.length < 10) {
        info.innerHTML = `Ukupno je upisano ${storage.length} studenta`
    } else if (storage.length >= 10) {
        info.innerHTML = `Ukupno je upisano ${storage.length} studenata`
    }
}
function pushStudent() {
    let fName = document.querySelector('#fname').value
    let lName = document.querySelector('#lname').value
    let msg = ''
    if(!fName || !lName) {
        msg += 'unsi ime i prezime !!!!!!!!!!!!!!!!!!!'
    } 
    if(!msg) {
        let addS = new Student(fName, lName)
        storage.push(addS)
        console.log(storage.length)
    } else {
        alert(msg)
    }
   
    sync()
}
function init() {
    let save = document.querySelector('.save')
    save.addEventListener('click', pushStudent)
    sync()
}

document.addEventListener('DOMContentLoaded', init);

