var submitted=false;

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (!valid) {
        document.getElementById('emailMessage').innerHTML = 'Введите корректный адрес эл. почты!';
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
        document.getElementById('phoneMessage').innerHTML = 'Введите корректный номер телефона!';
    } else {
        document.getElementById('phoneMessage').innerHTML = '';
    }
    return valid;
}

function checkData() {
    var myMail = document.getElementById('email').value;
    if (myMail !== '') {
        submitted = ValidMail()&&ValidPhone()
    } else {
        submitted = ValidPhone()
    }
    if (submitted === true) {
        document.getElementById('successfulMessage').innerHTML = 'Данные успешно отправлены!';
    }

    return submitted
}
