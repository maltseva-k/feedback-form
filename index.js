// Запрещаем отправку до окончания проверки формы
let submitted = false;

/*
// Получаем данные
function getData() {
    return fetch('https://script.google.com/macros/s/AKfycbzGvKKUIaqsMuCj7-A2YRhR-f7GZjl4kSxSN1YyLkS01_CfiyE/exec?id=1EuEvFH4mM_GiE0CVpt3wJvk1lUhazj24D26kq5tFjss&sheet=Ответы на форму (2)')
        .then((response) => response.json())
}

// Забираем в Local Storage только массив штрихкодов
getData()
    .then(data => data.records)
    .then(data => {
        let items = data.map(function(item) {
            return item.Barcode
        });
        return items
    })
    .then(data=> localStorage.setItem('searchResult', JSON.stringify(data)))
*/

// Проверяем валидность поля Имя
function ValidName() {
    let re = /^(\w|[а-яА-ЯёЁ ]+|-)+$/;
    let myPhone = document.getElementById('name').value;
    let valid = re.test(myPhone);
    if (!valid) {
        document.getElementById('nameMessage').innerHTML = 'Введите корректные данные в поле Имя';
    } else {
        document.getElementById('nameMessage').innerHTML = '';
    }
    return valid;
}

// Проверяем валидность поля Email
function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    let valid = re.test(myMail);
    if (!valid) {
        document.getElementById('emailMessage').innerHTML = 'Введите корректные данные в поле Email';
    } else {
        document.getElementById('emailMessage').innerHTML = '';
    }
    return valid;
}

// Маска для ввода номера телфона только в заданном формате
document.addEventListener('DOMContentLoaded', () => {
    IMask(
        document.getElementById('phone'), {
            mask: '{7} (000) 000 00 00',
            lazy: true
        })
})

// Проверяем валидность поля Номер телефона
function ValidPhone() {
/*  let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    let myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone); */
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

// Маска для ввода штрих-кода только в заданном формате
document.addEventListener('DOMContentLoaded', () => {
    IMask(
        document.getElementById('barcode'), {
            mask: '0000000000000',
            lazy: true
        })
})

// Проверяем валидность поля Штрих-код
function ValidBarcode() {
    let re = /(^31|^32|^33|^34)(\d{11}$)/;
    let myBarcode = document.getElementById('barcode').value;
    let valid = re.test(myBarcode);
    if (!valid) {
        document.getElementById('barcodeMessage').innerHTML = 'Введите корректные данные в поле Штрих-код';
    } else {
        document.getElementById('barcodeMessage').innerHTML = '';
    }
    return valid;
}

/*
// Проверяем уникальность поля Штрих-код (т.е. исключаем повторную регистрацию штрих-кода)
function CheckUnicBarcode() {
    let barcodeUnic = true
    let barcodeValue = document.getElementById('barcode').value;
    const infoBarcodes = localStorage.getItem('searchResult') ? JSON.parse(localStorage.getItem('searchResult')) : []
    infoBarcodes.forEach((item)=>{
        if (item.toString() === barcodeValue.toString()) {
            barcodeUnic = false
        }
    })
    if (barcodeUnic === true) {
        document.getElementById('barcodeMessage').innerHTML = '';
    } else {
        document.getElementById('barcodeMessage').innerHTML = 'Данный штрих-код уже зарегистрирован';
    }
    return barcodeUnic
}
*/

// Проверяем введенные данные, если корректны - отправляем форму
function checkData() {
    ValidName()
    ValidMail()
    ValidPhone()
    ValidBarcode()

    /* submitted = ValidName()&&ValidMail()&&ValidPhone()&&ValidBarcode()&&CheckUnicBarcode() */
    submitted = ValidName()&&ValidMail()&&ValidPhone()&&ValidBarcode()

    return submitted
}

// Скрываем форму и выводим сообщение об успехе
function hiddenFormBeforeSubmit() {
    if (submitted === true) {
        document.getElementById('formContent').style.display = 'none';
        document.querySelector('.successfulMessage__wrap').style.height = '650px';
        document.getElementById('successfulMessage').innerHTML = 'Спасибо, теперь вы участвуете в розыгрыше призов!';

    }
}
