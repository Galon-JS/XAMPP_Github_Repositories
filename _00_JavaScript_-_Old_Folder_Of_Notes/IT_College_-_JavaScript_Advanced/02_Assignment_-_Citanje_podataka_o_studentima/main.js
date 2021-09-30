"use strict"
console.log('Heloo !!!');
class Student {
    constructor(name, adress, phone, course) {
        this._name = name
        this._adress = adress
        this._phone = phone
        this._course = course
    }
    
    getInfo() {
        return `
                <div class='d-inline-flex flex-column border border-primary p-1'>
                    <label>Name: <b>${this._name}</b></label>
                    <label>Adress: <b>${this._adress}</b></label>
                    <label>Phone: <b>${this._phone}</b></label>
                    <label>Course: <b>${this._course}</b></label>
                </div>
                `
    }

}
const storage = []
async function addFetchFile(screen, template) {
    screen = document.querySelector('.screen')
    try {
        let responseFromTextFile = await fetch('https:///v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt')
        .then((responseFromTextFile) => responseFromTextFile.text())
        .then((responseFromTextFile) => responseFromTextFile.split('\r\n'))
        console.log('responseFromTextFile: ', responseFromTextFile);
        for (let index = 0; index <= responseFromTextFile.length; index++) {
            let addStudent = new Student(responseFromTextFile[0], responseFromTextFile[1], responseFromTextFile[2], responseFromTextFile[3])
            storage.push(addStudent)
            responseFromTextFile.splice(0, 4)
            addStudent.getInfo()    
            template = addStudent.getInfo()
            console.log('template: ', template);
            screen.innerHTML += template
            console.log('template: ', template);

            console.log('addStudent.getInfo(): ', addStudent.getInfo());
        }
        // responseFromTextFile.forEach(function () {
        //     let addStudent = new Student()

        //     addStudent._name = responseFromTextFile[0]
        //     addStudent._adress = responseFromTextFile[1]
        //     addStudent._phone = responseFromTextFile[2]
        //     addStudent._course = responseFromTextFile[3]
           
        //     console.log('responseFromTextFile: ', responseFromTextFile);
        //     storage.push(addStudent)
        //     responseFromTextFile.splice(0, 4)
        //     console.log('addStudent: ', addStudent);
        // })
        console.log('responseFromTextFile: ', responseFromTextFile);
        console.log('storage: ', storage);

        // let index = 0

        // let item = ''
        // responseFromTextFile.forEach( () => {
        //     switch (index) {
        //         case 0:
        //             item = responseFromTextFile[index]
        //             addStudent._name = item
        //             index++
        //             break;
        //         case 1:
        //             item = responseFromTextFile[index]
        //             addStudent._adress = item
        //             index++
        //             break;
        //         case 2:
        //             item = responseFromTextFile[index]
        //             addStudent._phone = item
        //             index++
        //             break;
        //         case 3:
        //             item = responseFromTextFile[index]
        //             addStudent._course = item
        //             storage.push(addStudent)
        //             console.log('storage: ', storage);
        //             index = 0
        //             break;
        //     }
        // })
    } catch (error) {
        screen.innerHTML = error.message
    }
}
document.querySelector('.btn-primary').addEventListener('click', addFetchFile)