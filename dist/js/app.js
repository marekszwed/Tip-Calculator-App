// Inputs
const billInput = document.querySelector('#billPrice');
const peopleInput = document.querySelector('#peopleNumber');
const customInput = document.querySelector('#custom');
const allInput = document.querySelectorAll('input');
// Buttons
const PercentButtons = document.querySelectorAll('.discount');
const resetBtn = document.querySelector('.reset-btn');
// Right side
const amountTip = document.querySelector('.amount-price');
const totalTip = document.querySelector('.total-price');
// errors
const outlineError = document.querySelector('.error');
// const errors = document.querySelectorAll('.text-error');
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
const showBill = () => {
    // if(Number(billInput.value) == 0 || Number(peopleInput.value) == 0) {
    // 	allInput.forEach((input) => {input.classList.add('error')})
    // } else if (){
    // 	allInput.forEach((input) => {input.classList.remove('error')})
    // 	countBill()
    // }
    console.log(Number(billInput.value));
    console.log(Number(peopleInput.value));
    if (Number(billInput.value) == 0 || Number(peopleInput.value) == 0) {
        billError.classList.add('active');
        peopleInput.classList.add('active');
    }
    else if (Number(billInput.value) !== 0 || Number(peopleInput.value) == 0) {
        billError.classList.remove('active');
        peopleInput.classList.add('active');
    }
    else if (Number(billInput.value) == 0 || Number(peopleInput.value) !== 0) {
        billError.classList.add('active');
        peopleInput.classList.remove('active');
    }
    else {
        billError.classList.remove('active');
        peopleInput.classList.remove('active');
    }
};
// calculate the tip
function countBill() {
    const billValue = parseFloat(billInput.value);
    const numberOfPeople = parseInt(peopleInput.value);
    const customInputPercentage = parseInt(customInput.value);
    let btnActive = parseFloat(document.querySelector('button.show').value);
    if (customInputPercentage) {
        btnActive = parseFloat(document.querySelector('#custom').value);
    }
    const totalPrice = (btnActive / 100) * parseFloat(billValue.toFixed(2));
    // const priceAmountPerPerson: number = parseFloat((totalPrice / numberOfPeople).toFixed(2));
    const priceAmountPerPerson = parseInt((totalPrice / numberOfPeople).toFixed(2));
    totalTip.textContent = `$${totalPrice}`;
    amountTip.textContent = `$${priceAmountPerPerson}`;
}
// const checkValue = (value) => {
// 	const regex = /^[0-9]+$/;
//   return regex.test(value);
// }
// AddEventListeners
resetBtn.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    customInput.value = '';
    amountTip.innerHTML = '$0.00';
    totalTip.innerHTML = '$0.00';
    billError.textContent = '';
    peopleError.textContent = '';
});
billInput.addEventListener('keyup', showBill);
peopleInput.addEventListener('keyup', showBill);
customInput.addEventListener('keyup', showBill);
