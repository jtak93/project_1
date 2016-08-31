
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
    this.clicked = false;
  }

  // method to move player object back 3 index positions
  movePMinusThree(currentPos) {
    //
    // change new pos to moved object
    boardObjects[currentPos - 3] = boardObjects[currentPos];
    boardObjects[currentPos - 3].position = currentPos - 3;
    // set old position to empty object
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
  }
  // method to move player object back 4 index positions
  movePMinusFour(currentPos) {
    //
    // change new pos to moved object
    boardObjects[currentPos - 4] = boardObjects[currentPos];
    boardObjects[currentPos - 4].position = currentPos - 4;
    // set old position to empty object
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
  }

  // method to move player object back 5 index positions
  movePMinusFive(currentPos) {
    //
    // change new pos to moved object
    boardObjects[currentPos - 5] = boardObjects[currentPos];
    boardObjects[currentPos - 5].position = currentPos - 5;
    // set old position to empty object
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;

  }

  // method to move player object forward 3 index positions
  movePPlusThree(currentPos) {
    //
    // change new pos to moved object
    boardObjects[currentPos + 3] = boardObjects[currentPos];
    boardObjects[currentPos + 3].position = currentPos + 3;
    // set old position to empty object
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
  }

  // method to move player object forward 4 index positions
  movePPlusFour(currentPos) {
    //
    // change new pos to moved object
    boardObjects[currentPos + 4] = boardObjects[currentPos];
    boardObjects[currentPos + 4].position = currentPos + 4;
    // set old position to empty object
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
  }

  // method to move player object forward 5 index positions
  movePPlusFive(currentPos) {
    //
    // change new pos to moved object
    boardObjects[currentPos + 5] = boardObjects[currentPos];
    boardObjects[currentPos + 5].position = currentPos + 5;
    // set old position to empty object
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;

  }

  // method to jump player object over -4 pos to -7 index position
  jumpMinus7Over4(currentPos) {

    // change new pos to moved object
    boardObjects[currentPos - 7] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos - 7;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos - 4] = blankObject;
    boardObjects[currentPos - 4].position = currentPos - 4;
  }

  // method to jump player object over -3 pos to -7 index position
  jumpMinus7Over3(currentPos) {
    // store blank obj
    // change new pos to moved object
    boardObjects[currentPos - 7] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos - 7;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos - 3] = blankObject;
    boardObjects[currentPos - 3].position = currentPos - 3;
  }

  // method to jump player object over -4 pos to -9 index position
  jumpMinus9Over4(currentPos) {
    // change new pos to moved object
    boardObjects[currentPos - 9] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos - 9;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos - 4] = blankObject;
    boardObjects[currentPos - 4].position = currentPos - 4;
  }

  // method to jump player object over -5 pos to -9 index position
  jumpMinus9Over5(currentPos) {
    // change new pos to moved object
    boardObjects[currentPos - 9] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos - 9;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos - 5] = blankObject;
    boardObjects[currentPos - 5].position = currentPos - 5;
  }

  // method to jump player object over +5 pos to +9 index position
  jumpPlus9Over4(currentPos) {
    // change new pos to moved object
    boardObjects[currentPos + 9] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos + 9;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos + 4] = blankObject;
    boardObjects[currentPos + 4].position = currentPos + 4;
  }

  // method to jump player object over +5 pos to +9 index position
  jumpPlus9Over5(currentPos) {
    // change new pos to moved object
    boardObjects[currentPos + 9] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos + 9;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos + 5] = blankObject;
    boardObjects[currentPos + 5].position = currentPos + 5;
  }

  // method to jump player object over +4 pos to +7 index position
  jumpPlus7Over4(currentPos) {
    // change new pos to moved object
    boardObjects[currentPos + 7] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos + 7;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos + 4] = blankObject;
    boardObjects[currentPos + 4].position = currentPos + 4;
  }

  // method to jump player object over +3 pos to +7 index position
  jumpPlus7Over3(currentPos) {
    boardObjects[currentPos + 7] = boardObjects[currentPos];
    boardObjects[currentPos].position = currentPos + 7;
    // make jumped and prev spots empty
    boardObjects[currentPos] = blankObject;
    boardObjects[currentPos].position = currentPos;
    boardObjects[currentPos + 3] = blankObject;
    boardObjects[currentPos + 3].position = currentPos + 3;
  }
}

// stores number of player pieces;
// decrement when piece is killed;
var p1Pieces = 0;
var p2Pieces = 0;
var boardObjects = []; // Stores all board objects, see board array above
var turnCounter = 0;
var $clickedObjData; // stores clicked obj data
var playerMoved = false; // stores whether played made move this turn (for jump check)
var blankObject = new CheckerPiece(null, null, false, false);
// playable html divs to jQuery
var $grid = $('.grid2');
var $board = $('.board');

// sounds for jumps and kinging
var audioWalt = new Audio('assets/sounds/i-am-the-one-who-knocks.mp3');
var audioGus = new Audio('assets/sounds/gus-quote.mp3');
var audioHeisenberg = new Audio('assets/sounds/heisenberg.mp3');
var audioDeadGus = new Audio ('assets/sounds/gus-dead.mp3');

// Iterate through board array and append correct text or image to correct grid
// also attaches object data to corresponding position
function render() {
  checkKing();
  checkValidMoves();
  checkValidMovesKing();
  for ( i = 0; i < boardObjects.length; i++) {
    $grid.eq(i).data(boardObjects[i]);
    if (boardObjects[i].player === null) {
      $grid.eq(i).html('');
    } else if (boardObjects[i].player === 2 && boardObjects[i].king){
      $grid.eq(i).html('<img class="boardimg" src="assets/images/gus-scary.png">');
    } else if (boardObjects[i].player === 1 && boardObjects[i].king){
      $grid.eq(i).html('<img class="boardimg" src="assets/images/heisenberg.png">');
    } else if (boardObjects[i].player === 2){
      $grid.eq(i).html('<img class="boardimg" src="assets/images/gus-normal.png">');
    } else if (boardObjects[i].player === 1){
      $grid.eq(i).html('<img class="boardimg" src="assets/images/walter-white.png">');
    }
  }
  attachHoverEvent();
  changeTurnDisplay();
  checkWin();
  return boardObjects;
}

function changeTurnDisplay() {
  // player 1 turn
  turnCounter%2 === 0 ? $('.turnDisplay').text('Player Turn: Walter White') : $('.turnDisplay').text('Player Turn: Gustavo Fring');
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

// // MOSTLY EMPTY OBJECTS FOR DEBUGGING
// function createPieces() {
//   // Create player 2 objects
//   for (i = 0; i < 4; i++) {
//     var newPiece = new CheckerPiece(2, i, false, true);
//     boardObjects.push(newPiece);
//   }

//   // Create blank objects to fill empty spots

//   for (i = 4; i < 28; i++) {
//     var newPiece = new CheckerPiece(null, i, false, false);
//     boardObjects.push(newPiece);
//   }

//   // Create player 1 objects
//   for (i = 28; i < 32; i++) {
//     var newPiece = new CheckerPiece(1, i, false, true);
//     boardObjects.push(newPiece);
//   }
// }

// reset board state and render
function resetGame() {
  boardObjects = [];
  turnCounter = 0;
  createPieces();
  render();
}

// checks end spot for certain player piece, if king value is false
// switch to true
function checkKing() {
  // check row 1 for player 1 pieces
  for (i = 0; i < 4; i++) {
    if (!boardObjects[i].king && boardObjects[i].player === 1) {
      boardObjects[i].king = true;
      audioHeisenberg.play();
    }
  }
  // check row 8 for player 2 pieces
  for (i = 28; i < 32; i++) {
    if (!boardObjects[i].king && boardObjects[i].player === 2) {
      boardObjects[i].king = true;
      audioDeadGus.play();
    }
  }
}
// check for winner
// if player has no pieces, other player wins
// if player has no valid moves on own turn, other player wins
function checkWin() {
  p1Pieces = 0;
  p2Pieces = 0;
  // loop through pieces and check for player
  boardObjects.forEach(function(obj,i) {
    if (obj.player === 1) {
      p1Pieces++;
    }
    if (obj.player === 2) {
      p2Pieces++;
    }
  })
  if (p1Pieces === 0) {
    alert("Gus Wins!")
  }
  if (p2Pieces === 0) {
    alert("Walt Wins!")
  }
}

// checks valid moves based on player turn
function checkValidMoves() {
  // checkJumped();
  // if (checkJumped){
  //   // do nothing
  // } else
  if (turnCounter%2 === 0) {
    checkValidMovesP1();
  } else if (!turnCounter%2 === 0) {
    checkValidMovesP2();
  }
}

// need to fix logic if no move after
function checkJumped() {
  boardObjects.forEach(function(obj, i) {
          console.log(this);
    if (obj.jumped) {
      console.log(this);
      obj.validMove = true;
      return true;
    } else {
    return false;
    }
  });
}

function checkValidMovesKing() {
  boardObjects.forEach(function(obj, i) {
    if (turnCounter%2  === 0) {
      if (obj['player'] === 1 && obj.king) {
        if (obj['position'] === 27) {
          if (!boardObjects[31]['full']) {
            obj.validMove = true;
          }
        }
        // 24,25,26
        for (var i = 24; i < 27; i++) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
          }
        }
        // pos 3,11,19
        for (var i = 3; i < 20; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']){
              obj.validMove = true;
            }
            if(boardObjects[i+4]['player'] === 2 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 2,10,18
        for (var i = 2; i < 19; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 1,9,17
        for (var i = 1; i < 18; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 0,8,16
        for (var i = 0; i < 17; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 7,15,23
        for (var i = 7; i < 24; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+3]['full']){
              obj.validMove = true;
            }
            if (boardObjects[i+3]['player'] === 2 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 6,14,22
        for (var i = 6; i < 23; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+3]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+3]['player'] === 2 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 5,13,21
        for (var i = 5; i < 22; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+3]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+3]['player'] === 2 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 4,12,20
        for (var i = 4; i < 21; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
          }
        }

      }


    } else if (obj['player'] === 2 && obj.king) {
        if (obj['position'] === 4) {
          if (!boardObjects[0]['full']) {
            obj.validMove = true;
          }
        }
        // 5,6,7
        for (var i = 5; i < 8; i++) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
          }
        }
        // pos 12,20,28
        for (var i = 12; i < 29; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']){
              obj.validMove = true;
            }
            if(boardObjects[i-4]['player'] === 1 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 13,21,29
        for (var i = 13; i < 30; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-5]['player'] === 1 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-4]['player'] === 1 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 14,22,30
        for (var i = 14; i < 31; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-5]['player'] === 1 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-4]['player'] === 1 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 15,23,31
        for (var i = 15; i < 32; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-5]['player'] === 1 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 8,16,24
        for (var i = 8; i < 25; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-3]['full']){
              obj.validMove = true;
            }
            if (boardObjects[i-3]['player'] === 1 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 9,17,25
        for (var i = 9; i < 26; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-4]['player'] === 1 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i-3]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-3]['player'] === 1 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 10,18,26
        for (var i = 10; i < 27; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-4]['player'] === 1 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i-3]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-3]['player'] === 1 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 11,19,27
        for (var i = 11; i < 28; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i-4]['player'] === 1 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
            }
          }
        }
     }
  })
}
// check for player 1 valid moves
// loops through all board objects and checks for conditions
function checkValidMovesP1() {
  boardObjects.forEach(function(obj, i) {
    // reset valid moves
    obj.validMove = false;
    // checks for player 1 turn
      if (turnCounter%2  === 0) {

        // stil need to check jump and check king
        // checks all player 1 pieces non jump or king
        if (obj['player'] === 1) {
          if (obj['position'] === 4) {
            if (!boardObjects[0]['full']) {
              obj.validMove = true;
            }
          }
          // 5,6,7
          for (var i = 5; i < 8; i++) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full']) {
                obj.validMove = true;
              }
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
            }
          }
          // pos 12,20,28
          for (var i = 12; i < 29; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full']){
                obj.validMove = true;
              }
              if(boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
                obj.validMove = true;
              }
            }
          }
          // 13,21,29
          for (var i = 13; i < 30; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
                obj.validMove = true;
              }
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
                obj.validMove = true;
              }
            }
          }
          // 14,22,30
          for (var i = 14; i < 31; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
                obj.validMove = true;
              }
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
                obj.validMove = true;
              }
            }
          }
          // 15,23,31
          for (var i = 15; i < 32; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-5]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
                obj.validMove = true;
              }
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
            }
          }

          // 8,16,24
          for (var i = 8; i < 25; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-3]['full']){
                obj.validMove = true;
              }
              if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
                obj.validMove = true;
              }
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
            }
          }

          // 9,17,25
          for (var i = 9; i < 26; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
                obj.validMove = true;
              }
              if (!boardObjects[i-3]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
                obj.validMove = true;
              }
            }
          }

          // 10,18,26
          for (var i = 10; i < 27; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
                obj.validMove = true;
              }
              if (!boardObjects[i-3]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
                obj.validMove = true;
              }
            }
          }

          // 11,19,27
          for (var i = 11; i < 28; i = i + 8) {
            if (obj['position'] === i) {
              if (!boardObjects[i-4]['full']) {
                obj.validMove = true;
              }
              if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
                obj.validMove = true;
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
    if (turnCounter%2  === 1) {
      // stil need to check jump and check king
      // checks all player 2 pieces non jump or king
      if (obj['player'] === 2) {
        if (obj['position'] === 27) {
          if (!boardObjects[31]['full']) {
            obj.validMove = true;
          }
        }
        // 24,25,26
        for (var i = 24; i < 27; i++) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
          }
        }
        // pos 3,11,19
        for (var i = 3; i < 20; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']){
              obj.validMove = true;
            }
            if(boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 2,10,18
        for (var i = 2; i < 19; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 1,9,17
        for (var i = 1; i < 18; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }
        // 0,8,16
        for (var i = 0; i < 17; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 7,15,23
        for (var i = 7; i < 24; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+3]['full']){
              obj.validMove = true;
            }
            if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 6,14,22
        for (var i = 6; i < 23; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+3]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 5,13,21
        for (var i = 5; i < 22; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
            if (!boardObjects[i+3]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
            }
          }
        }

        // 4,12,20
        for (var i = 4; i < 21; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
            }
          }
        }
      }
    }
  });
}


// move function retrieves clicked element data then changes object data based on move
function movePiece(evt) {


  if ($(this).data().player === 1 && $(this).data().validMove && boardObjects[parseInt(this.id)].clicked) {
    //check for move spots

    // player 1 forward move pos 4,11,12,19,20,27,28
    if ($(this).data().position === 4  ||
        $(this).data().position === 11 ||
        $(this).data().position === 12 ||
        $(this).data().position === 19 ||
        $(this).data().position === 20 ||
        $(this).data().position === 27 ||
        $(this).data().position === 28) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 4].full) {
              // add event
              $grid.eq(clickedPos - 4).on('click' , function() {
                boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 4).off('click' , function() {
                  boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                });
              });
            }
    }

    // player 1 forward move position 5,6,7,13,14,15,21,22,23,29,30,31
    if ($(this).data().position === 5 ||
        $(this).data().position === 6 ||
        $(this).data().position === 7 ||
        $(this).data().position === 13 ||
        $(this).data().position === 14 ||
        $(this).data().position === 15 ||
        $(this).data().position === 21 ||
        $(this).data().position === 22 ||
        $(this).data().position === 23 ||
        $(this).data().position === 29 ||
        $(this).data().position === 30 ||
        $(this).data().position === 31) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 5].full) {
              $grid.eq(clickedPos - 5).on('click' , function() {
                boardObjects[clickedPos - 5].movePMinusFive(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos - 5).off('click' , function() {
                  boardObjects[clickedPos - 5].movePMinusFive(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos - 4].full) {
              $grid.eq(clickedPos - 4).on('click' , function() {
                boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos - 4).off('click' , function() {
                  boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                });
              });
            }
    }

    // player 1 forward move position 8,9,10,16,17,18,24,25,26
    if ($(this).data().position === 8 ||
        $(this).data().position === 9 ||
        $(this).data().position === 10 ||
        $(this).data().position === 16 ||
        $(this).data().position === 17 ||
        $(this).data().position === 18 ||
        $(this).data().position === 24 ||
        $(this).data().position === 25 ||
        $(this).data().position === 26) {
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 3].full) {
              // add click event
              $grid.eq(clickedPos - 3).on('click' , function(evt) {
                boardObjects[clickedPos - 3].movePMinusThree(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos - 3).off('click' , function(evt) {
                  boardObjects[clickedPos - 3].movePMinusThree(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos - 4].full) {
              $grid.eq(clickedPos - 4).on('click' , function(evt) {
                boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos - 4).off('click' , function(evt) {
                  boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                });
              });

            }
    }
    // forward jumps player 1 pos 12,20,28
    if ($(this).data().position === 12 ||
        $(this).data().position === 20 ||
        $(this).data().position === 28) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos - 7].full
              && boardObjects[clickedPos - 4].player === 2) {
            // add event
            $grid.eq(clickedPos - 7).on('click' , function() {
              boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
              boardObjects[clickedPos - 7].jumped = true;
              // if no valid moves after jump increment turn counter
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 7).off('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
              });
            });
          }
    }

    // forward jumps player 1 pos 8,16,24
    if ($(this).data().position === 8  ||
        $(this).data().position === 16 ||
        $(this).data().position === 24) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos - 7].full
              && boardObjects[clickedPos - 3].player === 2) {
            // add event
            $grid.eq(clickedPos - 7).on('click' , function() {
              boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
              boardObjects[clickedPos - 7].jumped = true;
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 7).off('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
              });
            });
          }
    }

    // forward jumps player 1 pos 13,14,21,22,29,30
    if ($(this).data().position === 13 ||
        $(this).data().position === 14 ||
        $(this).data().position === 21 ||
        $(this).data().position === 22 ||
        $(this).data().position === 29 ||
        $(this).data().position === 30) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos - 7].full
              && boardObjects[clickedPos - 4].player === 2) {
            // add event
            $grid.eq(clickedPos - 7).on('click' , function() {
              boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
              boardObjects[clickedPos - 7].jumped = true;
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 7).off('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
              });
            });
          }

          if (!boardObjects[clickedPos - 9].full
              && boardObjects[clickedPos - 5].player === 2) {
            // add event
            $grid.eq(clickedPos - 9).on('click' , function() {
              boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
              boardObjects[clickedPos - 9].jumped = true;
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 9).off('click' , function() {
                boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
              });
            });
          }
    }

    // forward jumps player 1 pos 9,10,17,18,25,26
    if ($(this).data().position === 9  ||
        $(this).data().position === 10 ||
        $(this).data().position === 17 ||
        $(this).data().position === 18 ||
        $(this).data().position === 25 ||
        $(this).data().position === 26) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos - 7].full
              && boardObjects[clickedPos - 3].player === 2) {
            // add event
            $grid.eq(clickedPos - 7).on('click' , function() {
              boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
              boardObjects[clickedPos - 7].jumped = true;
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 7).off('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
              });
            });
          }

          if (!boardObjects[clickedPos - 9].full
              && boardObjects[clickedPos - 4].player === 2) {
            // add event
            $grid.eq(clickedPos - 9).on('click', function() {
              boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
              boardObjects[clickedPos - 9].jumped = true;
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 9).off('click' , function() {
                boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
              });
            });
          }
    }

    // forward jumps player 1 pos 15,23,31
    if ($(this).data().position === 15 ||
        $(this).data().position === 23 ||
        $(this).data().position === 31) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos - 9].full
              && boardObjects[clickedPos - 5].player === 2) {
            // add event
            $grid.eq(clickedPos - 9).on('click' , function() {
              boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
              boardObjects[clickedPos - 9].jumped = true;
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 9).off('click' , function() {
                boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
              });
            });
          }
    }

    // forward jumps player 1 pos 11,19,27
    if ($(this).data().position === 11 ||
        $(this).data().position === 19 ||
        $(this).data().position === 27) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos - 9].full
              && boardObjects[clickedPos - 4].player === 2) {
            // add event
            $grid.eq(clickedPos - 9).on('click' , function() {
              boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
              boardObjects[clickedPos - 9].jumped = true;
              checkValidMoves();
              audioWalt.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos - 9).off('click' , function() {
                boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
              });
            });
          }
    }
    // if player 1 king add player 2 moves
    if ($(this).data().king)
      if ($(this).data().position === 3  ||
          $(this).data().position === 4  ||
          $(this).data().position === 11 ||
          $(this).data().position === 12 ||
          $(this).data().position === 19 ||
          $(this).data().position === 20 ||
          $(this).data().position === 27) {
              // stores clicked position value
              var clickedPos = $(this).data().position;
              if (!boardObjects[clickedPos + 4].full) {
                // add event
                $grid.eq(clickedPos + 4).on('click' , function() {
                  boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                  turnCounter++;
                  render();
                  // remove event
                  $grid.eq(clickedPos + 4).off('click' , function() {
                    boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                  });
                });
              }
      }

      // player 1 backward move position 0,1,2,8,9,10,16,17,18,24,25,26
      if ($(this).data().position === 0 ||
          $(this).data().position === 1 ||
          $(this).data().position === 2 ||
          $(this).data().position === 8 ||
          $(this).data().position === 9 ||
          $(this).data().position === 10 ||
          $(this).data().position === 16 ||
          $(this).data().position === 17 ||
          $(this).data().position === 18 ||
          $(this).data().position === 24 ||
          $(this).data().position === 25 ||
          $(this).data().position === 26) {
              // stores clicked position value
              var clickedPos = $(this).data().position;
              if (!boardObjects[clickedPos + 5].full) {
                $grid.eq(clickedPos + 5).on('click' , function() {
                  boardObjects[clickedPos + 5].movePPlusFive(clickedPos);
                  turnCounter++;
                  render();
                  $grid.eq(clickedPos + 5).off('click' , function() {
                    boardObjects[clickedPos + 5].movePPlusFive(clickedPos);
                  });
                });
              }
              if (!boardObjects[clickedPos + 4].full) {
                $grid.eq(clickedPos + 4).on('click' , function() {
                  boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                  turnCounter++;
                  render();
                  $grid.eq(clickedPos + 4).off('click' , function() {
                    boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                  });
                });
              }
      }

      // player 1 backward move position 5,6,7,13,14,15,21,22,23
      if ($(this).data().position === 5  ||
          $(this).data().position === 6  ||
          $(this).data().position === 7  ||
          $(this).data().position === 13 ||
          $(this).data().position === 14 ||
          $(this).data().position === 15 ||
          $(this).data().position === 21 ||
          $(this).data().position === 22 ||
          $(this).data().position === 23) {
              var clickedPos = $(this).data().position;
              if (!boardObjects[clickedPos + 3].full) {
                // add click event
                $grid.eq(clickedPos + 3).on('click' , function(evt) {
                  boardObjects[clickedPos + 3].movePPlusThree(clickedPos);
                  turnCounter++;
                  render();
                  // remove click event
                  $grid.eq(clickedPos + 3).off('click' , function(evt) {
                    boardObjects[clickedPos + 3].movePPlusThree(clickedPos);
                  });
                });
              }
              if (!boardObjects[clickedPos + 4].full) {
                $grid.eq(clickedPos + 4).on('click' , function(evt) {
                  boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                  turnCounter++;
                  render();
                  // remove click event
                  $grid.eq(clickedPos + 4).off('click' , function(evt) {
                    boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                  });
                });
              }
      }

      // backward jumps player 1 pos 3,11,19
      if ($(this).data().position === 3  ||
          $(this).data().position === 11 ||
          $(this).data().position === 19) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 7].full
                && boardObjects[clickedPos + 4].player === 2) {
              // add event
              $grid.eq(clickedPos + 7).on('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
                boardObjects[clickedPos + 7].jumped = true;
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 7).off('click' , function() {
                  boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
                });
              });
            }
      }

      // backward jumps player 1 pos 7,15,23
      if ($(this).data().position === 7  ||
          $(this).data().position === 15 ||
          $(this).data().position === 23) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 7].full
                && boardObjects[clickedPos + 3].player === 2) {
              // add event
              $grid.eq(clickedPos + 7).on('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
                boardObjects[clickedPos + 7].jumped = true;
                checkValidMoves();
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 7).off('click' , function() {
                  boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
                });
              });
            }
      }

      // backward jumps player 1 pos 1,2,9,10,17,18
      if ($(this).data().position === 1  ||
          $(this).data().position === 2  ||
          $(this).data().position === 9  ||
          $(this).data().position === 10 ||
          $(this).data().position === 17 ||
          $(this).data().position === 18) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 7].full
                && boardObjects[clickedPos + 4].player === 2) {
              // add event
              $grid.eq(clickedPos + 7).on('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
                boardObjects[clickedPos + 7].jumped = true;
                checkValidMoves();
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 7).off('click' , function() {
                  boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
                });
              });
            }

            if (!boardObjects[clickedPos + 9].full
                && boardObjects[clickedPos + 5].player === 2) {
              // add event
              $grid.eq(clickedPos + 9).on('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
                boardObjects[clickedPos + 9].jumped = true;
                checkValidMoves();
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 9).off('click' , function() {
                  boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
                });
              });
            }
      }

      // backward jumps player 1 pos 5,6,13,14,21,22
      if ($(this).data().position === 5  ||
          $(this).data().position === 6  ||
          $(this).data().position === 13 ||
          $(this).data().position === 14 ||
          $(this).data().position === 21 ||
          $(this).data().position === 22) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 7].full
                && boardObjects[clickedPos + 3].player === 2) {
              // add event
              $grid.eq(clickedPos + 7).on('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
                boardObjects[clickedPos + 7].jumped = true;
                checkValidMoves();
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 7).off('click' , function() {
                  boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
                });
              });
            }

            if (!boardObjects[clickedPos + 9].full
                && boardObjects[clickedPos + 4].player === 2) {
              // add event
              $grid.eq(clickedPos + 9).on('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
                boardObjects[clickedPos + 9].jumped = true;
                checkValidMoves();
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 9).off('click' , function() {
                  boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
                });
              });
            }
      }

      // backward jumps player 1 pos 0,8,16
      if ($(this).data().position === 0  ||
          $(this).data().position === 8  ||
          $(this).data().position === 16) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 9].full
                && boardObjects[clickedPos + 5].player === 2) {
              // add event
              $grid.eq(clickedPos + 9).on('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
                boardObjects[clickedPos + 9].jumped = true;
                checkValidMoves();
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 9).off('click' , function() {
                  boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
                });
              });
            }
      }

      // backward jumps player 1 pos 4,12,20
      if ($(this).data().position === 4  ||
          $(this).data().position === 12 ||
          $(this).data().position === 20) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 9].full
                && boardObjects[clickedPos + 4].player === 2) {
              // add event
              $grid.eq(clickedPos + 9).on('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
                boardObjects[clickedPos + 9].jumped = true;
                checkValidMoves();
                audioWalt.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 9).off('click' , function() {
                  boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
                });
              });
            }
      }
  }

  if ($(this).data().player === 2 && $(this).data().validMove && boardObjects[parseInt(this.id)].clicked) {
    //check for move spots
    // player 2 forward move pos 3,4,11,12,19,20,27
    if ($(this).data().position === 3  ||
        $(this).data().position === 4  ||
        $(this).data().position === 11 ||
        $(this).data().position === 12 ||
        $(this).data().position === 19 ||
        $(this).data().position === 20 ||
        $(this).data().position === 27) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 4].full) {
              // add event
              $grid.eq(clickedPos + 4).on('click' , function() {
                boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 4).off('click' , function() {
                  boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                });
              });
            }
    }

    // player 2 forward move position 0,1,2,8,9,10,16,17,18,24,25,26
    if ($(this).data().position === 0 ||
        $(this).data().position === 1 ||
        $(this).data().position === 2 ||
        $(this).data().position === 8 ||
        $(this).data().position === 9 ||
        $(this).data().position === 10 ||
        $(this).data().position === 16 ||
        $(this).data().position === 17 ||
        $(this).data().position === 18 ||
        $(this).data().position === 24 ||
        $(this).data().position === 25 ||
        $(this).data().position === 26) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 5].full) {
              $grid.eq(clickedPos + 5).on('click' , function() {
                boardObjects[clickedPos + 5].movePPlusFive(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos + 5).off('click' , function() {
                  boardObjects[clickedPos + 5].movePPlusFive(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos + 4].full) {
              $grid.eq(clickedPos + 4).on('click' , function() {
                boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos + 4).off('click' , function() {
                  boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                });
              });
            }
    }

    // player 2 forward move position 5,6,7,13,14,15,21,22,23
    if ($(this).data().position === 5  ||
        $(this).data().position === 6  ||
        $(this).data().position === 7  ||
        $(this).data().position === 13 ||
        $(this).data().position === 14 ||
        $(this).data().position === 15 ||
        $(this).data().position === 21 ||
        $(this).data().position === 22 ||
        $(this).data().position === 23) {
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 3].full) {
              // add click event
              $grid.eq(clickedPos + 3).on('click' , function(evt) {
                boardObjects[clickedPos + 3].movePPlusThree(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos + 3).off('click' , function(evt) {
                  boardObjects[clickedPos + 3].movePPlusThree(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos + 4].full) {
              $grid.eq(clickedPos + 4).on('click' , function(evt) {
                boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos + 4).off('click' , function(evt) {
                  boardObjects[clickedPos + 4].movePPlusFour(clickedPos);
                });
              });
            }
    }

    // forward jumps player 2 pos 3,11,19
    if ($(this).data().position === 3  ||
        $(this).data().position === 11 ||
        $(this).data().position === 19) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos + 7].full
              && boardObjects[clickedPos + 4].player === 1) {
            // add event
            $grid.eq(clickedPos + 7).on('click' , function() {
              boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
              boardObjects[clickedPos + 7].jumped = true;
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 7).off('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
              });
            });
          }
    }

    // forward jumps player 2 pos 7,15,23
    if ($(this).data().position === 7  ||
        $(this).data().position === 15 ||
        $(this).data().position === 23) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos + 7].full
              && boardObjects[clickedPos + 3].player === 1) {
            // add event
            $grid.eq(clickedPos + 7).on('click' , function() {
              boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
              boardObjects[clickedPos + 7].jumped = true;
              checkValidMoves();
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 7).off('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
              });
            });
          }
    }

    // forward jumps player 2 pos 1,2,9,10,17,18
    if ($(this).data().position === 1  ||
        $(this).data().position === 2  ||
        $(this).data().position === 9  ||
        $(this).data().position === 10 ||
        $(this).data().position === 17 ||
        $(this).data().position === 18) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos + 7].full
              && boardObjects[clickedPos + 4].player === 1) {
            // add event
            $grid.eq(clickedPos + 7).on('click' , function() {
              boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
              boardObjects[clickedPos + 7].jumped = true;
              checkValidMoves();
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 7).off('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over4(clickedPos);
              });
            });
          }

          if (!boardObjects[clickedPos + 9].full
              && boardObjects[clickedPos + 5].player === 1) {
            // add event
            $grid.eq(clickedPos + 9).on('click' , function() {
              boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
              boardObjects[clickedPos + 9].jumped = true;
              checkValidMoves();
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 9).off('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
              });
            });
          }
    }

    // forward jumps player 2 pos 5,6,13,14,21,22
    if ($(this).data().position === 5  ||
        $(this).data().position === 6  ||
        $(this).data().position === 13 ||
        $(this).data().position === 14 ||
        $(this).data().position === 21 ||
        $(this).data().position === 22) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos + 7].full
              && boardObjects[clickedPos + 3].player === 1) {
            // add event
            $grid.eq(clickedPos + 7).on('click' , function() {
              boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
              boardObjects[clickedPos + 7].jumped = true;
              checkValidMoves();
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 7).off('click' , function() {
                boardObjects[clickedPos + 7].jumpPlus7Over3(clickedPos);
              });
            });
          }

          if (!boardObjects[clickedPos + 9].full
              && boardObjects[clickedPos + 4].player === 1) {
            // add event
            $grid.eq(clickedPos + 9).on('click' , function() {
              boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
              boardObjects[clickedPos + 9].jumped = true;
              checkValidMoves();
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 9).off('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
              });
            });
          }
    }

    // forward jumps player 2 pos 0,8,16
    if ($(this).data().position === 0  ||
        $(this).data().position === 8  ||
        $(this).data().position === 16) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos + 9].full
              && boardObjects[clickedPos + 5].player === 1) {
            // add event
            $grid.eq(clickedPos + 9).on('click' , function() {
              boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
              boardObjects[clickedPos + 9].jumped = true;
              checkValidMoves();
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 9).off('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over5(clickedPos);
              });
            });
          }
    }

    // forward jumps player 2 pos 4,12,20
    if ($(this).data().position === 4  ||
        $(this).data().position === 12 ||
        $(this).data().position === 20) {
          // stores clicked position value
          var clickedPos = $(this).data().position;
          if (!boardObjects[clickedPos + 9].full
              && boardObjects[clickedPos + 4].player === 1) {
            // add event
            $grid.eq(clickedPos + 9).on('click' , function() {
              boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
              boardObjects[clickedPos + 9].jumped = true;
              checkValidMoves();
              audioGus.play();
              turnCounter++;
              render();
              // remove event
              $grid.eq(clickedPos + 9).off('click' , function() {
                boardObjects[clickedPos + 9].jumpPlus9Over4(clickedPos);
              });
            });
          }
    }
    if ($(this).data().king) {
      // player 2 backward move pos 4,11,12,19,20,27,28
      if ($(this).data().position === 4  ||
          $(this).data().position === 11 ||
          $(this).data().position === 12 ||
          $(this).data().position === 19 ||
          $(this).data().position === 20 ||
          $(this).data().position === 27 ||
          $(this).data().position === 28) {
              // stores clicked position value
              var clickedPos = $(this).data().position;
              if (!boardObjects[clickedPos - 4].full) {
                // add event
                $grid.eq(clickedPos - 4).on('click' , function() {
                  boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                  turnCounter++;
                  render();
                  // remove event
                  $grid.eq(clickedPos - 4).off('click' , function() {
                    boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                  });
                });
              }
      }

      // player 2 backward move position 5,6,7,13,14,15,21,22,23,29,30,31
      if ($(this).data().position === 5 ||
          $(this).data().position === 6 ||
          $(this).data().position === 7 ||
          $(this).data().position === 13 ||
          $(this).data().position === 14 ||
          $(this).data().position === 15 ||
          $(this).data().position === 21 ||
          $(this).data().position === 22 ||
          $(this).data().position === 23 ||
          $(this).data().position === 29 ||
          $(this).data().position === 30 ||
          $(this).data().position === 31) {
              // stores clicked position value
              var clickedPos = $(this).data().position;
              if (!boardObjects[clickedPos - 5].full) {
                $grid.eq(clickedPos - 5).on('click' , function() {
                  boardObjects[clickedPos - 5].movePMinusFive(clickedPos);
                  turnCounter++;
                  render();
                  $grid.eq(clickedPos - 5).off('click' , function() {
                    boardObjects[clickedPos - 5].movePMinusFive(clickedPos);
                  });
                });
              }
              if (!boardObjects[clickedPos - 4].full) {
                $grid.eq(clickedPos - 4).on('click' , function() {
                  boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                  turnCounter++;
                  render();
                  $grid.eq(clickedPos - 4).off('click' , function() {
                    boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                  });
                });
              }
      }

      // player 2 backward move position 8,9,10,16,17,18,24,25,26
      if ($(this).data().position === 8 ||
          $(this).data().position === 9 ||
          $(this).data().position === 10 ||
          $(this).data().position === 16 ||
          $(this).data().position === 17 ||
          $(this).data().position === 18 ||
          $(this).data().position === 24 ||
          $(this).data().position === 25 ||
          $(this).data().position === 26) {
              var clickedPos = $(this).data().position;
              if (!boardObjects[clickedPos - 3].full) {
                // add click event
                $grid.eq(clickedPos - 3).on('click' , function(evt) {
                  boardObjects[clickedPos - 3].movePMinusThree(clickedPos);
                  turnCounter++;
                  render();
                  // remove click event
                  $grid.eq(clickedPos - 3).off('click' , function(evt) {
                    boardObjects[clickedPos - 3].movePMinusThree(clickedPos);
                  });
                });
              }
              if (!boardObjects[clickedPos - 4].full) {
                $grid.eq(clickedPos - 4).on('click' , function(evt) {
                  boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                  turnCounter++;
                  render();
                  // remove click event
                  $grid.eq(clickedPos - 4).off('click' , function(evt) {
                    boardObjects[clickedPos - 4].movePMinusFour(clickedPos);
                  });
                });

              }
      }
      // forward backward player 2 pos 12,20,28
      if ($(this).data().position === 12 ||
          $(this).data().position === 20 ||
          $(this).data().position === 28) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 7].full
                && boardObjects[clickedPos - 4].player === 1) {
              // add event
              $grid.eq(clickedPos - 7).on('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
                boardObjects[clickedPos - 7].jumped = true;
                // if no valid moves after jump increment turn counter
                checkValidMoves();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 7).off('click' , function() {
                  boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
                });
              });
            }
      }

      // backward jumps player 2 pos 8,16,24
      if ($(this).data().position === 8  ||
          $(this).data().position === 16 ||
          $(this).data().position === 24) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 7].full
                && boardObjects[clickedPos - 3].player === 1) {
              // add event
              $grid.eq(clickedPos - 7).on('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
                boardObjects[clickedPos - 7].jumped = true;
                checkValidMoves();
                audioGus.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 7).off('click' , function() {
                  boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
                });
              });
            }
      }

      // backward jumps player 2 pos 13,14,21,22,29,30
      if ($(this).data().position === 13 ||
          $(this).data().position === 14 ||
          $(this).data().position === 21 ||
          $(this).data().position === 22 ||
          $(this).data().position === 29 ||
          $(this).data().position === 30) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 7].full
                && boardObjects[clickedPos - 4].player === 1) {
              // add event
              $grid.eq(clickedPos - 7).on('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
                boardObjects[clickedPos - 7].jumped = true;
                checkValidMoves();
                audioGus.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 7).off('click' , function() {
                  boardObjects[clickedPos - 7].jumpMinus7Over4(clickedPos);
                });
              });
            }

            if (!boardObjects[clickedPos - 9].full
                && boardObjects[clickedPos - 5].player === 1) {
              // add event
              $grid.eq(clickedPos - 9).on('click' , function() {
                boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
                boardObjects[clickedPos - 9].jumped = true;
                checkValidMoves();
                audioGus.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 9).off('click' , function() {
                  boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
                });
              });
            }
      }

      // backward jumps player 2 pos 9,10,17,18,25,26
      if ($(this).data().position === 9  ||
          $(this).data().position === 10 ||
          $(this).data().position === 17 ||
          $(this).data().position === 18 ||
          $(this).data().position === 25 ||
          $(this).data().position === 26) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 7].full
                && boardObjects[clickedPos - 3].player === 1) {
              // add event
              $grid.eq(clickedPos - 7).on('click' , function() {
                boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
                boardObjects[clickedPos - 7].jumped = true;
                checkValidMoves();
                audioGus.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 7).off('click' , function() {
                  boardObjects[clickedPos - 7].jumpMinus7Over3(clickedPos);
                });
              });
            }

            if (!boardObjects[clickedPos - 9].full
                && boardObjects[clickedPos - 4].player === 2) {
              // add event
              $grid.eq(clickedPos - 9).on('click', function() {
                boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
                boardObjects[clickedPos - 9].jumped = true;
                checkValidMoves();
                audioGus.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 9).off('click' , function() {
                  boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
                });
              });
            }
      }

      // backward jumps player 2 pos 15,23,31
      if ($(this).data().position === 15 ||
          $(this).data().position === 23 ||
          $(this).data().position === 31) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 9].full
                && boardObjects[clickedPos - 5].player === 1) {
              // add event
              $grid.eq(clickedPos - 9).on('click' , function() {
                boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
                boardObjects[clickedPos - 9].jumped = true;
                checkValidMoves();
                audioGus.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 9).off('click' , function() {
                  boardObjects[clickedPos - 9].jumpMinus9Over5(clickedPos);
                });
              });
            }
      }

      // backward jumps player 2 pos 11,19,27
      if ($(this).data().position === 11 ||
          $(this).data().position === 19 ||
          $(this).data().position === 27) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 9].full
                && boardObjects[clickedPos - 4].player === 1) {
              // add event
              $grid.eq(clickedPos - 9).on('click' , function() {
                boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
                boardObjects[clickedPos - 9].jumped = true;
                checkValidMoves();
                audioGus.play();
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 9).off('click' , function() {
                  boardObjects[clickedPos - 9].jumpMinus9Over4(clickedPos);
                });
              });
            }
      }
    }
  }
}

// attach event listeners
function attachHoverEvent() {
  boardObjects.forEach(function(obj, i) {
    if (obj.validMove) {
      $grid.eq(i).hover(
        function() {
          $(this).css({"background-color": "yellow", "cursor": "pointer"});
        }, function() {
          $(this).css({"background-color": "gray", "cursor": "auto"});
        }
      );
    } else {
      $grid.eq(i).off(); // if no valid move, remove the event
    }
  });
}


function removeEvents() {
  $grid.off('click');
}

// makes object clicked
$board.on('click', '.grid2', function(event) {
  for (i = 0; i < boardObjects.length; i++) {
    boardObjects[i].clicked = false;
  }
  boardObjects[parseInt(this.id)].clicked = true;
});

$board.on('click', '.grid2', movePiece);


// assign jquery pointer to reset button to variable
// attach event listener to reset game button with resetGame function
$resetBtn = $('#resetBtn');
$resetBtn.on('click', resetGame);

// for debugging ease get rid of later
createPieces();
render();

