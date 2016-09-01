// console.log("loaded")

//   // player 1 forward move pos 4,11,12,19,20,27,28
// function normalP1Edges(){
//   if ($(this).data().position === 4  ||
//       $(this).data().position === 11 ||
//       $(this).data().position === 12 ||
//       $(this).data().position === 19 ||
//       $(this).data().position === 20 ||
//       $(this).data().position === 27 ||
//       $(this).data().position === 28) {
//           // stores clicked position value
//           var clickedPos = $(this).data().position;
//           if (!boardObjects[clickedPos - 4].full) {
//             // add event
//             $grid.eq(clickedPos - 4).on('click' , function() {
//               boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
//               boardObjects[clickedPos].makeEmpty(clickedPos);
//               render();
//               // remove event
//               $grid.eq(clickedPos - 4).off('click' , function() {
//                 boardObjects[clickedPos - 4].makeP1(clickedPos - 4);
//                 boardObjects[clickedPos].makeEmpty(clickedPos);
//               });
//             });
//           }
//   }
// }

// console.log(normalP1Edges());

// for(i = 4; i < 32; i++) {
//   if (!(i === 11) && !(i === 19) && !(i === 27)){}
// }

