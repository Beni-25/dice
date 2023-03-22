var randomNumberForAlphin = (Math.random()*6)+1;
   var alphinNumber = Math.floor(randomNumberForAlphin);


var alphinDice="dice"+alphinNumber+".png"
var alphinImage="images/"+alphinDice;

var imageAlphin=document.querySelectorAll("img")[0];
imageAlphin.setAttribute("src", alphinImage);




   var randomNumberForBenisha = (Math.random()*6)+1;
      var benishaNumber = Math.floor(randomNumberForBenisha);

var benishaDice="dice"+benishaNumber+".png"
var benishaImage="images/"+benishaDice;

var imageBenisha=document.querySelectorAll("img")[1];
imageBenisha.setAttribute("src", benishaImage);

if (alphinNumber>benishaNumber)
{
    document.querySelector("h1").innerHTML="🚩Alphin Wins!";
}
else if (alphinNumber<benishaNumber){
document.querySelector("h1").innerHTML="🚩Benisha Wins!";

}

else{
  document.querySelector("h1").innerHTML="🏳️Draw!";
}
