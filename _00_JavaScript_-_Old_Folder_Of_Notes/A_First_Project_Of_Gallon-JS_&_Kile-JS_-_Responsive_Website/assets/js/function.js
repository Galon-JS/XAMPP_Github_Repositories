'use strict'
console.log('Hallo world !!!')
const btn_Sub_Button = document.querySelector('.btn-sub')
btn_Sub_Button.addEventListener('click', function () {
    let email_Sub_Input = document.querySelector('.subscribe__input').value
    if (!email_Sub_Input) {
        alert('Ti si majmun !!!')
    }
})


