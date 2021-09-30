"use strict"
class Car {
    constructor(model, mileage, year, color, registration, regdate) {
        this.model = model;
        this.mileage = mileage;
        this.year = year;
        this.color = color;
        this.registration = registration;
        this.regdate = regdate;
    }
    getModel() {return this.model;}
    setModel(model) {this.model = model;}

    getMileage() {return this.mileage;}
    setMileage(mileage) {this.mileage = mileage;}

    getYear() {return this.year;}
    setYear(year) {this.year = year;}

    getColor() {return this.color;}
    setColor(color) {this.color = color;}

    isRegistration() {return this.registration;}
    setRegistration(registration) {this.registration = registration;}
    getRegdate() { return this.regdate; }
    setRegdate(regdate) { this.regdate = regdate; }
    
    toString() {return `${this.model} ${this.mileage} ${this.year} ${this.color} ${this.registration} ${this.regdate}`;}
    length() { return `${this.model} ${this.mileage} ${this.year} ${this.color} ${this.registration} ${this.regdate}`;}
}
const storage = [];
function syncStorage() {   
        if(storage.length > 0) {
            let sablon = '';            
            storage.forEach(function(addCar, index) {
                console.log(addCar, 'bravvvo')
                sablon +=   `<tr>
                                <td>${addCar.model}</td>
                                <td>${addCar.mileage} km</td>
                                <td>${addCar.year}</td>
                                <td>${addCar.color}</td>
                                <td>${addCar.registration} ${addCar.regdate}</td>
                                <td>
                                    <section class="form2">
                                        <button data-car-index="${index}" class="btn2 btn-edit">Edit</button>
                                        <button data-car-index="${index}" class="btn2 btn-delete">Delete</button>
                                    </section>                                
                                </td>
                            </tr>`;
            });
            document.querySelector('tbody').innerHTML = sablon;
            document.querySelector('.obavestenje').innerHTML = '';    
            let dels = document.querySelectorAll('.btn-delete');
            dels.forEach(function(del) {
                del.addEventListener('click', obrisiAuto);
            })            
        } else {
            document.querySelector('.obavestenje').innerHTML = 'Trenutno nemamo automobila na placu !';
            document.querySelector('tbody').innerHTML = '';
        }
}
function obrisiAuto(e) {
    console.log('e', e.currentTarget)
    
    let btnDel = e.currentTarget;
    let carIndex = btnDel.getAttribute('data-car-index');
    console.log('carIndex', carIndex)
    // btnDel.closest('tr').remove();
    storage.splice(carIndex, 1);
    console.log(storage)
    syncStorage();
}
function dodajAuto() {
    let model = document.querySelector('#model').value;
    let mileage = document.querySelector('#mileage').value;
    let year = document.querySelector('#year').value;
    let color = document.querySelector('#color').value;
    
    
    let isAllValid = true;
    let msg = '';
    //PROVERAVAMO DA LI JE UNET INPUT MODEL
        // if (!model || model === 'Select') {
        //     isAllValid = false;  
        //     msg += 'Niste uneli model !!!\n';            
        // } 
    //PROVERAVAMO DA LI JE UNET INPUT MILEAGE
        // if (!mileage) {
        //     isAllValid = false;
        //     msg += 'Niste uneli predjenu kilometrazu vozila !!!\n';
        // } else if (mileage < 0) {
        //     isAllValid = false;
        //     msg += 'NISTE UNELI LOGICNU KILOMETRAZU !!!\n';
        // } else if (mileage > 999999) {
        //     isAllValid = false;
        //     msg += 'KILOMETRAZA NE MOZE BITI VECA OD 999.999 km !!!\n';
        // }
    //PROVERAVAMO DA LI JE UNET INPUT YEAR
        // if (!year) {
        //     isAllValid = false;
        //     msg += 'Niste uneli godiste automobila !!!\n';
        // } else if (year < todayY - 100) {
        //     isAllValid = false;
        //     msg += 'AUTO MOZE BITI MAX 100 GODINA STAR !!!\n';
        // } else if (year > todayY) {
        //     isAllValid = false;
        //     msg += 'UNELI STE NE LOGICNU GODINU PROIZVODNJE !!!\n';
        // }
    //PROVERAVAMO DA LI JE UNET INPUT COLOR
        // if (!color) {
        //     isAllValid = false;
        // }
    //PROVERAVAMO DA LI JE UNET INPUT REGISTRATION I REGDATE
    let registration = document.querySelector('#registration').checked;
    let regdateString = document.querySelector('#registration-date').value;
    console.log('regdateString', regdateString)
    let regdate = new Date(document.querySelector('#registration-date').value);
    console.log('regdate', regdate)
    let today = new Date(),
        todayY = today.getFullYear(),
        todayM = today.getMonth(),
        todayD = today.getDate();
    let valY = regdate.getFullYear();
    let valM = regdate.getMonth();
    let valD = regdate.getDate();
    console.log('valY', valY)
    console.log('valM', valM)
    console.log('valD', valD)
    if (registration) {
        if (!regdateString) {
            isAllValid = false;
            msg += 'Nise uneli datum isteka registacije\n ili datum koji ste uneli ne postoji u kalendaru !!!';
        } else if (valY < todayY || valY > todayY + 1) {
            isAllValid = false;
            msg += 'INVALID YEAR !!!';
            // alert("INVALID YEAR !!!")
        } else if (valY === todayY + 1 && valM > todayM) {
            isAllValid = false;
            msg += 'INVALID month !!!';
            // alert("INVALID MONTH !!!")
        } else if (valY === todayY && valM < todayM) {
            isAllValid = false;
            msg += 'month invalid !!!';
            // alert("MONTH INVALID !!!")
        } else if (valY === todayY && valM === todayM && valD < todayD) {
            isAllValid = false;
            msg += 'INVALID DAY !!!';
            // alert("INVALID DAY !!!")
        } else if (valY === todayY + 1 && valM === todayM && valD > todayD) {
            isAllValid = false;
            msg += 'DAY INVALID DAY !!!';
            // alert("INVALID DAY INVALID!!!")
        }
        registration = `Registrovan do :<br>`
        regdate = regdateString
    }
    //AKO SU SVA INPUT POLJA VALIDNA PRAVIMO LET ZA DODAVANJE 
    //NASEG OBJEKTA CAR, ZATIM UPISUJEMO NAS CAR OBJEKAT U NAS
    //CONST STORAGE I NA KRAJU POZIVAMO FUNKCIJU SYNCSTORAGE  
        if (isAllValid) {
            let addCar = new Car(model, mileage, year, color, registration, regdate);
            storage.push(addCar);
            syncStorage();
        } else {
            alert(msg);
        }
    console.log(valY, 'regdate')
    console.log(valM, 'regdate')
    console.log(valD, 'regdate')
}

function editujAuto(e) {
    let btnEdit = e.currentTarget;
    let carIndex = btnEdit.getAttribute('data-car-index');
    storage.splice(carIndex, 1);
    syncStorage();
}
let regdate = document.querySelector('#registration-date');
function regCheckEvent(e) {
    if (e.currentTarget.checked) {
        regdate.classList.add('show');
    } else {
        regdate.classList.remove('show');
    }
}
function formReset() {
    document.querySelector('.forminline').reset();    
    regdate.classList.remove('show');
}
function init() {
    let save = document.querySelector('.btn-save');
    save.addEventListener('click', dodajAuto);
    let regCheck = document.querySelector('#registration');
    regCheck.addEventListener('change', regCheckEvent);
    let reset = document.querySelector('.btn-reset');
    reset.addEventListener('click', formReset);

    syncStorage()
}
document.addEventListener('DOMContentLoaded', init);
//resiti brisanje poslednjeg reda u tabeli
//ograniciti datum registracije da ne moze da bude u proslosti