// function checkValidMoves() {
//   // checkJumped();
//   // if (checkJumped){
//   //   // do nothing
//   // } else
//   if (turnCounter%2 === 0) {
//     checkValidMovesP1();
//   } else if (!turnCounter%2 === 0) {
//     checkValidMovesP2();
//   }
// }

// function checkValidMovesKing() {
//   boardObjects.forEach(function(obj, i) {
//     if (turnCounter%2  === 0) {
//       if (obj['player'] === 1 && obj.king) {
//         if (obj['position'] === 27) {
//           if (!boardObjects[31]['full']) {
//             obj.validMove = true;
//           }
//         }
//         // 24,25,26
//         for (var i = 24; i < 27; i++) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // pos 3,11,19
//         for (var i = 3; i < 20; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']){
//               obj.validMove = true;
//             }
//             if(boardObjects[i+4]['player'] === 2 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 2,10,18
//         for (var i = 2; i < 19; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 1,9,17
//         for (var i = 1; i < 18; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 0,8,16
//         for (var i = 0; i < 17; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 7,15,23
//         for (var i = 7; i < 24; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+3]['full']){
//               obj.validMove = true;
//             }
//             if (boardObjects[i+3]['player'] === 2 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 6,14,22
//         for (var i = 6; i < 23; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+3]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+3]['player'] === 2 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 5,13,21
//         for (var i = 5; i < 22; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+3]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+3]['player'] === 2 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 4,12,20
//         for (var i = 4; i < 21; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 2 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//       }


//     } else if (obj['player'] === 2 && obj.king) {
//         if (obj['position'] === 4) {
//           if (!boardObjects[0]['full']) {
//             obj.validMove = true;
//           }
//         }
//         // 5,6,7
//         for (var i = 5; i < 8; i++) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-5]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // pos 12,20,28
//         for (var i = 12; i < 29; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-4]['full']){
//               obj.validMove = true;
//             }
//             if(boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 13,21,29
//         for (var i = 13; i < 30; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 14,22,30
//         for (var i = 14; i < 31; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 15,23,31
//         for (var i = 15; i < 32; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 8,16,24
//         for (var i = 8; i < 25; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-3]['full']){
//               obj.validMove = true;
//             }
//             if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 9,17,25
//         for (var i = 9; i < 26; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i-3]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 10,18,26
//         for (var i = 10; i < 27; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i-3]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 11,19,27
//         for (var i = 11; i < 28; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i-4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//      }
//   })
// }
// // check for player 1 valid moves
// // loops through all board objects and checks for conditions
// function checkValidMovesP1() {
//   boardObjects.forEach(function(obj, i) {
//     // reset valid moves
//     obj.validMove = false;
//     // checks for player 1 turn
//       if (turnCounter%2  === 0) {

//         // stil need to check jump and check king
//         // checks all player 1 pieces non jump or king
//         if (obj['player'] === 1) {
//           if (obj['position'] === 4) {
//             if (!boardObjects[0]['full']) {
//               obj.validMove = true;
//             }
//           }
//           // 5,6,7
//           for (var i = 5; i < 8; i++) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-5]['full']) {
//                 obj.validMove = true;
//               }
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }
//           // pos 12,20,28
//           for (var i = 12; i < 29; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-4]['full']){
//                 obj.validMove = true;
//               }
//               if(boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }
//           // 13,21,29
//           for (var i = 13; i < 30; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-5]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
//                 obj.validMove = true;
//               }
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }
//           // 14,22,30
//           for (var i = 14; i < 31; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-5]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
//                 obj.validMove = true;
//               }
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-7]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }
//           // 15,23,31
//           for (var i = 15; i < 32; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-5]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-5]['player'] === 2 && !boardObjects[i-9]['full']) {
//                 obj.validMove = true;
//               }
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }

//           // 8,16,24
//           for (var i = 8; i < 25; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-3]['full']){
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
//                 obj.validMove = true;
//               }
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }

//           // 9,17,25
//           for (var i = 9; i < 26; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
//                 obj.validMove = true;
//               }
//               if (!boardObjects[i-3]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }

//           // 10,18,26
//           for (var i = 10; i < 27; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
//                 obj.validMove = true;
//               }
//               if (!boardObjects[i-3]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-3]['player'] === 2 && !boardObjects[i-7]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }

//           // 11,19,27
//           for (var i = 11; i < 28; i = i + 8) {
//             if (obj['position'] === i) {
//               if (!boardObjects[i-4]['full']) {
//                 obj.validMove = true;
//               }
//               if (boardObjects[i-4]['player'] === 2 && !boardObjects[i-9]['full']) {
//                 obj.validMove = true;
//               }
//             }
//           }
//         }
//     }
//   });
// }



// // check player 2 valid moves
// function checkValidMovesP2() {
//   boardObjects.forEach(function(obj, i) {
//     // reset valid moves
//     obj.validMove = false;
//     // checks for player 2 turn
//     if (turnCounter%2  === 1) {
//       // stil need to check jump and check king
//       // checks all player 2 pieces non jump or king
//       if (obj['player'] === 2) {
//         if (obj['position'] === 27) {
//           if (!boardObjects[31]['full']) {
//             obj.validMove = true;
//           }
//         }
//         // 24,25,26
//         for (var i = 24; i < 27; i++) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // pos 3,11,19
//         for (var i = 3; i < 20; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']){
//               obj.validMove = true;
//             }
//             if(boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 2,10,18
//         for (var i = 2; i < 19; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 1,9,17
//         for (var i = 1; i < 18; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+5]['player'] === 1 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//         // 0,8,16
//         for (var i = 0; i < 17; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+5]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+5]['player'] === 2 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 7,15,23
//         for (var i = 7; i < 24; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+3]['full']){
//               obj.validMove = true;
//             }
//             if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 6,14,22
//         for (var i = 6; i < 23; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+3]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 5,13,21
//         for (var i = 5; i < 22; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//             if (!boardObjects[i+3]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+3]['player'] === 1 && !boardObjects[i+7]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }

//         // 4,12,20
//         for (var i = 4; i < 21; i = i + 8) {
//           if (obj['position'] === i) {
//             if (!boardObjects[i+4]['full']) {
//               obj.validMove = true;
//             }
//             if (boardObjects[i+4]['player'] === 1 && !boardObjects[i+9]['full']) {
//               obj.validMove = true;
//             }
//           }
//         }
//       }
//     }
//   });
// }
