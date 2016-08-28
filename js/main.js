
// constructor function to create initial objects
// parameters of player number (0,1,2)
class CheckerPiece {
  constructor(player, pos, validMove, full) {
    this.player = player;
    this.position = pos;
    this.king = false;
    this.validMove = validMove;
    this.jumped = false;
    this.full = full;
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
var playerTurn = 0;

var $grid = $('.grid2');

// Iterate through board array and append correct text or image to correct grid
function render() {
  for ( i = 0; i < boardObjects.length; i++) {
    if (boardObjects[i].player === null) {
      $grid.eq(i).html('');
  }else if (boardObjects[i].player === 2){
      $grid.eq(i).html('X');
  }else if (boardObjects[i].player === 1){
      $grid.eq(i).html('O');
  }
  }
}

function createPieces() {
  // Create player 2 objects
  for (i = 0; i < 12; i++) {
    var newPiece = new CheckerPiece(2, i, false, true);
    boardObjects.push(newPiece);
  }

  // Create blank objects to fill empty spots

  for (i = 12; i < 20; i++) {
    var newPiece = new CheckerPiece(null, i, false, false);
    boardObjects.push(newPiece);
  }

  // Create player 1 objects
  for (i = 20; i < 32; i++) {
    var newPiece = new CheckerPiece(1, i, false, true);
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

// check for player 1 valid moves
function checkValidMovesP1() {
  boardObjects.forEach(function(obj, i, arr) {
    // checks for player 1 turn
    if (playerTurn%2  === 0){
      // all player 1 pieces
      if (obj['player'] === 1) {
        // check each position and check moves
        if        (obj['position'] === 4) { //row 2
          // check for open moves
            if (!boardObjects[0]['full']) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 5) {
            if (!boardObjects[0]['full'] || !boardObjects[1]['full']) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 6) {
            if (!boardObjects[1]['full'] || !boardObjects[2]['full']) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 7) {
            if (!boardObjects[2]['full'] || !boardObjects[3]['full']) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 8) { //row 3
            if (!boardObjects[4]['full'] || !boardObjects[5]['full'] ||(boardObjects[5]['player'] === 2 && !boardObjects[1]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 9) {
            if (!boardObjects[5]['full'] || (boardObjects[5]['player'] === 2 && !boardObjects[0]['full']) ||
                !boardObjects[6]['full'] || (boardObjects[6]['player'] === 2 && !boardObjects[2]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 10) {
            if (!boardObjects[6]['full'] || (boardObjects[6]['player'] === 2 && !boardObjects[1]['full']) ||
                !boardObjects[7]['full'] || (boardObjects[7]['player'] === 2 && !boardObjects[3]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 11) {
            if (!boardObjects[7]['full'] || (boardObjects[7]['player'] === 2 && !boardObjects[2]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 12) { // row 4
            if (!boardObjects[8]['full'] || (boardObjects[8]['player'] === 2 && !boardObjects[5]['full']))
              obj.validMove = true;
          }
        } else if (obj['position'] === 13) {
            if (!boardObjects[8]['full'] || (boardObjects[8]['player'] === 2 && !boardObjects[4]['full']) ||
                !boardObjects[9]['full'] || (boardObjects[9]['player'] === 2 && !boardObjects[6]['full'])) {
              obj.validMove = true;
          }
        } else if (obj['position'] === 14) {
            if (!boardObjects[9]['full'] || (boardObjects[9]['player'] === 2 && !boardObjects[5]['full']) ||
                !boardObjects[10]['full'] || (boardObjects[10]['player'] === 2 && !boardObjects[7]['full'])) {
              obj.validMove = true;
          }
        } else if (obj['position'] === 15) {
            if (!boardObjects[10]['full'] || (boardObjects[10]['player'] === 2 && !boardObjects[6]['full']) ||
                !boardObjects[11]['full']) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 16) { // row 5
            if (!boardObjects[12]['full'] || !boardObjects[13]['full'] || (boardObjects[13]['player'] === 2 && !boardObjects[9]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 17) {
            if (!boardObjects[13]['full'] || (boardObjects[13]['player'] === 2 && !boardObjects[8]['full']) ||
                !boardObjects[14]['full'] || (boardObjects[14]['player'] === 2 && !boardObjects[10]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 18) {
            if (!boardObjects[14]['full'] || (boardObjects[14]['player'] === 2 && !boardObjects[9]['full']) ||
                !boardObjects[15]['full'] || (boardObjects[15]['player'] === 2 && !boardObjects[11]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 19) {
            if (!boardObjects[15]['full'] || (boardObjects[15]['player'] === 2 && !boardObjects[10]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 20) { // row 6
            if (!boardObjects[16]['full'] || (boardObjects[16]['player'] === 2 && !boardObjects[13]['full']))
              obj.validMove = true;
        } else if (obj['position'] === 21) {
            if (!boardObjects[16]['full'] || (boardObjects[16]['player'] === 2 && !boardObjects[12]['full']) ||
                !boardObjects[17]['full'] || (boardObjects[17]['player'] === 2 && !boardObjects[14]['full'])) {
              obj.validMove = true;
          }
        } else if (obj['position'] === 22) {
            if (!boardObjects[17]['full'] || (boardObjects[17]['player'] === 2 && !boardObjects[13]['full']) ||
                !boardObjects[18]['full'] || (boardObjects[18]['player'] === 2 && !boardObjects[15]['full'])) {
              obj.validMove = true;
          }
        } else if (obj['position'] === 23) {
            if (!boardObjects[18]['full'] || (boardObjects[18]['player'] === 2 && !boardObjects[14]['full']) ||
                !boardObjects[19]['full']) {
              obj.validMove = true;
          }
        }  else if (obj['position'] === 24) { //row 7
            if (!boardObjects[20]['full'] || !boardObjects[21]['full'] || (boardObjects[21]['player'] === 2 && !boardObjects[17]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 25) {
            if (!boardObjects[21]['full'] || (boardObjects[21]['player'] === 2 && !boardObjects[16]['full']) ||
                !boardObjects[22]['full'] || (boardObjects[22]['player'] === 2 && !boardObjects[18]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 26) {
            if (!boardObjects[22]['full'] || (boardObjects[22]['player'] === 2 && !boardObjects[17]['full']) ||
                !boardObjects[23]['full'] || (boardObjects[23]['player'] === 2 && !boardObjects[19]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 27) {
            if (!boardObjects[23]['full'] || (boardObjects[23]['player'] === 2 && !boardObjects[18]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 28) { // row 8
            if (!boardObjects[24]['full'] || (boardObjects[24]['player'] === 2 && !boardObjects[21]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 29) {
            if (!boardObjects[24]['full'] || (boardObjects[24]['player'] === 2 && !boardObjects[20]['full']) ||
                !boardObjects[25]['full'] || (boardObjects[25]['player'] === 2 && !boardObjects[22]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 30) {
            if (!boardObjects[25]['full'] || (boardObjects[25]['player'] === 2 && !boardObjects[21]['full']) ||
                !boardObjects[26]['full'] || (boardObjects[26]['player'] === 2 && !boardObjects[23]['full'])) {
              obj.validMove = true;
            }
        } else if (obj['position'] === 31) {
            if (!boardObjects[26]['full'] || (boardObjects[26]['player'] === 2 && !boardObjects[22]['full']) ||
                !boardObjects[27]['full']) {
              obj.validMove = true;
            }
        } else {
            obj.validMove = false;
        }
      }
  });
}




// attach event listener


// assign jquery pointer to reset button to variable
// attach event listener to reset game button with resetGame function
$resetBtn = $('#resetBtn');
$resetBtn.on('click', resetGame);

// for debugging ease get rid of later
createPieces();
render();
checkValidMovesP1();
console.log(boardObjects);


