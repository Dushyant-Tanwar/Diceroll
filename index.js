/*
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var num, number;

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    num = 1;
}
else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    num = 2;
}
else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    num = 3;
}
else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    num = 4;
}
else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    num = 5;
}
else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    num = 6;
}
else {
    Pass;
}


if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    number = 1;
}
else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    number = 2;
}
else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    number = 3;
}
else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    number = 4;
}
else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    number = 5;
}
else if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    number = 6;
}
else {
    Pass;
}

if (num > number) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (number > num) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (num === number) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    Pass;
}
*/

/*
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var num, number;

function dice_1(randomNumber1) {

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    num = 1;
}
else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    num = 2;
}
else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    num = 3;
}
else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    num = 4;
}
else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    num = 5;
}
else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    num = 6;
}
else {
    Pass;
}

return num;

}

function dice_2(randomNumber2) {
if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    number = 1;
}
else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    number = 2;
}
else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    number = 3;
}
else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    number = 4;
}
else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    number = 5;
}
else if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    number = 6;
}
else {
    Pass;
}

return number;

}

var num1 = dice_1(randomNumber1);
var num2 = dice_2(randomNumber2);

if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (num1 === num2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    Pass;
}
*/

var randomNumber1 = Math.floor( (Math.random() * 6) + 1 );
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor( (Math.random() * 6) + 1 );
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}