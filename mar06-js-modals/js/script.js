var modal = document.getElementById('modal');


function createModal(modtyp, modmess){
  modal.classList.add('active');
    var ans = document.createElement('input');
  var mess = document.createElement('p');
  var newel = document.createElement('form');
  var modiv = document.createElement('div');
  var con = document.createElement('input');
  var btn = document.createElement('input');

  mess.textContent = modmess;

  ans.placeholder = 'answer';
  ans.type = 'text';

  btn.type = 'submit';
  btn.value = 'cancel';

  con.type = 'submit';
  con.value = 'confirm';

    newel.append(modmess);
 if(modtyp === 'prompt'){
    newel.append(ans);
    modiv.append(btn);
  }else if(modtyp === 'confirm'){
    modiv.append(btn);
  }
    modiv.append(con);
    newel.append(modiv);

  modal.append(newel);

  btn.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.removeChild(newel);
    model.classList.remove('active');
  });
  con.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.removeChild(newel);
    model.classList.remove('active');
    if(ans.value){
      var userinput = ans.value;
      console.log(userinput);
    }
  });

}
