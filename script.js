var score=0;
var timer = 60;

var rn = 0
function IncScore(){
    score+=10;
    document.querySelector("#Scoreval").textContent=score ;
    
}
function Newhit(){
     rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn
}
function makebubble(){
    var clutter = "";
    for(var i=1;i<=154;i++){
        var rn=Math.floor(Math.random()*10)
        clutter+= `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML=clutter
    
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
   var ClickedNum=(Number(dets.target.textContent));

   if(ClickedNum == rn)
   {
     IncScore();
    Newhit();
    makebubble();
   }
})
function Timer(){
    var Time = setInterval(function(){
         if(timer>0){
             timer--;
             document.querySelector("#Timerval").textContent = timer;
         }
         else{
             document.querySelector("#pbtm").innerHTML=`<H1>Your Score is ${score}</H1>`
             clearInterval(Time)
         }
        
     },1000)
 }
Newhit();
Timer();
makebubble();
