"use strict"
function validateInput(id)
{
    var element = document.getElementById('id');

    if (element.value === '')
    {
        element.classList.add('error');
        alert('d');
    }
    else
    {
        element.classList.remove('error');
    }
}

// const fullname = document.getElementById('inputFullName').value;
// var fname = document.getElementById('inputFullName');
// const username = document.getElementById('inputUsername').value;
// var user = document.getElementById('inputUsername');
// const emailvalue = document.getElementById('inputEmail').value;
// var email = document.getElementById('inputEmail');
// const password = document.getElementById('inputPassword').value;
// var pass = document.getElementById('inputPassword');
// const confirmpassword = document.getElementById('inputConfirmPassword').value;
// var confirmpass = document.getElementById('inputConfirmPassword');
// const mobile = document.getElementById('inputMobileNumber').value;
// var mob = document.getElementById('inputMobileNumber');
// const education = document.getElementById('lvl').value;
// var edu = document.getElementById('lvl');
// var radios = document.querySelector('.radios');
// var checkbox = document.querySelector('.checkbox');
// const msg = document.querySelector('.msg');
// const btn = document.getElementById('btnid');

// btn.addEventListener('click', checkValue)

// function checkValue(){
//     if (username === '' || password === ''){
//         msg.innerHTML = 'Enter Username and Password!';
//         msg.style.border = '2px solid red';
//         msg.style.borderRadius = '4px';
//         msg.style.fontSize = '25px';
//         msg.style.color = 'red';
//         fname.style.border = '2px solid red';
//         user.style.border = '2px solid red';
//         email.style.border = '2px solid red';
//         pass.style.border = '2px solid red';
//         confirmpass.style.border = '2px solid red';
//         mob.style.border = '2px solid red';
//         edu.style.border = '2px solid red';
//         radios.style.border = '2px solid red';
//         radios.style.borderRadius = '4px';
//         checkbox.style.border = '2px solid red';
//         checkbox.style.borderRadius = '4px';

//         return false;
//     } else if(username !== '' || password === '') {
//         msg.innerHTML = 'Enter Password!';
//         return false;
//     }
// }