var content = document.getElementById('content');
var h1 = document.createElement('h1');
var p = document.createElement('p');
var a = document.createElement('a');
var ul = document.createElement('ul');




content.appendChild(h1).textContent = "Goodbye Cruel World";
content.appendChild(p).textContent = "Toon link is suspicious and navi is annoying";
content.appendChild(a).textContent = "art";
content.appendChild(a).textContent = "David Bowie";
content.appendChild(ul);


a.id = 'test';
a.href = "http://google.com";
a.class = 'test2';

var form = document.createElement('form');
var usern = document.createElement('input');
var firstn = document.createElement('input');
var lastn = document.createElement('input');
var email = document.createElement('input');
var passw = document.createElement('input');
var number = document.createElement('input');
var submitbtn = document.createElement('input');
var br = document.createElement('br');

usern.type = 'text';
usern.placeholder = 'username';
firstn.placeholder = 'firstname';
firstn.type = 'text';
lastn.placeholder = 'lastname';
lastn.type = 'text';
email.placeholder = 'email';
email.type = 'email';
passw.placeholder = 'password';
passw.type = 'password';
number.placeholder = 'number';
number.type = 'number';

submitbtn.type = 'submit';
submitbtn.value = 'accept';

form.appendChild(usern);
form.appendChild(br);
form.appendChild(submitbtn);
content.insertBefore(form, a);
form.appendChild(firstn);
form.appendChild(lastn);
form.appendChild(email);
form.appendChild(passw);
form.appendChild(number);

submitbtn.addEventListener('click', function(evt){
  evt.preventDefault();
  getuser();
});

function getuser() {
  console.log(usern.value);
  usern.value = '';
}
var formarr = [];

function getValues(){
  ul.innerHTML = '';
  // console.log(number.value);
  var loopnum = parseInt(number.value);
  for(var i = 0; i < loopnum; i++){
    var li = document.createElement('li');
    ul.appendChild(li).textContent = i;
    li.contentEditiable = true;
  }
  // console.log(form);
  // for( var i =0; i < form.elemnets.length - 1; i++){
  //   formarr.push(form.elements[i].value);
  // }
  // console.log(formarr);
}

number.eventListener('change', function(evt){
  evt.preventDefault;
  if(evt.target.value < 0){
    evt.target.value >= 0;
  }else {
    console.log(evt.taget.value);
  }
});
