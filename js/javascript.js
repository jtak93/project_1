
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

var pieces = []; // Stores all piece objects
// create row 0 objects
for (i = 0; i < 4; i++) {
  var piece = new CheckerPiece("one", 1 + (2 * i), 0, false);
  pieces.push(piece);
};

// create row 1 objects
for (i = 0; i < 4; i++) {
  var piece = new CheckerPiece("one", (2 * i), 1, false);
  pieces.push(piece);
};

// create row 2 objects
for (i = 0; i < 4; i++) {
  var piece = new CheckerPiece("one", 1 + (2 * i), 2, false);
  pieces.push(piece);
};



