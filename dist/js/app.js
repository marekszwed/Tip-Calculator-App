// Inputs
const billInput = document.querySelector('#billPrice');
const peopleInput = document.querySelector('#peopleNumber');
const customInput = document.querySelector('#custom');

// Right side - paragraphs
const amountTip = document.querySelector('.amount-price');
const totalTip = document.querySelector('.total-price');
// Buttons
const buttonsPercent = document.querySelectorAll('.discount');
const resetBtn = document.querySelector('.reset-btn');
// errors
const outlineError = document.querySelector('.error');
const errors = document.querySelectorAll('.text-error');
const peopleError = document.querySelector('.people-error');
const billError = document.querySelector('.bill-error');

function test() {
	const btnTip = parseFloat(this.value);
	console.log(btnTip);
}

// calculate total and amount tip

const countBill = () => {
	let billValue = parseFloat(billInput.value);
	let numberOfPeople = parseFloat(peopleInput.value);
	let customPercentage = parseFloat(customInput.value) / 100;

	console.log(billValue);
	console.log(numberOfPeople);
	console.log(customPercentage);

	const totalPrice = customPercentage * billValue.toFixed(2);
	const priceAmountPerPerson = totalPrice / numberOfPeople;

	totalTip.textContent = `$${totalPrice}`;
	amountTip.innerHTML = `$${priceAmountPerPerson}`;
};

// AddEventListeners
resetBtn.addEventListener('click', () => {
	billInput.value = '0';
	peopleInput.value = '0';
	customInput.value = '';
	amountTip.innerHTML = '$0.00';
	totalTip.textContent = '$0.00';
});

billInput.addEventListener('keyup', countBill);

peopleInput.addEventListener('keyup', countBill);

customInput.addEventListener('keyup', countBill);

buttonsPercent.forEach((btn) => {
	btn.addEventListener('click', test);
});

// const button = buttons.forEach(button => {button.addEventListener('click', () => {
//     const newButton = parseFloat(button.innerHTML)
//     console.log(newButton / 100);
// })})

// allInputs.forEach((input) => {
//     input.addEventListener('keyup', (e) => {
//         errors.forEach((error) => {
//             if (billInput.value == '' || peopleInput.value == '') {
//                 error.classList.add('active');
//                 error.classList.add('active');
//             }
//             else if (billInput.value !== '' || peopleInput.value == '') {
//                 error.classList.remove('active');
//                 error.classList.add('active');
//             }
//             else if (billInput.value == '' || peopleInput.value !== '') {
//                 error.classList.add('active');
//                 error.classList.remove('active');
//             }
//             else if (billInput.value !== '' || peopleInput.value !== '') {
//                 error.classList.remove('active');
//                 error.classList.remove('active');
//             }
//         });
//         if (billInput.value == '' || peopleInput.value == '') {
//             billError.classList.add('active');
//             peopleError.classList.add('active');
//         }
//         else if (billInput.value !== '' || peopleInput.value == '') {
//             billError.classList.remove('active');
//             peopleError.classList.add('active');
//         }
//         else if (billInput.value == '' || peopleInput.value !== '') {
//             billError.classList.add('active');
//             peopleError.classList.remove('active');
//         }
//         else if (billInput.value !== '' || peopleInput.value !== '') {
//             billError.classList.remove('active');
//             peopleError.classList.remove('active');
//         }
//         console.log(e.target);
//     });
// });
