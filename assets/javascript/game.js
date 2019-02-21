//Star Wars Game

<<<<<<< HEAD
//global variables
var chosenChar="";
var chosenEnemy = "";
var healthPoints = 0;
var attackPower = 0;
var counterPower = 0;
var enemyHealth = 0;
var enemyPower = 0;
var isCharChosen = false;
var isEnemyChosen = false;
var enemyOneHealth = 0;
var enemyTwoHealth = 0;
var enemyThreeHealth = 0;

//character objects 
var chew = {name:"Chewbacca", health: 100, attack: 8, counter: 20};
var solo = {name:"Han Solo", health: 180, attack: 9, counter: 25};
var vader = {name:"Darth Vader", health: 200, attack: 7, counter: 10};
var storm = {name:"Stormtrooper",health: 150, attack: 6, counter: 5};

//character array
var character = [chew, solo, vader, storm];


//Step 1: Select Character

//set up click event when character chosen and save the result to a variable char
var charOne = $(".character-one").on("click",chooseOne);
var charTwo = $(".character-two").on("click",chooseTwo);
var charThree = $(".character-three").on("click",chooseThree);
var charFour = $(".character-four").on("click",chooseFour);

//click events that pass enemies to fight section
var enemyOne = $(".card-one").on("click",firstEnemy);
var enemyTwo = $(".card-two").on("click",secondEnemy);
var enemyThree = $(".card-three").on("click",thirdEnemy);

var attack = $("button").on("click",fight);
var attack = $("button").on("click",reset);


//choose functions for each character choice
function chooseOne(){
  if (isCharChosen===false){
  $(".card-one").append(charTwo);
  enemyOneHealth = parseInt($(charTwo).children().last().text());
  $(".card-two").append(charThree);
  enemyTwoHealth = parseInt($(charThree).children().last().text());
  $(".card-three").append(charFour);
  enemyThreeHealth = parseInt($(charFour).children().last().text());
  chosenChar = $("#pic").attr("alt");
  healthPoints = parseInt ($(this).children().last().text());
  isCharChosen = true;
  }
  else{
    return true;    
  }
}

function chooseTwo(){
  if (isCharChosen===false){
  $(".card-one").append(charOne);
  enemyOneHealth = parseInt($(charOne).children().last().text());
  $(".card-two").append(charThree);
  enemyTwoHealth = parseInt($(charThree).children().last().text());
  $(".card-three").append(charFour);
  enemyThreeHealth = parseInt($(charFour).children().last().text());
  chosenChar = $("#pic").attr("alt");
  healthPoints = parseInt ($(this).children().last().text());
  isCharChosen = true;
  }
  else{
    return;
  }
}

function chooseThree(){
  if (!isCharChosen){
  $(".card-one").append(charOne);
  enemyOneHealth = parseInt($(charOne).children().last().text());
  $(".card-two").append(charTwo);
  enemyTwoHealth = parseInt($(charTwo).children().last().text());
  $(".card-three").append(charFour);
  enemyThreeHealth = parseInt($(charFour).children().last().text());
  chosenChar = $("#pic").attr("alt");
  healthPoints = parseInt ($(this).children().last().text());
  isCharChosen = true;
  }
  else{
  return;
  }
}

function chooseFour(){
  if (!isCharChosen){
  $(".card-one").append(charOne);
  chosenEnemy = $(charOne).children().first().text();
  enemyOneHealth = parseInt($(charOne).children().last().text());
  $(".card-two").append(charTwo);
  chosenEnemy = $(charTwo).children().first().text();
  enemyTwoHealth = parseInt($(charTwo).children().last().text());
  $(".card-three").append(charThree);
  chosenEnemy = $(charThree).children().first().text();
  enemyThreeHealth = parseInt($(charThree).children().last().text());
  chosenChar = $("#pic").attr("alt");
  healthPoints = parseInt ($(this).children().last().text());
  isCharChosen = true;
}
else{
  return;
}
}

//functions for each enemy fighter choice
//
function firstEnemy(){
  if(!isEnemyChosen){
  $(".enemy").append(enemyOne);
  enemyHealth = enemyOneHealth
  fightSetup();
  isEnemyChosen = true;
  }
  else{
    return;
  }
}

function secondEnemy(){
  if(!isEnemyChosen){
  $(".enemy").append(enemyTwo);
  enemyHealth = enemyTwoHealth
  fightSetup();
  isEnemyChosen = true;
  }
  else{
    return;
  }
}

function thirdEnemy(){
  if(!isEnemyChosen){
  $(".enemy").append(enemyThree);
  enemyHealth= enemyThreeHealth;
  fightSetup();
  isEnemyChosen = true;
}
else{
  return;
}
}

function fightSetup(){
  for (let i = 0; i < character.length; i++){
    if(character[i].name===chosenChar){
      healthPoints = character[i].health;
      counterPower = character[i].counter;
         }
  }
    for (let i = 0; i < character.length; i++){
    if(character[i].health===enemyHealth){
      attackPower = character[i].attack;
      
      console.log(attackPower);
    }
  }
}

function result(){
  if(healthPoints>0 && enemyHealth<0){
    console.log($(".enemy").html("<h5>WINNER! Choose the next fighter.</h5>"));
    
    
}
else{
  if(healthPoints<0 && enemyHealth>0){
    console.log($(".enemy").html("<h5>LOSER!</h5> <button>Reset</button>"));
}
}
}

function fight(){
  healthPoints -= attackPower;
  $("#health").text(healthPoints);
  counterPower = 2*counterPower
  enemyHealth -= (counterPower);
  $("#health").each(function(){
    $(".card-one").children().children().children().text(enemyHealth);
  result();
  })
}

//reset function goes here that will reset the page and clear out the variables
function reset(){


=======
//Step 1: Select Character

//set up click event when character chosen and save the result to a variable yourCharacter
var yourCharacter = $(".card-img-top").on("click",chooseChar);

//pass yourCharacter 

function chooseChar(){
  console.log(yourCharacter);
>>>>>>> 8701095b9ef7d0d3cfcdc0d058bf396dbe0cc909
}