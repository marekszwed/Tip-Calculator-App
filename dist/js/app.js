const billInput = document.querySelector('#billPrice');
const peopleInput = document.querySelector('#peopleNumber');
const buttons = document.querySelectorAll('.discount');
const resetBtn = document.querySelector('.reset-btn');
const showBill = () => {
    const errors = document.querySelectorAll('.text-error');
    if (billInput.value == '' && peopleInput.value == '') {
        errors.forEach(error => { error.classList.add('active'); });
    }
    else {
        countBill();
        errors.forEach(error => { error.classList.remove('active'); });
    }
};
const countBill = () => {
    let newBill = Number(billInput.value);
    let newPeople = Number(peopleInput.value);
};
resetBtn.addEventListener('click', showBill);
