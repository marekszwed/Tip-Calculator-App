// Inputs
const billInput = document.querySelector('#billPrice');
const peopleInput = document.querySelector('#peopleNumber');
const customInput = document.querySelector('#custom');
// Buttons
const PercentButtons = document.querySelectorAll('.discount');
const resetBtn = document.querySelector('.reset-btn');
// Right side 
const amountTip = document.querySelector('.amount-price');
const totalTip = document.querySelector('.total-price');
// errors
const outlineError = document.querySelector('.error');
const errors = document.querySelectorAll('.text-error');
const peopleError = document.querySelector('.people-error');
const billError = document.querySelector('.bill-error');
// active class "show" on each button
PercentButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        PercentButtons.forEach((btnTip) => {
            btnTip.classList.remove('show');
        });
        if (e.target.classList.contains('discount')) {
            e.target.classList.add('show');
        }
        else {
            e.target.classList.remove('show');
            countBill();
        }
        countBill();
    });
});
// calculate the tip
function countBill() {
    const billValue = parseFloat(billInput.value);
    const numberOfPeople = parseFloat(peopleInput.value);
    const customInputPercentage = parseFloat(customInput.value);
    let btnActive = parseFloat(document.querySelector('button.show').value);
    if (customInputPercentage) {
        btnActive = parseFloat(document.querySelector('#custom').value);
    }
    const totalPrice = (btnActive / 100) * parseFloat(billValue.toFixed(2));
    const priceAmountPerPerson = parseFloat((totalPrice / numberOfPeople).toFixed(2));
    totalTip.innerHTML = `$${totalPrice}`;
    amountTip.innerHTML = `$${priceAmountPerPerson}`;
}
// AddEventListeners
resetBtn.addEventListener('click', () => {
    billInput.value = '0';
    peopleInput.value = '0';
    customInput.value = '';
    amountTip.innerHTML = '$0.00';
    totalTip.innerHTML = '$0.00';
});
billInput.addEventListener('keyup', countBill);
peopleInput.addEventListener('keyup', countBill);
customInput.addEventListener('keyup', countBill);
