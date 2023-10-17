/*Visualizzare in pagina 5 numeri casuali (anche tramite alert).
Da lì parte un timer di 30 secondi. (durante il quale i numero non devono essere visibili all’utente)
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.*/

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); 
}

function randomNumbers() {
	let arrayNumbers = [];
	while (arrayNumbers.length < 5) {
		let n = randomNumber(0, 9);
		if (!arrayNumbers.includes(n)) {
			arrayNumbers.push(n);
		}
	}

	return arrayNumbers;
}

const buttonStartDOMElement = document.getElementById('button-start');
console.log(buttonStartDOMElement);
const numbersContainerDOMElement = document.getElementById('numbers-container');
console.log(numbersContainerDOMElement);

buttonStartDOMElement.addEventListener('click', function() {
//- Creo i numeri
let arrayNumbers = randomNumbers();
console.log(arrayNumbers);
// - inserisco i numeri che ha generato la funzione randomNumbers
numbersContainerDOMElement.innerHTML = arrayNumbers;
let startNumber = 30;
let idInterval = setInterval(function timeHandler() {
	if (startNumber === 0) {
		clearInterval(idInterval);
	} else {
		startNumber--
	}
}, 1000)
}) 