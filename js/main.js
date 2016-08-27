
// constructor function to create initial objects
// parameters of player number (0,1,2)
class CheckerPiece {
  constructor(player, pos, validMove) {
    this.player = player;
    this.position = pos;
    this.king = false;
    this.validMove = validMove;
    this.jumped = false;
  }
}

// array to store board state for render function
// var board =
// [1, 1, 1, 1,
//  1, 1, 1, 1,
//  1, 1, 1, 1,
//  0, 0, 0, 0,
//  0, 0, 0, 0,
//  2, 2, 2, 2,
//  2, 2, 2, 2,
//  2, 2, 2, 2]
//  ;

// stores number of player pieces;
// decrement when piece is killed;
var numPieces1 = 12;
var numPieces2 = 12;
var boardObjects = []; // Stores all board objects, see board array above

// Create player 1 objects
for (i = 0; i < 12; i++) {
  var newPiece = new CheckerPiece('one', i, false);
  boardObjects.push(newPiece);
}

// Create blank objects to fill empty spots

for (i = 12; i < 20; i++) {
  var newPiece = new CheckerPiece('', i, false);
  boardObjects.push(newPiece);
}

// Create player 2 objects
for (i = 20; i < 32; i++) {
  var newPiece = new CheckerPiece('two', i, false);
  boardObjects.push(newPiece);
}


var $grid = $('.grid2');
// Iterate through board array and append correct text or image to correct grid
function render() {
  for ( i = 0; i < boardObjects.length; i++) {
    if (boardObjects[i].player === '') {
      $grid.eq(i).html('');
  }else if (boardObjects[i].player === 'one'){
      $grid.eq(i).html('X');
  }else if (boardObjects[i].player === 'two'){
      $grid.eq(i).html('O');
  }
  }
}
function createPieces() {
  // Create player 1 objects
  for (i = 0; i < 12; i++) {
    var newPiece = new CheckerPiece('one', i, false);
    boardObjects.push(newPiece);
  }

  // Create blank objects to fill empty spots

  for (i = 12; i < 20; i++) {
    var newPiece = new CheckerPiece('', i, false);
    boardObjects.push(newPiece);
  }

  // Create player 2 objects
  for (i = 20; i < 32; i++) {
    var newPiece = new CheckerPiece('two', i, false);
    boardObjects.push(newPiece);
  }
}
// reset board state and render
function resetGame() {
  boardObjects = [];
  createPieces();
  render();
}

// check for winner
function checkWin() {

}

// check for valid moves
function checkValidMoves() {

}


// assign jquery pointer to reset button to variable
// attach event listener to reset game button with resetGame function
$resetBtn = $('#resetBtn');
$resetBtn.on('click', resetGame);

