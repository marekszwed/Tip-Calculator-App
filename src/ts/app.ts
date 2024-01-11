'use strict';

// Inputs
const billInput: HTMLInputElement = document.querySelector('#billPrice');
const peopleInput: HTMLInputElement = document.querySelector('#peopleNumber');
const customInput: HTMLInputElement = document.querySelector('#custom');
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
const peopleError: HTMLParagraphElement =
	document.querySelector('.people-error');
const billError: HTMLParagraphElement = document.querySelector('.bill-error');

// active class "show" on each button
PercentButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		PercentButtons.forEach((btnTip) => {
			btnTip.classList.remove('show');
		});

		if ((e.target as Element).classList.contains('discount')) {
			(e.target as Element).classList.add('show');
		} else {
			(e.target as Element).classList.remove('show');
			countBill();
		}
		countBill();
	});
});

// calculate the tip
function countBill() {
	const billValue: number = parseFloat(billInput.value);
	const numberOfPeople: number = parseInt(peopleInput.value);
	const customInputPercentage: number = parseInt(customInput.value);
	let btnActive: number = parseFloat(
		(document.querySelector('button.show') as HTMLButtonElement).value
	);

	if (customInputPercentage) {
		btnActive = parseFloat(
			(document.querySelector('#custom') as HTMLInputElement).value
		);
	}

	const totalPrice: number =
		(btnActive / 100) * parseFloat(billValue.toFixed(2));
	// const priceAmountPerPerson: number = parseFloat((totalPrice / numberOfPeople).toFixed(2));
	const priceAmountPerPerson: number = parseInt(
		(totalPrice / numberOfPeople).toFixed(2)
	);

	totalTip.textContent = `$${totalPrice}`;
	amountTip.textContent = `$${priceAmountPerPerson}`;
}

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

billInput.addEventListener('keydown', () => {
	if (billInput.value == '') {
		billInput.classList.add('error');
		billError.classList.add('active')
	} else {
		billInput.classList.remove('error');
		billError.classList.remove('active')
	}
});

peopleInput.addEventListener('keydown', () => {
	if (peopleInput.value == '') {
		peopleInput.classList.add('error');
		peopleError.classList.add('active')
	} else {
		peopleInput.classList.remove('error');
		peopleError.classList.remove('active')
	}
});

billInput.addEventListener('keyup', countBill);

peopleInput.addEventListener('keyup', countBill);

customInput.addEventListener('keyup', countBill);
