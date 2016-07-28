var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	//grab ther data-type attribute onclick 
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = "<img src='http://i.imgur.com/OwuzXcb.jpg'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/t1tHP7p.jpg'>";
	}
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards){
	if (cards[0] === cards[1]) {
		alert("You Found A Match");
	} else {
		alert("Not A Match, try Again");
	}
}
createBoard();