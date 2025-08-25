var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomDice = "Dice" + randomNumber1 + ".png";

var randomDiceSource = "./images/"+randomDice;

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomDice = "Dice" + randomNumber2 + ".png";

var randomDiceSource = "./images/"+randomDice;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="🚩Draw!"
}