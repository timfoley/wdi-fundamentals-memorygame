console.log("JS file is connected to HTML! Woo!")
var card1 = "king";
var card2 = "queen";
var card3 = "king";
var card4 = "queen";

var board = document.getElementById('game-board');

var createBoard = function() {
  for (i = 0; i < 4; i++) {
    //create blank div
    var cardTemplate = document.createElement('div');

    //give it the class 'card'
    cardTemplate.className = 'card';

    //append to board
    board.appendChild(cardTemplate);

  }

}

createBoard();
