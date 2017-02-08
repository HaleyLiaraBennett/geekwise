// var userCapture = prompt('What yo name?');
// var num1 = parseInt(prompt('Gimme number'));
// var num2 = parseInt(prompt('A NUMBER PLS'));
//
//function DECLARATION
// function funcDec(a, b, c){
//   alert(a + (b + c));
// }
//
// funcDec(userCapture + ' is stupid ', num1, num2);

(function(){ //IIFE - immediately inc=voked function excecutable

// var carObj = {
//   color: 'blakc like my soul',
//   model: 'AK-47',
//   make: 'Fashion Forward'
// };
//
// function myModel(a){
//   alert(a.make);
// }
//
// //  PARAMETER 'a' IS SCOPED TO FUNCTION myMODEL
//  myModel(carObj);
//
// //function excecutable
// var funcEx = function(){
//     alert(arguments[0]);
// }('otter', 8);
//
var names = ['Devid', 'Methew', 'Cartie', 'Lacey', 'Masisa'];
var sad = ['Crocodile Crisps', 'Dino Rocks', 'Berry Overboard', 'Actual Toast', 'Heart Cereal'];

names.sort();
sad.sort();

var iminhell = names.pop();
var imlessinhell = sad.shift();

console.log(imlessinhell);

// var senpai = function(){
//   alert((Math.round(Math.random() * names) + (Math.round(Math.rnadom() * sad )));
// }();

var snepai = function(){
  console.log(arguments[0] + arguments[1]);
}(iminhell , imlessinhell);

//MAke array than make variable with the math, tha call a function
// var randname = names[Math.ceil(marth.random()  * names.length)]
//
// var randsad = sad[Math.ceil(marth.random()  * names.length)]
// var spyname = function(){
//   alert(arguments[0] + ' ' + arguments[1]);
// }(randname, randsad);

})();
