"use strict"
class Student {
    constructor(name, adress, phone, course) {
        this._name = name
        this._adress = adress
        this._phone = phone
        this._course = course
    }
    getInfo() {
        return 'Name: ' + this._name + ', Adress: ' + this._adress + ', Phone: ' + this._phone + ', Course: ' + this._course
    }
}
let addStudent_1 = new Student('Milos Djordjijevski', 'Ive Lole Ribara 33','(089) 433-1265', 'Poker Dealer')
let addStudent_2 = new Student('Aleksandar Lazin', 'Brace Jovanovica 15', '(029) 673-1025', 'Barmen')
let addStudent_3 = new Student('Ivan Jovicic', 'Milesevska 1', '(159) 166-8699', 'Front-End Developer [Kile-JS]')
console.log('addStudent_1: ', addStudent_1.getInfo());
console.log('addStudent_2: ', addStudent_2.getInfo());
console.log('addStudent_3: ', addStudent_3.getInfo());

// const storage = []
// function add(inpName, inpAdress, inpPhone, inpCourse) {
//     inpName = document.querySelector('#name').value
//     inpAdress = document.querySelector('#adress').value
//     inpPhone = document.querySelector('#phone').value
//     inpCourse = document.querySelector('#course').value

//     let addStudent = new Student(inpName, inpAdress, inpPhone, inpCourse)
//     storage.push(addStudent)
// }
// document.querySelector('.btn-primary').addEventListener('click', add)