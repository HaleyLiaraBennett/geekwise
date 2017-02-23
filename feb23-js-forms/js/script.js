var form = document.querySelector('form');
var subBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  for(var i = 0; i < form.elements.length - 1; i++){
    console.log(form.elements[i].value);
    if(form.elements[i].type === 'text' ||
     form.elements[i].type === 'textarea' ||
     form.elements[i].type === 'email'
   ){
      console.log(form.elements[i].value);
    }
  }
});
