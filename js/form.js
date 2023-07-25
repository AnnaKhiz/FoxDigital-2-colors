let formFirst = document.getElementById('form-1');
let formInputNameFirst = document.getElementById('name-1');
let formInputTelFirst = document.getElementById('tel-1');


formInputNameFirst.addEventListener('keyup', function () {
    console.log(document.getElementById('name-1').value);
    const regexName = new RegExp('^[A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\\s]{2,10}$');
    const regexTwo = new RegExp('^([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{1,10})+\\s+([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{1,10})$');
    if ((document.getElementById('name-1').value.length) > 1) {
        if ((regexName.test(document.getElementById('name-1').value)) || (regexTwo.test(document.getElementById('name-1').value))) {
            console.log('введено имя');
        } else {
            console.log('введены запрещенные символы');
            alert('Имя должно содержить только буквы!');
            document.getElementById('name-1').value = document.getElementById('name-1').value.replace(/[^A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\s]/gm, '');
        }
    }
});


formInputTelFirst.addEventListener('keyup', function () {
    console.log(document.getElementById('tel-1').value);
    const regexTel = new RegExp('^[0-9]{0,12}$');
    if ((document.getElementById('tel-1').value.length) > 1) {
        if (regexTel.test(document.getElementById('tel-1').value)) {
            console.log('введен номер телефона');
        } else {
            console.log('введены запрещенные символы - тел');
            alert('Номер телефона должен содержить только цифры!');
            document.getElementById('tel-1').value = document.getElementById('tel-1').value.replace(/[^\d]/gm, '');
        }
    }
});


let formSecond = document.getElementById('form-2');
let formInputNameSecond = document.getElementById('name-2');
let formInputTelSecond = document.getElementById('tel-2');


formInputNameSecond.addEventListener('keyup', function () {
    console.log(document.getElementById('name-2').value);
    const regexName = new RegExp('^[A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\\s]{2,10}$');
    const regexTwo = new RegExp('^([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{1,10})+\\s+([A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ]{1,10})$');
    if ((document.getElementById('name-2').value.length) > 1) {
        if ((regexName.test(document.getElementById('name-2').value)) || (regexTwo.test(document.getElementById('name-2').value))) {
            console.log('введено имя');
        } else {
            console.log('введены запрещенные символы');
            alert('Имя должно содержить только буквы!');
            document.getElementById('name-2').value = document.getElementById('name-2').value.replace(/[^A-Za-zА-Яа-яЁёЁЇїІіЄєҐґ_\-\s]/gm, '');
        }
    }
});


formInputTelSecond.addEventListener('keyup', function () {
    console.log(document.getElementById('tel-2').value);
    const regexTel = new RegExp('^[0-9]{0,12}$');
    if ((document.getElementById('tel-2').value.length) > 1) {
        if (regexTel.test(document.getElementById('tel-2').value)) {
            console.log('введен номер телефона');
        } else {
            console.log('введены запрещенные символы - тел');
            alert('Номер телефона должен содержить только цифры!');
            document.getElementById('tel-2').value = document.getElementById('tel-2').value.replace(/[^\d]/gm, '');
        }
    }
});