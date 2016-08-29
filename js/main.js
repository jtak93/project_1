
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
    this.moveTo = []; // stores index where object can move to
  }
    // make object empty piece
  makeEmpty(idx) {
    boardObjects[idx].player = null;
    boardObjects[idx].full = false;
    boardObjects[idx].moveTo = [];
    boardObjects[idx].position = idx;
    boardObjects[idx].jumped = false;
    boardObjects[idx].validMove = false;
  };

    // make object player 1
  makeP1(idx) {
      boardObjects[idx].player = 1;
      boardObjects[idx].full = true;
      boardObjects[idx].moveTo = [];
      boardObjects[idx].position = idx;
      boardObjects[idx].jumped = false;
      boardObjects[idx].validMove = false;
  }

    // make object player 2
  makeP2(idx) {
      boardObjects[idx].player = 2;
      boardObjects[idx].full = true;
      boardObjects[idx].moveTo = [];
      boardObjects[idx].position = idx;
      boardObjects[idx].jumped = false;
      boardObjects[idx].validMove = false;
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
  clickForData();
  return boardObjects;
}

// function createPieces() {
//   // Create player 2 objects
//   for (i = 0; i < 12; i++) {
//     var newPiece = new CheckerPiece(2, i, false, true);
//     boardObjects.push(newPiece);
//   }

//   // Create blank objects to fill empty spots

//   for (i = 12; i < 20; i++) {
//     var newPiece = new CheckerPiece(null, i, false, false);
//     boardObjects.push(newPiece);
//   }

//   // Create player 1 objects
//   for (i = 20; i < 32; i++) {
//     var newPiece = new CheckerPiece(1, i, false, true);
//     boardObjects.push(newPiece);
//   }
// }

// MOSTLY EMPTY OBJECTS FOR DEBUGGING
function createPieces() {
  // Create player 2 objects
  for (i = 0; i < 1; i++) {
    var newPiece = new CheckerPiece(2, i, false, true);
    boardObjects.push(newPiece);
  }

  // Create blank objects to fill empty spots

  for (i = 1; i < 28; i++) {
    var newPiece = new CheckerPiece(null, i, false, false);
    boardObjects.push(newPiece);
  }

  // Create player 1 objects
  for (i = 28; i < 32; i++) {
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
    obj.moveTo = [];
    // checks for player 1 turn
    if (turnCounter%2  === 0) {
      // stil need to check jump and check king
      // checks all player 1 pieces non jump or king
      if (obj['player'] === 1) {
        if (obj['position'] === 4) {
          if (!boardObjects[0]['full']) {
            obj.validMove = true;
            obj.moveTo.push(0);
          }
        }
        // 5,6,7
        for (var i = 5; i < 8; i++) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = full;
              obj.moveTo.push(i-5);
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
          }
        }
        // pos 12,20,28
        for (var i = 12; i < 29; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']){
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
            if(boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-7);
            }
          }
        }
        // 13,21,29
        for (var i = 13; i < 30; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-5);
            }
            if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-9);
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
            if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-7);
            }
          }
        }
        // 14,22,30
        for (var i = 14; i < 31; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-5);
            }
            if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-9);
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
            if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-7);
            }
          }
        }
        // 15,23,31
        for (var i = 15; i < 32; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-5);
            }
            if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-9);
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
          }
        }

        // 8,16,24
        for (var i = 8; i < 25; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-3]['full']){
              obj.validMove = true;
              obj.moveTo.push(i-3);
            }
            if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-7);
            }
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
          }
        }

        // 9,17,25
        for (var i = 9; i < 26; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
            if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-9);
            }
            if (!boardObjects[i-3]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-3);
            }
            if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-7);
            }
          }
        }

        // 10,18,26
        for (var i = 10; i < 27; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
            if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-9);
            }
            if (!boardObjects[i-3]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-3);
            }
            if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-7);
            }
          }
        }

        // 11,19,27
        for (var i = 11; i < 28; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-4);
            }
            if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-9);
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
    obj.moveTo = [];
    // checks for player 2 turn
    if (turnCounter%2  === 1) {
      // stil need to check jump and check king
      // checks all player 2 pieces non jump or king
      if (obj['player'] === 2) {
        if (obj['position'] === 27) {
          if (!boardObjects[31]['full']) {
            obj.validMove = true;
            obj.moveTo.push(31);
          }
        }
        // 24,25,26
        for (var i = 24; i < 27; i++) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = full;
              obj.moveTo.push(i+5);
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
          }
        }
        // pos 3,11,19
        for (var i = 3; i < 20; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']){
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
            if(boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+7);
            }
          }
        }
        // 2,10,18
        for (var i = 2; i < 19; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+5);
            }
            if (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+9);
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+7);
            }
          }
        }
        // 1,9,17
        for (var i = 1; i < 18; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+5);
            }
            if (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+9);
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+7);
            }
          }
        }
        // 0,8,16
        for (var i = 0; i < 17; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+5]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+5);
            }
            if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+9);
            }
            if (boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
          }
        }

        // 7,15,23
        for (var i = 7; i < 24; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+3]['full']){
              obj.validMove = true;
              obj.moveTo.push(i+3);
            }
            if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+7);
            }
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
          }
        }

        // 6,14,22
        for (var i = 6; i < 23; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+9);
            }
            if (!boardObjects[i+3]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+3);
            }
            if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+7);
            }
          }
        }

        // 5,13,21
        for (var i = 5; i < 22; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+9);
            }
            if (!boardObjects[i+3]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+3);
            }
            if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+7);
            }
          }
        }

        // 4,12,20
        for (var i = 4; i < 21; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i+4]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+4);
            }
            if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i+9);
            }
          }
        }
      }
    }
  });
}
// move function retrieves clicked element data then changes object data based on move
function movePiece() {
  // check position
  if ($clickedObjData.player === 1 && $clickedObjData.validMove) {
    //check for move spots
    // player 1 forward move pos 4,12,20,28,11,19,27
    if ($clickedObjData.position === 4  ||
        $clickedObjData.position === 12 ||
        $clickedObjData.position === 20 ||
        $clickedObjData.position === 28 ||
        $clickedObjData.position === 11 ||
        $clickedObjData.position === 19 ||
        $clickedObjData.position === 27 ||
        $clickedObjData.position === 28) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 4].full) {
              $grid.eq(clickedPos - 4).on('click' , function() {
                boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                render();
              });
            }
    }

    // player 1 forward move position 5,6,7,13,14,15,21,22,23,29,30,31
    if ($clickedObjData.position === 5 ||
        $clickedObjData.position === 6 ||
        $clickedObjData.position === 7 ||
        $clickedObjData.position === 13 ||
        $clickedObjData.position === 14 ||
        $clickedObjData.position === 15 ||
        $clickedObjData.position === 21 ||
        $clickedObjData.position === 22 ||
        $clickedObjData.position === 23 ||
        $clickedObjData.position === 29 ||
        $clickedObjData.position === 30 ||
        $clickedObjData.position === 31) {
            // stores clicked position value
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 5].full) {
              $grid.eq(clickedPos - 5).on('click' , function() {
                boardObjects[clickedPos - 5].makeP1(clickedPos - 5);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                render();
              });
            }
            if (!boardObjects[clickedPos - 4].full) {
              $grid.eq(clickedPos - 4).on('click' , function() {
                boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                render();
              });
            }
    }

    // player 1 forward move position 8,9,10,16,17,18,24,25,26
    if ($clickedObjData.position === 8 ||
        $clickedObjData.position === 9 ||
        $clickedObjData.position === 10 ||
        $clickedObjData.position === 16 ||
        $clickedObjData.position === 17 ||
        $clickedObjData.position === 18 ||
        $clickedObjData.position === 24 ||
        $clickedObjData.position === 25 ||
        $clickedObjData.position === 26) {
            var clickedPos = $(this).data().position;
            if (!boardObjects[clickedPos - 3].full) {
              $grid.eq(clickedPos - 3).on('click' , function() {
                boardObjects[clickedPos - 3].makeP1(clickedPos - 3);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                render();
              });
            }
            if (!boardObjects[clickedPos - 4].full) {
              $grid.eq(clickedPos - 4).on('click' , function() {
                boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
                boardObjects[clickedPos].makeEmpty(clickedPos);
                render();
              });
            }
    }


  //   // player 1 position 20
  //   if ($clickedObjData.position === 20) {
  //     $grid.eq(16).on('click', function(){
  //       if (!boardObjects[16].full) {
  //         boardObjects[16].makeP1(16);
  //         boardObjects[20].makeEmpty(20);
  //         render();
  //       }
  //     });
  //     $grid.eq(13).on('click', function(){
  //       if (!boardObjects[13].full && boardObjects[16].player === 2) {
  //         boardObjects[13].makeP1(13);
  //         boardObjects[20].makeEmpty(20);
  //         boardObjects[16].makeEmpty(16);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 21
  //   if ($clickedObjData.position === 21) {
  //     $grid.eq(16).on('click', function(){
  //       if (!boardObjects[16].full) {
  //         boardObjects[16].makeP1(16);
  //         boardObjects[21].makeEmpty(21);
  //         render();
  //       }
  //     });
  //     $grid.eq(17).on('click', function(){
  //       if (!boardObjects[17].full) {
  //         boardObjects[17].makeP1(17);
  //         boardObjects[21].makeEmpty(21);
  //         render();
  //       }
  //     });
  //     $grid.eq(12).on('click', function(){
  //       if (!boardObjects[12].full && boardObjects[16].player === 2) {
  //         boardObjects[12].makeP1(12);
  //         boardObjects[21].makeEmpty(21);
  //         boardObjects[16].makeEmpty(16);
  //         render();
  //       }
  //     });
  //     $grid.eq(14).on('click', function(){
  //       if (!boardObjects[14].full && boardObjects[17].player === 2) {
  //         boardObjects[14].makeP1(14);
  //         boardObjects[21].makeEmpty(21);
  //         boardObjects[17].makeEmpty(17);
  //         render();
  //       }
  //     });
  //   }


  //   // player 1 position 22
  //   if ($clickedObjData.position === 22) {
  //     $grid.eq(17).on('click', function(){
  //       if (!boardObjects[17].full) {
  //         boardObjects[17].makeP1(17);
  //         boardObjects[22].makeEmpty(22);
  //         render();
  //       }
  //     });
  //     $grid.eq(18).on('click', function(){
  //       if (!boardObjects[18].full) {
  //         boardObjects[18].makeP1(18);
  //         boardObjects[22].makeEmpty(22);
  //         render();
  //       }
  //     });
  //     $grid.eq(13).on('click', function(){
  //       if (!boardObjects[13].full && boardObjects[17].player === 2) {
  //         boardObjects[13].makeP1(13);
  //         boardObjects[22].makeEmpty(22);
  //         boardObjects[17].makeEmpty(17);
  //         render();
  //       }
  //     });
  //     $grid.eq(15).on('click', function(){
  //       if (!boardObjects[15].full && boardObjects[18].player === 2) {
  //         boardObjects[15].makeP1(15);
  //         boardObjects[22].makeEmpty(22);
  //         boardObjects[18].makeEmpty(18);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 23
  //   if ($clickedObjData.position === 23) {
  //     $grid.eq(19).on('click', function(){
  //       if (!boardObjects[19].full) {
  //         boardObjects[19].makeP1(19);
  //         boardObjects[23].makeEmpty(23);
  //         render();
  //       }
  //     });
  //     $grid.eq(18).on('click', function(){
  //       if (!boardObjects[18].full) {
  //         boardObjects[18].makeP1(18);
  //         boardObjects[23].makeEmpty(23);
  //         render();
  //       }
  //     });
  //     $grid.eq(14).on('click', function(){
  //       if (!boardObjects[14].full && boardObjects[18].player === 2) {
  //         boardObjects[14].makeP1(14);
  //         boardObjects[23].makeEmpty(23);
  //         // make jumped piece empty
  //         boardObjects[18].makeEmpty(18);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 24
  //   if ($clickedObjData.position === 24) {
  //     $grid.eq(20).on('click', function(){
  //       if (!boardObjects[20].full) {
  //         boardObjects[20].makeP1(20);
  //         boardObjects[24].makeEmpty(24);
  //         render();
  //       }
  //     });
  //     $grid.eq(21).on('click', function(){
  //       if (!boardObjects[21].full) {
  //         boardObjects[21].makeP1(21);
  //         boardObjects[24].makeEmpty(24);
  //         render();
  //       }
  //     });
  //     $grid.eq(17).on('click', function(){
  //       if (!boardObjects[17].full && boardObjects[21].player === 2) {
  //         boardObjects[17].makeP1(17);
  //         boardObjects[24].makeEmpty(24);
  //         // make jumped piece empty
  //         boardObjects[21].makeEmpty(21);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 25
  //   if ($clickedObjData.position === 25) {
  //     $grid.eq(21).on('click', function(){
  //       if (!boardObjects[21].full) {
  //         boardObjects[21].makeP1(21);
  //         boardObjects[25].makeEmpty(25);
  //         render();
  //       }
  //     });
  //     $grid.eq(22).on('click', function(){
  //       if (!boardObjects[22].full) {
  //         boardObjects[22].makeP1(22);
  //         boardObjects[25].makeEmpty(25);
  //         render();
  //       }
  //     });
  //     $grid.eq(16).on('click', function(){
  //       if (!boardObjects[16].full && boardObjects[21].player === 2) {
  //         boardObjects[16].makeP1(16);
  //         boardObjects[25].makeEmpty(25);
  //         boardObjects[21].makeEmpty(21);
  //         render();
  //       }
  //     });
  //     $grid.eq(18).on('click', function(){
  //       if (!boardObjects[18].full && boardObjects[22].player === 2) {
  //         boardObjects[18].makeP1(18);
  //         boardObjects[25].makeEmpty(25);
  //         boardObjects[22].makeEmpty(22);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 26
  //   if ($clickedObjData.position === 26) {
  //     $grid.eq(23).on('click', function(){
  //       if (!boardObjects[23].full) {
  //         boardObjects[23].makeP1(23);
  //         boardObjects[26].makeEmpty(26);
  //         render();
  //       }
  //     });
  //     $grid.eq(22).on('click', function(){
  //       if (!boardObjects[22].full) {
  //         boardObjects[22].makeP1(22);
  //         boardObjects[26].makeEmpty(26);
  //         render();
  //       }
  //     });
  //     $grid.eq(19).on('click', function(){
  //       if (!boardObjects[19].full && boardObjects[23].player === 2) {
  //         boardObjects[19].makeP1(19);
  //         boardObjects[26].makeEmpty(26);
  //         boardObjects[23].makeEmpty(23);
  //         render();
  //       }
  //     });
  //     $grid.eq(17).on('click', function(){
  //       if (!boardObjects[17].full && boardObjects[22].player === 2) {
  //         boardObjects[17].makeP1(17);
  //         boardObjects[26].makeEmpty(26);
  //         boardObjects[22].makeEmpty(22);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 27
  //   if ($clickedObjData.position === 27) {
  //     $grid.eq(23).on('click', function(){
  //       if (!boardObjects[23].full) {
  //         boardObjects[23].makeP1(23);
  //         boardObjects[27].makeEmpty(27);
  //         render();
  //       }
  //     });
  //     $grid.eq(18).on('click', function(){
  //       if (!boardObjects[18].full && boardObjects[23].player === 2) {
  //         boardObjects[18].makeP1(18);
  //         boardObjects[27].makeEmpty(27);
  //         boardObjects[23].makeEmpty(23);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 28
  //   if ($clickedObjData.position === 28) {
  //     $grid.eq(24).on('click', function(){
  //       if (!boardObjects[24].full) {
  //         boardObjects[24].makeP1(24);
  //         boardObjects[28].makeEmpty(28);
  //         render();
  //       }
  //     });
  //     $grid.eq(21).on('click', function(){
  //       if (!boardObjects[21].full && boardObjects[24].player === 2) {
  //         boardObjects[21].makeP1(21);
  //         boardObjects[28].makeEmpty(28);
  //         boardObjects[24].makeEmpty(24);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 29
  //   if ($clickedObjData.position === 29) {
  //     $grid.eq(25).on('click', function(){
  //       if (!boardObjects[25].full) {
  //         boardObjects[25].makeP1(25);
  //         boardObjects[29].makeEmpty(29);
  //         render();
  //       }
  //     });
  //     $grid.eq(24).on('click', function(){
  //       if (!boardObjects[24].full) {
  //         boardObjects[24].makeP1(24);
  //         boardObjects[29].makeEmpty(29);
  //         render();
  //       }
  //     });
  //     $grid.eq(20).on('click', function(){
  //       if (!boardObjects[20].full && boardObjects[24].player === 2) {
  //         boardObjects[20].makeP1(20);
  //         boardObjects[29].makeEmpty(29);
  //         boardObjects[24].makeEmpty(24);
  //         render();
  //       }
  //     });
  //     $grid.eq(22).on('click', function(){
  //       if (!boardObjects[22].full && boardObjects[25].player === 2) {
  //         boardObjects[22].makeP1(22);
  //         boardObjects[29].makeEmpty(29);
  //         boardObjects[25].makeEmpty(25);
  //         render();
  //       }
  //     });
  //   }


  //   // player 1 position 30
  //   if ($clickedObjData.position === 30) {
  //     $grid.eq(25).on('click', function(){
  //       if (!boardObjects[25].full) {
  //         boardObjects[25].makeP1(25);
  //         boardObjects[30].makeEmpty(30);
  //         render();
  //       }
  //     });
  //     $grid.eq(26).on('click', function(){
  //       if (!boardObjects[26].full) {
  //         boardObjects[26].makeP1(26);
  //         boardObjects[30].makeEmpty(30);
  //         render();
  //       }
  //     });
  //     $grid.eq(21).on('click', function(){
  //       if (!boardObjects[21].full && boardObjects[25].player === 2) {
  //         boardObjects[21].makeP1(21);
  //         boardObjects[30].makeEmpty(30);
  //         boardObjects[25].makeEmpty(25);
  //         render();
  //       }
  //     });
  //     $grid.eq(23).on('click', function(){
  //       if (!boardObjects[23].full && boardObjects[26].player === 2) {
  //         boardObjects[23].makeP1(23);
  //         boardObjects[30].makeEmpty(30);
  //         boardObjects[26].makeEmpty(26);
  //         render();
  //       }
  //     });
  //   }

  //   // player 1 position 31
  //   if ($clickedObjData.position === 31) {
  //     $grid.eq(27).on('click', function(){
  //       if (!boardObjects[27].full) {
  //         boardObjects[27].makeP1(27);
  //         boardObjects[31].makeEmpty(31);
  //         render();
  //       }
  //     });
  //     $grid.eq(26).on('click', function(){
  //       if (!boardObjects[26].full) {
  //         boardObjects[26].makeP1(26);
  //         boardObjects[31].makeEmpty(31);
  //         render();
  //       }
  //     });
  //     $grid.eq(22).on('click', function(){
  //       if (!boardObjects[22].full && boardObjects[26].player === 2) {
  //         boardObjects[22].makeP1(22);
  //         boardObjects[31].makeEmpty(31);
  //         // make jumped piece empty
  //         boardObjects[26].makeEmpty(26);
  //         render();
  //       }
  //     });
  //   }
  }
}
// when you click an element, it returns the objData as a jquery object
// stores into $clickedObjData
function clickForData() {
  $grid.on('click', function() {
  $clickedObjData = $(this).data();
  $grid.on('click', movePiece);
  });
  return $clickedObjData;
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
console.log(boardObjects);

