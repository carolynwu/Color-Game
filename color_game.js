/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var numSquares=9;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var button1=document.querySelector("#reset");

var easy=document.querySelector("#easy");
var med=document.querySelector("#med");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
 hard.classList.remove("selected");
 med.classList.remove("selected");
 easy.classList.add("selected");
 
 numSquares=3;
 colors=generateRandomColors(numSquares);
 pickedColor=pickColor();
 colorDisplay.textContent=pickedColor;
 for(var i=0;i<squares.length;i++){
     if(colors[i])
     {
         squares[i].style.background=colors[i];
     }
     else
     {
         squares[i].style.display="none";
     }
 }
});

med.addEventListener("click",function(){
 easy.classList.remove("selected");
 hard.classList.remove("selected");
 med.classList.add("selected");
 
 numSquares=6;
 colors=generateRandomColors(numSquares);
 pickedColor=pickColor();
 colorDisplay.textContent=pickedColor;
 
 for(var i=0;i<squares.length;i++){
     if(colors[i])
     {
         squares[i].style.background=colors[i];
         squares[i].style.display="block";
     }
     else
     {
         squares[i].style.display="none";
     }
 }
});

hard.addEventListener("click",function(){
 easy.classList.remove("selected");
 med.classList.remove("selected");
 hard.classList.add("selected");
 
 numSquares=9;
 colors=generateRandomColors(numSquares);
 pickedColor=pickColor();
 colorDisplay.textContent=pickedColor;
 
 for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
        squares[i].style.display="block";
     }
});


button1.addEventListener("click",function(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    
    this.textContent="New Colors";
    
    messageDisplay.textContent="";
    for(var i=0; i<squares.length;i++)
    {
    //add initial colors to squares
    squares[i].style.backgroundColor=colors[i];
    }
     h1.style.background="#66CDAA";
})



colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length;i++)
{
    //add initial colors to squares
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
    var clickColor=this.style.backgroundColor;
    if(clickColor===pickedColor)
    {
        messageDisplay.textContent="Correct";
        button1.textContent="Play again?";
        changeColors(clickColor);
        h1.style.background=clickColor;
    }
    else
    {
        this.style.backgroundColor="black";
         messageDisplay.textContent="Try again";
    }
     }); 
}
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color
    }
}

function pickColor()
{
  var random=Math.floor(Math.random() * colors.length);
  return colors[random];  
}

function generateRandomColors(num){
    //make an array
    var arr=[];
    // add num random colors to array
    for(var i=0;i<num;i++){
        arr.push(randomColor())
    }
    // return that array
    return arr;
}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    
    var g=Math.floor(Math.random()*256);
    
    var b=Math.floor(Math.random()*256);
    return"rgb("+r+", "+g+", "+b+")";
}

