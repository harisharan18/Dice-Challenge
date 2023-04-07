var r1 =Math.floor(Math.random()*6)+1;

var rimage = "dice" + r1 + ".png";
var rimagesrc = "images/"+ rimage;

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", rimagesrc);

var r2 = Math.floor(Math.random()*6)+1;
var rimage2="dice" + r2 +".png";
var rimagesrc2="images/"+ rimage2;

var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src", rimagesrc2);

if(rimage > rimage2){
    document.querySelector("h1").innerHTML = "🏅Player1 Wins!";
}
else if(rimage < rimage2){
    document.querySelector("h1").innerHTML ="Player2 Wins!🏅";
}
else{
    document.querySelector("h1").innerHTML = "Match Tie!"
}