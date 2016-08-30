
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
    // make object empty piece
  makeEmpty(idx) {
    boardObjects[idx].player = null;
    boardObjects[idx].full = false;
    boardObjects[idx].position = idx;
    boardObjects[idx].jumped = false;
    boardObjects[idx].validMove = false;
    boardObjects[idx].clicked = false;
  };

    // make object player 1
  makeP1(idx) {
      boardObjects[idx].player = 1;
      boardObjects[idx].full = true;
      boardObjects[idx].position = idx;
      boardObjects[idx].jumped = false;
      boardObjects[idx].validMove = false;
      boardObjects[idx].clicked = false;
  }

    // make object player 2
  makeP2(idx) {
      boardObjects[idx].player = 2;
      boardObjects[idx].full = true;
      boardObjects[idx].position = idx;
      boardObjects[idx].jumped = false;
      boardObjects[idx].validMove = false;
      boardObjects[idx].clicked = false;
  }

  makeClicked(idx) {
    boardObjects[idx].clicked = true;
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
var turnCounter = 0;
var $clickedObjData; // stores clicked obj data
var playerMoved = false; // stores whether played made move this turn (for jump check)

// playable html divs to jQuery
var $grid = $('.grid2');
var $board = $('.board');

// Iterate through board array and append correct text or image to correct grid
// also attaches object data to corresponding position
function render() {
  checkValidMoves();
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
  return boardObjects;
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
  createPieces();
  render();
}

// check for winner
function checkWin() {

}

// checks valid moves based on player turn
function checkValidMoves() {
  if (turnCounter%2 === 0) {
    checkValidMovesP1();
  } else {
    checkValidMovesP2();
  }
  if (playerMoved) {
  checkJumped();
  }
}

// need to fix logic if no move after
function checkJumped() {
  boardObjects.forEach(function(obj, i) {
    // reset valid moves
    obj.validMove = false;
    if (obj.jumped) {
      if (turnCounter%2 === 0) {
        checkValidMovesP1();
      } else {
        checkValidMovesP2();
      }
    }
  });
}
// check for player 1 valid moves
// loops through all board objects and checks for conditions
function checkValidMovesP1() {
  boardObjects.forEach(function(obj, i) {
    // reset valid moves
    obj.validMove = false;
    if (obj.jumped) {
      obj.validMove = true;
      return true;
    }
    // checks for player 1 turn
    else if (turnCounter%2  === 0) {
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
          console.log(obj.jumped);
    if (obj.jumped) {

      obj.validMove = true;
      return true;
    }
    // checks for player 2 turn
    else if (turnCounter%2  === 1) {
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
                boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos - 4).off('click' , function() {
                  boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
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
          console.log($(this).data().position);
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 5].full) {
              $grid.eq(clickedPos - 5).on('click' , function() {
                boardObjects[clickedPos - 5].makeP1(clickedPos - 5);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos - 5).off('click' , function() {
                  boardObjects[clickedPos - 5].makeP1(clickedPos - 5);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos - 4].full) {
              $grid.eq(clickedPos - 4).on('click' , function() {
                boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos - 4).off('click' , function() {
                  boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
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
                boardObjects[clickedPos - 3].makeP1(clickedPos - 3);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos - 3).off('click' , function(evt) {
                  boardObjects[clickedPos - 3].makeP1(clickedPos - 3);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos - 4].full) {
              $grid.eq(clickedPos - 4).on('click' , function(evt) {
                boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos - 4).off('click' , function(evt) {
                  boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
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
              boardObjects[clickedPos - 7].makeP1(clickedPos - 7);
              boardObjects[clickedPos - 7].jumped = true;
              debugger;
              boardObjects[clickedPos].makeEmpty(clickedPos);
              boardObjects[clickedPos - 4].makeEmpty(clickedPos + 4);
              render();
              // remove event
              $grid.eq(clickedPos - 7).off('click' , function() {
                boardObjects[clickedPos - 7].makeP1(clickedPos - 7);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                boardObjects[clickedPos - 4].makeEmpty(clickedPos - 4);
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
                boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                // remove event
                $grid.eq(clickedPos + 4).off('click' , function() {
                  boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
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
          console.log($(this).data().position);
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos + 5].full) {
              $grid.eq(clickedPos + 5).on('click' , function() {
                boardObjects[clickedPos + 5].makeP2(clickedPos + 5);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos + 5).off('click' , function() {
                  boardObjects[clickedPos + 5].makeP2(clickedPos + 5);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos + 4].full) {
              $grid.eq(clickedPos + 4).on('click' , function() {
                boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                $grid.eq(clickedPos + 4).off('click' , function() {
                  boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
                });
              });
            }
    }

    // player 2 forward move position 5,6,7,13,14,15,21,22,23
    if ($(this).data().position === 5 ||
        $(this).data().position === 6 ||
        $(this).data().position === 17 ||
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
                boardObjects[clickedPos + 3].makeP2(clickedPos + 3);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos + 3).off('click' , function(evt) {
                  boardObjects[clickedPos + 3].makeP2(clickedPos + 3);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
                });
              });
            }
            if (!boardObjects[clickedPos + 4].full) {
              $grid.eq(clickedPos + 4).on('click' , function(evt) {
                boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                turnCounter++;
                render();
                // remove click event
                $grid.eq(clickedPos + 4).off('click' , function(evt) {
                  boardObjects[clickedPos + 4].makeP2(clickedPos + 4);
                  boardObjects[clickedPos].makeEmpty(clickedPos);
                });
              });

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
          $(this).css({"background-color": "red", "cursor": "auto"});
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
console.log(boardObjects);

