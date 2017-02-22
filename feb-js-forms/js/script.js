var btn = document.querySelectorAll('input:not([type="submit"])');
var subBtn = document.querySelector('input[type="submit"]');
var user = [];

subBtn.addEventListener('click', function(evt){
  evt.preventDefault();

  var formInputs = document.querySelector('form').elements;

  for(var i = 0; i < formInputs.length - 1; i++){
    // user.push(formInputs[i].value);
    if(
      formInputs[i].type === 'radio' && formInputs[i].checked ||
      formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value
    ){
      console.log(formInputs[i].value);
      user.push(formInputs[i].value);
    }
    if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
      user.push(true);
    }
  }

  console.log(user);
  user = [];
});


//MY SOLUTION
// subBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   for (var i = 0; i < btn.length; i++) {
//       user.push(btn[i].value);
//       btn[i].value = '';
//   }
//   alert(user);
//   user.splice(0);
//
// });
