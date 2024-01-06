// Inputs
const billInput = document.querySelector('#billPrice');
const peopleInput = document.querySelector('#peopleNumber');
const customInput = document.querySelector('#custom');

// Right side - paragraphs
const amountTip = document.querySelector('.amount-price');
const totalTip = document.querySelector('.total-price');
// Buttons
const PercentButtons = document.querySelectorAll('.discount');
const resetBtn = document.querySelector('.reset-btn');

// errors
// const outlineError = document.querySelector('.error');
// const errors = document.querySelectorAll('.text-error');
// const peopleError = document.querySelector('.people-error');
// const billError = document.querySelector('.bill-error');

PercentButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		PercentButtons.forEach((btnTip) => {
			btnTip.classList.remove('show');
		});

		if (e.target.classList.contains('discount')) {
			e.target.classList.add('show');
		} else {
			e.target.classList.remove('show');
			countBill()
		}
		countBill()
		
	});
});

function countBill() {
	
	const billValue = parseFloat(billInput.value);
	const numberOfPeople = parseFloat(peopleInput.value);
	const customInputPercentage = parseFloat(customInput.value);

	let btnActive = parseFloat(document.querySelector('button.show').value);
	

	if (customInputPercentage) {
		btnActive = parseFloat(document.querySelector('#custom').value);
		// zmienić btn active na odpowiednią klasę
	}

	
	const totalPrice = (btnActive / 100) * billValue.toFixed(2);
	const priceAmountPerPerson = (totalPrice / numberOfPeople).toFixed(2);

	totalTip.innerHTML = `$${totalPrice}`;
	amountTip.innerHTML = `$${priceAmountPerPerson}`;
}

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
