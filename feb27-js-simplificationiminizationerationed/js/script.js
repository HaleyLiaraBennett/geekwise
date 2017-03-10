var login = document.getElementById('login');
var loginform =
'<form>'+
    '<h1>Get off my Website</h1>'+
    '<label>'+
    '<span>username</span>'+
    '<input type="text" placeholder="username">'+
    '</label>'+
    '<label>'+
    '<span>password</span>'+
    '<input type="password" placeholder="password">'+
    '</label>'+
    '<label>'+
    '<span></span>'+
    '<input type="submit" value="run">'+
    '</label>'+
'</form>';
login.innerHTML = loginform;

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault();
  getFormVals();
});

var form = document.querySelector('#login form');

function getFormVals(){
  var forminputs = [];
console.log(form.elements);
for (var i = 0; i < form.length - 1 ; i++) {
     forminputs.push(form.elements[i].value);
}
console.log( dropCapsInputs(forminputs));
}
function dropCapsInputs(arr) {

  if(typeof arr === 'object'){
  arr.forEach(function(e, i){
    console.log(arr[i].toLowerCase());
    arr[i] = arr[i].toLowerCase();
  });
  return arr;
}
}

var h1 =
custom.textContent = 'Hello ' + arr + '. ';
