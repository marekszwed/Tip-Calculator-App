const billInput: HTMLInputElement = document.querySelector('#billPrice');
const peopleInput: HTMLInputElement = document.querySelector('#peopleNumber');
const buttons = document.querySelectorAll('.discount');




const resetBtn: HTMLButtonElement = document.querySelector('.reset-btn')

const showBill = () => {
    const errors = document.querySelectorAll('.text-error');

    if(billInput.value == '' && peopleInput.value == '') {
        errors.forEach(error => { error.classList.add('active')})
    } else {
        countBill()
        errors.forEach(error => { error.classList.remove('active')})
    }
    
}

const countBill = () => {
    let newBill = Number(billInput.value)
    let newPeople = Number(peopleInput.value)


}




resetBtn.addEventListener('click', showBill)