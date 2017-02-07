var username = prompt("What is your characters name?");
var alignment = confirm("Is your character good or evil? Good=Okay Evil=Cancel");

console.log(alignment);

if(alignment){
  alert(username + ' is an angel');
  var species = "angel";
}else {
  alert(username + ' is a demon');
  var species = "demon";
}

var help = username + ' wants to get something to eat' + '. ';
alert(help);

var eat = confirm('Where should the young ' + species + ' eat?' + 'Okay=BurgerKing Cancel=Hell')
 if (eat) {
   alert(username + ' encountered The Burger King!!!');
   var enemy = 'King'
   var disease = 'Burger Disease';
 }else {
   alert(username + ' encountered a small rat on fire!!!');
   var enemy = ' The small rat on fire'
   var disease = 'Bubonic Plague';
 }


var hp = 10;
var damage = 5;

var fightOrFlight = confirm('Should ' + username + ' fight or run?   FIght=Okay Run=Cancel');

if (fightOrFlight) {
  alert(enemy + " bit you!!!" + username + "got infected with the " + disease + "!")
}else {
  alert(  username + ' escaped ' + enemy + ' but they took your food and won your heart');
}
