var clock = document.querySelector(".clock")

var clockTitle = clock.querySelector("h1");

function Time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    clockTitle.innerText = `${hour < 10? `0${hour}`:hour}:${minute}:${second < 10? `0${second}`: second}`;
}
function show(){
    Time();
    setInterval(Time,1000);
}
show();



