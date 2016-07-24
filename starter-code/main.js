var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo){
	alert("That's A Match!");
} else if (cardOne === cardThree) {
	alert("That's Not A Match");
} else if (cardOne === cardFour) {
	alert("That's Not A Match.");
} else if (cardTwo === cardThree) {
	alert("That's Not A Match.");
} else if (cardTwo === cardFour) {
	alert("That's Not A Match.");
} else if (cardThree === cardFour) {
	alert("That's A Match!");
} else {
	alert("You Made A Invalid Selection");
}
