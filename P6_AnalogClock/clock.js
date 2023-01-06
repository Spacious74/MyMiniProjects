var date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();


let hrhand = document.getElementById('hourhand');
let minhand =  document.getElementById('minutehand');
let sechand =  document.getElementById('secondhand');


var minangle = minute * 6;
console.log("min angle: " + minangle);
var secangle = second * 6;
console.log("sec angle: " + secangle);
var angle = (hour * 30 ) + (minute * 60 * 0.0084) ;
console.log("hour angle: " + angle);
setInterval(() => {
    hrhand.style.rotate = angle + 'deg';   
    angle += 0.0084
 }, 1000);

setInterval(() => {
    minhand.style.rotate = minangle + 'deg';   
    minangle += 0.1;
}, 1000);

setInterval(() => {
    sechand.style.rotate = secangle + 'deg';   
    secangle += 6;
}, 1000);

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds()-1;
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('realtime').innerHTML = "Current time : " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
startTime();