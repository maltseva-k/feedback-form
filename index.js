var submitted=false;

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (!valid) {
        document.getElementById('emailMessage').innerHTML = 'Введите корректный адрес эл. почты!';
    }
    return valid;
}

function ValidPhone() {
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (!valid) {
        document.getElementById('phoneMessage').innerHTML = 'Введите корректный номер телефона!';
    }

    return valid;
}

function checkData() {
    return ValidMail()&&ValidPhone()
}
