
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

    // make object empty piece
    this.makeEmpty = function(idx) {
      boardObjects[idx].player = null;
      boardObjects[idx].full = false;
      boardObjects[idx].moveto = [];
      boardObjects[idx].position = idx;
      boardObjects[idx].jumped = false;
      boardObjects[idx].validMove = false;
    };

    // make object player 1
    this.makeP1 = function(idx) {
      boardObjects[idx].player = 1;
      boardObjects[idx].full = true;
      boardObjects[idx].moveto = [];
      boardObjects[idx].position = idx;
      boardObjects[idx].jumped = false;
      boardObjects[idx].validMove = false;
    }

    // make object player 2
    this.makeP2 = function(idx) {
      boardObjects[idx].player = 2;
      boardObjects[idx].full = true;
      boardObjects[idx].moveto = [];
      boardObjects[idx].position = idx;
      boardObjects[idx].jumped = false;
      boardObjects[idx].validMove = false;
    }
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

  for (i = 1; i < 30; i++) {
    var newPiece = new CheckerPiece(null, i, false, false);
    boardObjects.push(newPiece);
  }

  // Create player 1 objects
  for (i = 30; i < 32; i++) {
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
        for (var i = 15; i < 31; i = i + 8) {
          if (obj['position'] === i) {
            if (!boardObjects[i-5]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-5);
            }
            if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
              obj.validMove = true;
              obj.moveTo.push(i-9);
            }
            if (boardObjects[i-4]['full']) {
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
    // for player 1 position 20
    if ($clickedObjData.position === 20) {
      $grid.eq(16).on('click', function(){
        boardObjects[16].makeP1(16);
        boardObjects[20].makeEmpty(20);
        turnCounter++
        render();
      });
      $grid.eq(13).on('click', function(){
        boardObjects[13].makeP1(13);
        boardObjects[20].makeEmpty(20);
        render();
      });
    }

    // player 1 position 21
    if ($clickedObjData.position === 21) {
      $grid.eq(16).on('click', function(){
        boardObjects[16].makeP1(16);
        boardObjects[21].makeEmpty(21);
        turnCounter++;
        render();
      });
      $grid.eq(12).on('click', function(){
        boardObjects[12].makeP1(12);
        boardObjects[21].makeEmpty(21);
        render();
      });
      $grid.eq(17).on('click', function(){
        boardObjects[17].makeP1(17);
        boardObjects[21].makeEmpty(21);
        render();
      });
      $grid.eq(14).on('click', function(){
        boardObjects[14].makeP1(14);
        boardObjects[21].makeEmpty(21);
        render();
      });
    }

    // player 1 position 22
    if ($clickedObjData.position === 22) {
      $grid.eq(17).on('click', function(){
        boardObjects[17].makeP1(17);
        boardObjects[22].makeEmpty(22);
        render();
      });
      $grid.eq(13).on('click', function(){
        boardObjects[13].makeP1(13);
        boardObjects[22].makeEmpty(22);
        render();
      });
      $grid.eq(18).on('click', function(){
        boardObjects[18].makeP1(18);
        boardObjects[22].makeEmpty(22);
        render();
      });
      $grid.eq(14).on('click', function(){
        boardObjects[15].makeP1(15);
        boardObjects[22].makeEmpty(22);
        render();
      });
    }
  }
}

// when you click an element, it returns the objData as a jquery object
// stores into $clickedObjData
function clickForData() {
  $grid.on('click', function() {
  $clickedObjData = $(this).data();
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
$grid.on('click', movePiece);
console.log(boardObjects);

