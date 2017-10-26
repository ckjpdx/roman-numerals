
var conversion = function(userNum){ // 90
  var arabNums = [1,5,10,50,100,500,1000];
  var romanNums = ["I","V","X","L","C","D","M"];
  var romanArr = [];
  for (i = 0; i < arabNums.length; i++){
    var noMatch = true;
    for (j = arabNums.length; j >= 0; j--){
      arabNums.forEach(function(currNum1){
        arabNums.forEach(function(currNum2){
          if (userNum === currNum1 - currNum2) {
            noMatch = false;
          }
        });
      });
        while (noMatch && userNum >= arabNums[j]) {
          romanArr.push(romanNums[j]);
          userNum = userNum - arabNums[j];
          console.log(romanArr);
        }
      if (userNum === arabNums[i] - arabNums[j] && userNum !== 0) { // 90 === 100 - 10
        romanArr.push(romanNums[j]); // return XC
        romanArr.push(romanNums[i]);
        console.log(romanArr);
        break;
      }
    }
  }
  romanArr = romanArr.join("");
  return romanArr;
}







// var conversion = function(number){
//   var letters = ["I","V","X","L","C","D","M"];
//   var numbers = [1,5,10,50,100,500,1000];
//   var roman = [];
//   for (var i = 1; i <= number; i++) {
//     if (i = 5) {
//       roman.push(letters[i + 1]);
//     } else {
//       roman.push(letters[i]);
//     }
//   };
//
// };

// while (inputNumber >= 1000) {
//   romanNumber += 'M';
//   inputNumber = inputNumber - 1000;
// } while (inputNumber >= 900) {
//   romanNumber += 'D';
//   inputNumber = inputNumber - 500;
// } while (inputNumber >= 500) {
//   romanNumber += 'D';
//   inputNumber = inputNumber - 500;
// } while (inputNumber >= 100) {
//   romanNumber += 'C';
//   inputNumber = inputNumber - 100;
// } while (inputNumber >= 50) {
//   romanNumber += 'L';
//   inputNumber = inputNumber - 50;
// } while (inputNumber >= 10) {
//   romanNumber += 'X';
//   inputNumber = inputNumber - 10;
// } while (inputNumber >= 5) {
//   romanNumber += 'V';
//   inputNumber = inputNumber - 5;
// } while {
//   romanNumber += 'I';
//   inputNumber = inputNumber - 1;
// }


$(function(){
  $('#user-input').submit(function(event){
    event.preventDefault();
    var userInput = parseInt($('input').val());
    var romanNumber = conversion(userInput);

    $('#result').text(romanNumber)

  });
});
