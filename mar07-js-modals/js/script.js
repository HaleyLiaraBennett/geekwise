var form = document.querySelector('form');
console.log('notification' in window);

console.log('childElementCount' in form);

if(!'childElementCount' in form) {
  for (var i = 0; i < form.children.length; i++) {
    console.log(form.children[i]);
  }else {
    for(var i = 0; i < form.childElementCount; i++){
      console.log(form.children[i]);
    }
  }
}

// if(!('Notification' in window ) ){
//   alert('sorry, that feature is not available');
// }else{
//   console.log('notification is avilable');
// }

// form.childNodes.forEach(function(e, i){
//   console.log(e);
// });
//
// for(var i = 0; i< form.children.length; i++){
//   console.log(form.children[i]);
// }


// var model = document.getElementById('modal');
//
//
// function sesame (typ){
//
//   var confirm = document.createElement('input');
//   var cancel = document.createElement('input');
//   var ask = document.createElement('input');
//
//   confirm.value = 'howdy';
//   confirm.type = 'button';
//
//   cancel.value = 'no';
//   cancel.type = 'button';
//
//   ask.placeholder = 'answerpls';
//   ask.type = 'text';
//
//   modal.append(confirm);
//   modal.append(cancel);
//   modal.append(ask);
//
//   if(typ === 'prompt'){
//     modal.append(confirm);
//     modal.append(cancel);
//     modal.append(ask);
//   else if (typ === 'confirmation') {
//       modal.append(confirm);
//   }else(typ = 'alertation'){
//     modal.append(confirm);
//     modal.append(cancel);
//   }
//   console.log('prompt');
// }
