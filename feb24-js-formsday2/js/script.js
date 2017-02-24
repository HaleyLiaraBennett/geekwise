// var form = document.querySelector('form');
// var subBtn = document.querySelector('form#contact input[type="submit"]');
// var subBtn.addEventListener('click', function(evt){
//   evt.preventDefault();
//   for(var i = 0; i < form.elements.length - 1; i++){
//     console.log(form.elements[i].value);
//     if(form.elements[i].type === 'text' ||
//      form.elements[i].type === 'textarea' ||
//      form.elements[i].type === 'email'
//    ){
//       console.log(form.elements[i].value);
//     }
//   }
// });
var contact = document.querySelector('#contact')
var loginform = document.querySelector('#login')
var login = document.querySelector('form#login input[type="submit"]');
var custom = document.querySelector('.custom');

var loginArr = [];
var username = '';

if(localStorage.getItem('username')){
  username = localStorage.getItem('username');
  alert(username + ' pls enter password to continue');
  password();
}else{
  alert('pls login');
  login();
}

function login(){
   login.addEventListener('click', function(evt){
      evt.preventDefault();
      // console.log(pass);
      // var pass = MD5("Haley Bennett");
      for(var i = 0; i < loginform.elements.length - 1; i++){
      //  loginArr.push(MD5(loginform.elements[i].value));
      // if(loginform.elements[i].type === 'text'){
      //     localStorage.setItem('username', loginform.elements[i].value);
      // }
      // if(loginform.elements[i].type === 'password'){
      //     sessionStorage.setItem('password', loginform.elements[i].value);
      // }
      loginform.elements[i].type === 'text' ?
        localStorage.setItem('username', loginform.elements[i].value) :
        sessionStorage.setItem('password', MD5(loginform.elements[i].value));
    }
});
    custom.textContent = 'Hello ' + localStorage.getItem('username') + '. ';
    for(var = 0; i < contact.length; i ++){
      contact.elements[i].disabled = false;
    }
}
function password(){
  loginBtn.addEventListener('click, function(evt)'{
    evt.preventDefault();

    if(MD5(loginform.elements[1].value) === sessionStorage.getItem('password')){
      alert('passwords match. You may continue.');
    }
  });
}
