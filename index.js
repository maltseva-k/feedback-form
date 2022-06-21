var submitted=false;
function ValidName() {
    var re = /^(\w|[а-яА-ЯёЁ]+|-)+$/;
    var myPhone = document.getElementById('name').value;
    var valid = re.test(myPhone);
    if (!valid) {
        document.getElementById('nameMessage').innerHTML = 'Введите корректные данные в поле Имя';
    } else {
        document.getElementById('nameMessage').innerHTML = '';
    }
    return valid;
}

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (!valid) {
        document.getElementById('emailMessage').innerHTML = 'Введите корректные данные в поле Email';
    } else {
        document.getElementById('emailMessage').innerHTML = '';
    }

    return valid;
}

document.addEventListener('DOMContentLoaded', () => {
    IMask(
        document.getElementById('phone'), {
            mask: '{7} (000) 000 00 00',
            lazy: true
        })
})
function ValidPhone() {
/*    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);*/
    let valid = false
    let phoneLength = document.getElementById('phone').value.length
    if (phoneLength !== 17) {
        valid = false
        document.getElementById('phoneMessage').innerHTML = 'Введите корректные данные в поле Номер телефона';
    } else {
        valid = true
        document.getElementById('phoneMessage').innerHTML = '';
    }
    return valid
}

function ValidBarcode() {
    var re = /(^31|^32|^33|^34)(\d{11}$)/;
    var myBarcode = document.getElementById('barcode').value;
    var valid = re.test(myBarcode);
    if (!valid) {
        document.getElementById('barcodeMessage').innerHTML = 'Введите корректные данные в поле Штрих-код';
    } else {
        document.getElementById('barcodeMessage').innerHTML = '';
    }
    return valid;
}

function checkData() {
    submitted = ValidName()&&ValidMail()&&ValidPhone()&&ValidBarcode()
/*    var myMail = document.getElementById('email').value;
    if (myMail !== '') {

    } else {
        submitted = ValidPhone()
    }*/
    if (submitted === true) {
        document.getElementById('formContent').style.display = 'none';
        document.getElementById('successfulMessage').innerHTML = 'Спасибо, теперь вы участвуете в розыгрыше призов!';
    }

    return submitted
}
