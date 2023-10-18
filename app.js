/*Visualizzare in pagina 5 numeri casuali (anche tramite alert).
Da lì parte un timer di 30 secondi. (durante il quale i numero non devono essere visibili all’utente)
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.*/
//- Creo funzione per generare numeri random
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); 
}
//- Creo funzione per generare array con i cinque numeri random
function randomNumbers() {
	let arrayNumbers = [];
	while (arrayNumbers.length < 5) {
		let n = randomNumber(0, 9);
		if (!arrayNumbers.includes(n)) { //- SE l'array dei numeri non include il numero generato
			arrayNumbers.push(n); //- ALLORA 
		}
	}

	return arrayNumbers; //- faccio ritornare l'array dei numeri
}
//- Definisco la funzione che mi servirà per definire il punteggio
function numbersResult(arrayNumbers) {
	let point = 0;
	let results = '';
	let numbersPrompt = [];

	for (let i = 0; i < arrayNumbers.length; i++) {
		let numberUser = prompt('Inserisci un' + (i + 1) + 'numero');
		if (numberUser == arrayNumbers[i]) {
			point++;
			numbersPrompt.push(numberUser);
		}
	}

	results +=
	'Hai indovinato i numeri (' + point + '/' arrayNumbers.length + '):';
		for (let i = 0; i < numbersPrompt.length; i++) {
		results += '' + numbersPrompt[i];
		}
	return results;

}
//- Importo il bottone dall'html
const buttonStartDOMElement = document.getElementById('button-start');
console.log(buttonStartDOMElement);
//- Importo il container dei numeri
const numbersContainerDOMElement = document.getElementById('numbers-container');
console.log(numbersContainerDOMElement);
//- Importo il timer dall'html
const timerDOMElement = document.getElementById('timer');
console.log(timerDOMElement);
//- Associo al bottone l'evento del click, che mi genera in pagina i numeri
buttonStartDOMElement.addEventListener('click', function() {
//- Creo i numeri
	let arrayNumbers = randomNumbers();
	console.log(arrayNumbers);
// - inserisco i numeri che ha generato la funzione randomNumbers
	numbersContainerDOMElement.innerHTML = arrayNumbers;
	setTimeout(function onInterval() {
		let startNumber = 30; //- definisco il numero da cui partire
		numbersContainerDOMElement.classList.add('display-none');
		let idInterval = setInterval(function timeHandler() {
			if (startNumber === 0) { //- SE il numero iniziale arriva a 0 
				clearInterval(idInterval); //- ALLORA l'intervallo si deve fermare
				console.log(numbersResult(arrayNumbers));
			} else { 
				timerDOMElement.innerHTML = startNumber;
				startNumber--; //- ALTRIMENTI deve decrescere effettuando il countdown fino ad arrivare a 0
			}
		}, 1000)
	}, 5000)
	
}) 
