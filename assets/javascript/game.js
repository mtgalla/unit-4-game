//Star Wars Game

//Step 1: Select Character

//set up click event when character chosen and save the result to a variable yourCharacter
var yourCharacter = $(".card-img-top").on("click",chooseChar);

//pass yourCharacter 

function chooseChar(){
  console.log(yourCharacter);
}