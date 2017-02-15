var halp = document.getElementById('one');
var halp2 = document.getElementById('two');
var div = document.getElementById('divit');


halp.addEventListener('click', function(){
   firstUsername = prompt('Whats yo name');
   console.log( parseInt(firstUsername) );
   if( isNaN(firstUsername) ){
     console.log('its not number');
   }else{
     alert('pls type name ');
   }
    halp2.removeAttribute('disabled');
});

halp2.addEventListener('click', function(){
  var userLastName = prompt('Last naem pls');
  if( isNaN(userLastName) ){
  // alert(firstUsername + userLastName);
  div.textContent = firstUsername + userLastName;
  halp.disabled = false;
  halp2.disabled = true;
  }else{
    alert('pls type name ');
  }
  // alert(firstUsername + userLastName);
    // llResetScript();
  // console.log(username);
});




// var word = "halp";,
//
// var getTheName = function(){
//   var name = prompt('Gimme yo name').trim();
//   // return name;
//   // whatItDo();
//   b(name);
// }();
//
// function b(what){
//   alert(what);
//   var cased = what.charAt(0).toUpperCase() + what.substr(1).toLowerCase();
//   alert(cased);
//   c(cased);
// }
//
// function c(what){
//   alert(what);
// }


// function whatItDo(){
//   alert('kjsdhoh');
// }



// var functionExpression = function(){
//   alert('From the expression i sti');
// }();
//
// function functionDeclaration(){
//   alert('from the declaration');
// }
// functionDeclaration();
