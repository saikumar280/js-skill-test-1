var seconds=0,minutes=0,mills=0;
var sec="00",min="00",mil="00";
var timeoutId=null;
// start event
function start(con) {
    if(con){
        document.getElementById("button2").disabled=true;
    }
    // time out function
    timeoutId = setTimeout(function() {
        mills++;
        if(mills<10){
            mil="0"+mills.toString();
        }else{
            mil=mills.toString();
        }
        if(mills==100){
            seconds++;
            mills=0;
            if(seconds<10){
                sec="0"+seconds.toString();
            }else{
                sec=seconds.toString();
            }
            if(seconds==60){
                minutes++;
                seconds=0;
                if(minutes<10){
                    min="0"+minutes.toString();
                }else{
                    min=minutes.toString();
                }
                if(minutes==60){
                    minutes=0;
                    mills=0;
                    seconds=0;
                }
            }
        }
        document.getElementById("mill").innerHTML=mil;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("min").innerHTML=min;
        start();
    }, 10);
}
// stop event
function stop() {
    clearTimeout(timeoutId);
    document.getElementById("button2").disabled=false;
}
// reset event
function reset() {
    mills=0;
    seconds=0;
    minutes=0;
    clearTimeout(timeoutId);
    document.getElementById("mill").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("button2").disabled=false;
    
}