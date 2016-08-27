
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
var board =
[1, 1, 1, 1,
 1, 1, 1, 1,
 1, 1, 1, 1,
 0, 0, 0, 0,
 0, 0, 0, 0,
 2, 2, 2, 2,
 2, 2, 2, 2,
 2, 2, 2, 2]
 ;

// stores number of player pieces;
// decrement when piece is killed;
var numPieces1 = 12;
var numPieces2 = 12;
var player1Pieces = []; // Stores all player 1 object
var player2Pieces = []; // Stores player 2 objects

// create piece objects and place into corresponding player array
// Create player 1 objects
for (i = 0; i < 12; i++) {
  var newPiece = new CheckerPiece("one", i, false);
  player1Pieces.push(newPiece);
}
// Create player 2 objects
for (i = 20; i < 32; i++) {
  var newPiece = new CheckerPiece("one", i, false);
  player2Pieces.push(newPiece);
}

var $grid = $('.grid2');
// Iterate through board array and append correct text or image to correct grid
function render() {
  for ( i = 0; i < board.length; i++) {
    if (board[i] === 0) {
      $grid.eq(i).html('');
  }else if (board[i] === 1){
      $grid.eq(i).html('X');
  }else if (board[i] === 2){
      $grid.eq(i).html('O');
  }
  }
}

// reset board state and render
function resetGame() {
  board =
  [1, 1, 1, 1,
   1, 1, 1, 1,
   1, 1, 1, 1,
   0, 0, 0, 0,
   0, 0, 0, 0,
   2, 2, 2, 2,
   2, 2, 2, 2,
   2, 2, 2, 2];
   render();
}

// assign jquery pointer to reset button to variable
// attach event listener to reset game button with resetGame function
$resetBtn = $('#resetBtn');
$resetBtn.on('click', resetGame);



console.log(player1Pieces);
console.log(player2Pieces);
