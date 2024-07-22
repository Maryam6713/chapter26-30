//----------Chapter 26 - 30-----//
//--------question1-----------//

var userInp = prompt("enter positive floating numbers")
console.log( "Integer : " + parseFloat(userInp));
console.log("Round  : " + Math.round(userInp));
console.log( "Floor : " + Math.floor(userInp));
console.log("Ceil : " + Math.ceil(userInp));

//-----------question2------------//

var userInp = prompt("enter negative floating numbers")
 console.log( "Integer : " + parseFloat(userInp));
 console.log("Round  : " + Math.round(userInp));
 console.log( "Floor : " + Math.floor(userInp));
 console.log("Ceil : " + Math.ceil(userInp));

//-----------question3---------//

var num =  prompt("enter negative numbers")
var absValue = Math.abs(num)
console.log("the absolute of " + num + " is " + absValue);

//-----------question4----------//

var diceValue1 = Math.floor(Math.random() * 4) + 1; 
var diceValue2 = Math.floor(Math.random() * 6) + 1; 

document.write("Random Dice Value 1: " + diceValue1 + "<br>");
document.write("Random Dice Value 2: " + diceValue2);

//-----------question5--------//

var coinValue1 = Math.random() < 0.5 && "Head" || "Tail"; 
var coinValue2 = Math.random() < 0.5 && "Head" || "Tail"; 
document.write("Random Coin Value 1: " + coinValue1 + "<br>");
document.write("Random Coin Value 2: " + coinValue2);

//----------------question6------------//

var randomNum = Math.floor(Math.random() * 100  )+ 1;
 document.write("Random number 1 and 100 : " + randomNum)

//------------question7------------//

var userWeight = prompt("enter your wight here")
var str = parseFloat(userWeight)
document.write("The weight of user is " + str + " Kilograms")

//------------question8-----------//

var userInp = prompt("enter a secret number between 1 to 10 ")
var secNum  = 3
if(userInp == secNum){
    alert("Congratulations! you found the secret number")
}else{
    alert("Oops " + userInp + " is not the secret number")
}