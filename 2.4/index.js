const cardForm = document.getElementById('card-form');
const bankName = document.getElementById('bank-name');
const virtbankName = document.getElementById('v-bank-name');
const bankLogo = document.getElementById('bank-logo');
const paymentSystem = document.getElementById('payment-system');
const paymentSystemLogo = document.getElementById('payment-system-logo');
const virtpaymentSystem = document.getElementById('v-payment-system');
const cardNumber = document.getElementById('card-number');
const virtcardNumber = document.getElementById('v-card-number');
const cardholderName = document.getElementById('card-holder-name');
const virtcardholderName = document.getElementById('v-card-holder-name');
const expirationDate = document.getElementById('expiration-date');
const virtexpirationDate= document.getElementById('v-expiration-date');


cardForm.addEventListener('input', (event) => {
    event.preventDefault();
    const valuebankName = cardForm.elements['bank-name'].value;
    virtbankName.textContent = valuebankName;
    const valuepaymentSystem = cardForm.elements['payment-system'].value;
    const valuecardNumber = cardForm.elements['card-number'].value;
    virtcardNumber.textContent = valuecardNumber;
    const valuecardholderName = cardForm.elements['card-holder-name'].value;
    virtcardholderName.textContent = valuecardholderName.toUpperCase(); 
    const valueexpirationDate = cardForm.elements['expiration-date'].value;
    virtexpirationDate.textContent = valueexpirationDate;

    // Отображение изображений в миниатюре
    bankLogo.alt = cardForm.elements['bank-name'].value;
    bankLogo.src = getBankLogoUrl(valuebankName);
    paymentSystemLogo.alt = cardForm.elements['payment-system'].value;
    paymentSystemLogo.src = getPaymentSystemLogoUrl(valuepaymentSystem);
  });

  cardForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const valuebankName = cardForm.elements['bank-name'].value;
    const valuepaymentSystem = cardForm.elements['payment-system'].value;
    const valuecardNumber = cardForm.elements['card-number'].value;
    const valuecardholderName = cardForm.elements['card-holder-name'].value;
    const valueexpirationDate = cardForm.elements['expiration-date'].value;

    // Очистка формы
    document.getElementById('card-form').reset();
    document.getElementById('v-card').innerHTML = '';

    // Создание и добавление строки в таблицу
    var table = document.getElementById('card-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var bankNameCell = newRow.insertCell(0);
    var paymentSystemCell = newRow.insertCell(1);
    var cardNumberCell = newRow.insertCell(2);
    var cardHolderNameCell = newRow.insertCell(3);
    var expirationDateCell = newRow.insertCell(4);

    bankNameCell.innerHTML = valuebankName;
    paymentSystemCell.innerHTML = valuepaymentSystem.toUpperCase();
    cardNumberCell.innerHTML = valuecardNumber;
    cardHolderNameCell.innerHTML = valuecardholderName.toUpperCase();
    expirationDateCell.innerHTML = valueexpirationDate;
  });

function getBankLogoUrl(bankName) {
    // Здесь можно определить URL логотипа для каждого банка
    switch (bankName) {
        case 'Тинькофф Банк':
            return './img/tinkoff.png';
        case 'Сбербанк':
            return './img/sber.png';
        case 'Открытие Банк':
            return './img/otkr.png';
        case 'Райффайзен Банк':
            return './img/raif.png';
        default:
            return ''; // Если логотип для выбранного банка не найден
    }
  }


function getPaymentSystemLogoUrl(paymentSystem) {
    switch (paymentSystem) {
        case 'visa':
            return './img/visa.png';
        case 'mastercard':
            return './img/mastercard.png';
        case 'maestro':
            return './img/maestro.png';
        case 'mir':
            return './img/mir.png';
        default:
          return ''; 
      }
    }


for (var i in ['input', 'change', 'blur', 'keyup']) {
    cardNumber.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    var cardNumber = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardNumber = cardNumber != '' ? cardNumber.match(/.{1,4}/g).join(' ') : '';
    this.value = cardNumber;
    // cardForm.cardNumber.value=this.value.split(" ").join("");
}



    

