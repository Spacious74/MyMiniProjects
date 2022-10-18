function currentTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var session = " AM";

    if(hour > 12){
        hour = hour - 12;
        session = " PM";
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    
    var time = hour + ":" + min + ":" + sec + session;

    document.getElementById("hour").innerText = hour;
    document.getElementById("min").innerText = min;
    document.getElementById("sec").innerText = sec;
    document.getElementById("sesion").innerText = session;

    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();