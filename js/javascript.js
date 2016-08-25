
// constructor function to create initial objects
// parameters of player number (0,1,2)
class CheckerPiece {
  constructor(player, xPos, yPos, validMove) {
    this.player = player;
    this.xPos = xPos;
    this.yPos = yPos;
    this.king = false;
    this.validMove = validMove;
    this.jumped = false;
  }
}

var player1Pieces = []; // Stores all player 1 object
var player2Pieces = []; // Stores player 2 objects

// create piece objects and place into corresponding player array
// create row 0 objects
for (i = 0; i < 4; i++) {
  var newPiece = new CheckerPiece("one", 1 + (2 * i), 0, false);
  player1Pieces.push(newPiece);
};

// create row 1 objects
for (i = 0; i < 4; i++) {
  var newPiece = new CheckerPiece("one", (2 * i), 1, false);
  player1Pieces.push(newPiece);
};

// create row 2 objects
for (i = 0; i < 4; i++) {
  var newPiece = new CheckerPiece("one", 1 + (2 * i), 2, false);
  player1Pieces.push(newPiece);
};

// create row 5 objects
for (i = 0; i < 4; i++) {
  var newPiece = new CheckerPiece("one", (2 * i), 5, true);
  player2Pieces.push(newPiece);
};

// create row 6 objects
for (i = 0; i < 4; i++) {
  var newPiece = new CheckerPiece("one", 1 + (2 * i), 5, false);
  player2Pieces.push(newPiece);
};

// create row 7 objects
for (i = 0; i < 4; i++) {
  var newPiece = new CheckerPiece("one", 1 + (2 * i), 5, false);
  player2Pieces.push(newPiece);
};


console.log(player1Pieces);
console.log(player2Pieces);
