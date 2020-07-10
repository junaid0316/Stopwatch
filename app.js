var hour = 0;
var min = 0;
var sec = 0;
var hourhead = document.getElementById("hour");
var minhead = document.getElementById("min");
var sechead = document.getElementById("sec");
var interval;

function timer(){
    sec++
    sechead.innerHTML=sec;
    if(sec>=60){
        min++;
        minhead.innerHTML=min;
        sec=0;
        sechead.innerHTML=sec
    }
    if(min>=60){
        hour++
        hourhead.innerHTML=hour;
        min=0;
        minhead.innerHTML=min
         }
    
}


function start(){
    interval = setInterval(timer,1000)
    document.getElementById("btnstr").disabled=true
}

function pause(){
    clearInterval(interval)
    document.getElementById("btnstr").disabled=false
}

function reset(){
    hour = 0
    min = 0
    sec = 0
    hourhead.innerHTML=hour
    minhead.innerHTML=min
    sechead.innerHTML=sec
    pause();
}