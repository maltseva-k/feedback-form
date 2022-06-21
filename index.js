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

function ValidPhone() {
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (!valid) {
        document.getElementById('phoneMessage').innerHTML = 'Введите корректные данные в поле Номер телефона';
    } else {
        document.getElementById('phoneMessage').innerHTML = '';
    }
    return valid;
}

function checkData() {
    submitted = ValidMail()&&ValidPhone()&&ValidName()
/*    var myMail = document.getElementById('email').value;
    if (myMail !== '') {

    } else {
        submitted = ValidPhone()
    }*/
    if (submitted === true) {
        document.getElementById('successfulMessage').innerHTML = 'Данные успешно отправлены!';
    }

    return submitted
}
