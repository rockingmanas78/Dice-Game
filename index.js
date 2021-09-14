var randomNum1 = Math.floor(Math.random()*6)+1;

var randomDiceImg1 = "images/dice"+ randomNum1 + ".png";

var randomNum2 = Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "images/dice"+ randomNum2 + ".png";

var img1 = document.querySelectorAll("img")[0];

var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDiceImg1);

img2.setAttribute("src", randomDiceImg2);

var winner = (randomNum1>randomNum2)?document.querySelector("h1").innerHTML="Player 1 Wins!":document.querySelector("h1").innerHTML="Player 2 Wins!";
if(randomNum1>randomNum2)
document.querySelector("h1").innerHTML="Player 1 Wins!";
else if(randomNum1<randomNum2)
document.querySelector("h1").innerHTML="Player 2 Wins!";
else
document.querySelector("h1").innerHTML="It's a Tie!";