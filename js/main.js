
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

// playable html divs to jQuery
var $grid = $('.grid2');

// Iterate through board array and append correct text or image to correct grid
// also attaches object data to corresponding position
function render() {
  for ( i = 0; i < boardObjects.length; i++) {
    $grid.eq(i).data(boardObjects[i]);
    if (boardObjects[i].player === null) {
      $grid.eq(i).html('');
    } else if (boardObjects[i].player === 2){
      $grid.eq(i).html('X');
    } else if (boardObjects[i].player === 1){
      $grid.eq(i).html('O');
    }
  }
  attachHoverEvent();
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

function checkValidMoves() {
  if (playerTurn%2 === 0) {
    checkValidMovesP1();
  } else {
    checkValidMovesP2();
  }
}

// check for player 1 valid moves
function checkValidMovesP1() {
  boardObjects.forEach(function(obj, i) {
    obj.validMove = false;
    // checks for player 1 turn
    if (playerTurn%2  === 0) {

      // checks all player 1 pieces
      if (obj['player'] === 1) {
        if (obj['position'] === 4) {
          if (!boardObjects[0]['full']) {
            obj.validMove = true;
          }
        } else {
          // 5,6,7
          for (var i = 5; i < 8; i++) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full'] || !boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
            }
          }
          // pos 12,20,28
          for (var i = 12; i < 29; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full'] || (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full'])) {
                obj.validMove = true;
              }
            }
          }
          // 13,21,29
          for (var i = 13; i < 30; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full'] || (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) ||
                  !boardObjects[i-4]['full'] || (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full'])) {
                obj.validMove = true;
              }
            }
          }
          // 14,22,30
          for (var i = 14; i < 31; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full'] || (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) ||
                  !boardObjects[i-4]['full'] || (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full'])) {
                obj.validMove = true;
              }
            }
          }
          // 15,23,31
          for (var i = 15; i < 31; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full'] || (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) ||
                  !boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
            }
          }

          // 8,16,24
          for (var i = 8; i < 25; i = i + 8) {
              if (obj['position'] === i) {
                if (!boardObjects[i-3]['full'] || (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) ||
                    !boardObjects[i-4]['full']) {
                  obj.validMove = true;
                }
              }
          }

          // 9,17,25
          for (var i = 9; i < 26; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full'] || (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) ||
                  !boardObjects[i-3]['full'] || (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full'])) {
                obj.validMove = true;
              }
            }
          }

          // 10,18,26
          for (var i = 10; i < 27; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full'] || (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) ||
                  !boardObjects[i-3]['full'] || (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full'])) {
                obj.validMove = true;
              }
            }
          }

          // 11,29,27
          for (var i = 11; i < 28; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full'] || (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full'])) {
                obj.validMove = true;
              }
            }
          }
        }
      }
    }
  });
}

// check player 2 valid moves
function checkValidMovesP2() {
  boardObjects.forEach(function(obj, i) {
    // reset valid moves
    obj.validMove = false;
    // checks for player 2 turn
    if (playerTurn%2  === 1) {

      // checks all player 1 pieces
      if (obj['player'] === 2) {
        if (obj['position'] === 27) {
          if (!boardObjects[31]['full']) {
            obj.validMove = true;
          }
        } else {
          // 24,25,26
          for (var i = 24; i < 27; i++) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full'] || !boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
            }
          }
          // pos 3,11,19
          for (var i = 3; i < 20; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i+4]['full'] || (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full'])) {
                obj.validMove = true;
              }
            }
          }
          // 2,10,18
          for (var i = 2; i < 19; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i+5]['full'] || (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) ||
                  !boardObjects[i+4]['full'] || (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full'])) {
                obj.validMove = true;
              }
            }
          }
          // 1,9,17
          for (var i = 1; i < 18; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i+5]['full'] || (boardObjects[i+5]['player'] === 1 && !boardObjects[i-9]['full']) ||
                  !boardObjects[i+4]['full'] || (boardObjects[i+4]['player'] === 1 && !boardObjects[i-7]['full'])) {
                obj.validMove = true;
              }
            }
          }
          // 0,8,16
          for (var i = 0; i < 17; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i+5]['full'] || (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) ||
                  !boardObjects[i+4]['full']) {
                obj.validMove = true;
              }
            }
          }

          // 7,15,23
          for (var i = 7; i < 24; i = i + 8) {
              if (obj['position'] === i) {
                if (!boardObjects[i+3]['full'] || (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) ||
                    !boardObjects[i+4]['full']) {
                  obj.validMove = true;
                }
              }
          }

          // 6,14,22
          for (var i = 6; i < 23; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i+4]['full'] || (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) ||
                  !boardObjects[i+3]['full'] || (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full'])) {
                obj.validMove = true;
              }
            }
          }

          // 5,13,21
          for (var i = 5; i < 22; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i+4]['full'] || (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) ||
                  !boardObjects[i+3]['full'] || (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full'])) {
                obj.validMove = true;
              }
            }
          }

          // 4,12,20
          for (var i = 4; i < 21; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i+4]['full'] || (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full'])) {
                obj.validMove = true;
              }
            }
          }
        }
      }
    }
  });
}



// attach event listeners
function attachHoverEvent() {
  boardObjects.forEach(function(obj, i) {
    if (obj.validMove) {
      $grid.eq(i).hover(
        function() {
          $(this).css({"background-color": "yellow", "cursor": "pointer"});
        }, function() {
          $(this).css({"background-color": "red", "cursor": "auto"});
        }
      );
    } else {
      $grid.eq(i).off(); // if no valid move, remove the event
    }
  });
}


// assign jquery pointer to reset button to variable
// attach event listener to reset game button with resetGame function
$resetBtn = $('#resetBtn');
$resetBtn.on('click', resetGame);

// for debugging ease get rid of later
createPieces();
render();
checkValidMovesP1();
render();
console.log(boardObjects);



