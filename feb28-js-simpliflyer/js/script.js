// document.querySelector('button').addEventListener('click', function(){
//   // console.log(add(5,6,2));
//   // addEx(3, 2);
// });
//
// console.log(fn() + " " + ln());
//
// function fn(){
//   return 'Haley';
// }
//
// function ln(){
//   return 'Bennett';
// }
var form = document.querySelector('form');

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault
  getInfo();
});
function getInfo(){
  console.log('Welcome ' + getName(form) + ' to your site. Your email is ' + getEmail(form));
};



function getName(arr){
  var nm = ' ';
  for( var i = 0; i < arr.elements.length; i++) {
      if(arr.elements[i].type === 'text'){
        nm = nm + arr.elements[i].value + ' ';
      }
  }
  return nm;
};

function getEmail(arr){
  var emails = '';
  console.log(arr.elements);
  for(var i = 0; i < arr.elements.length; i++){
    if(arr.elements[i].type === 'email'){
      emails = emails + arr.elements[i].value + ' ';
    }
  }
  return emails;
};

function chkbx(arr){
  var chkbxs = '';
  console.log(rr.elements);
  for (var i = 0; i < arr.elements.length; i++) {
    if(arr.elements){

    }
  }
}
// function add(num, num2, num3){
//   return (num + 10 + num2) / num3;
// }
//
// var addEx = function(){
//   console.log(arguments);
//   var total = 0;
//   for(var i = 0; i <arguments.length; i++){
//     console.log(typeof arguments[i]);
//     if(typeof arguments[i] !== 'string'){
//             total = arguments[i] + total;
//     }
//   }
//   // console.log(total);
//   return total;
// };
