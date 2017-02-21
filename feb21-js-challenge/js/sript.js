var input = document.querySelector('input[type="text"]');
var inputBtn = document.querySelector('input[type="submit"]');

inputBtn.addEventListener('click', function(e){
  e.preventDefault();
  var userName = input.value;
  console.log(userName);
});



// var one = document.getElementById('one');
// var div = document.getElementsByTagName('div');
// var classes = document.getElementsByClassName('list-two');
// var lis = document.querySelectorAll('li:nth-of-type(odd)');
// var ul = document.querySelector('ul');
//
// var c;
// for (c = 0; c < lis.length; c++) {
//   lis[c].style.backgroundColor = "lightblue";
// }
//
// console.log(ul);
// // console.log(div);
// // div.addEventListener('mouseover', function(){
// //   alert('hovering the div0');
// // });
// for(var i = 0; i < div.length; i++){
//   div[i].addEventListener('mouseover', function(){
//     alert('iwehrho');
//   });
// }
// for(var i = 0; i < classes.length; i++){
//   classes[i].addEventListener('click', function(){
//     alert('aewsrglh');
//   });
// }
// one.addEventListener('click', function(){
//   var greeting = prompt('Hey');
//   if(greeting.trim() === ''){
//     alert('blank');
//   }else if(greeting.length >= 5){
//     alert('you are a failure in life');
//   }else{
//     alert('pass');
//   }
//
//   // user.legth >= 5 ? alert(user) : alert('too short');
// })
