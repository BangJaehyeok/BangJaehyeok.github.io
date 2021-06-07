var clock = document.querySelector(".clock")

var clockTitle = clock.querySelector("h1");

//시간표시
function Time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    clockTitle.innerText = `${hour < 10? `0${hour}`:hour}:${minute}:${second < 10? `0${second}`: second}`; //초단위를 2자리수로 보이게하기
}
function show(){
    Time();
    setInterval(Time,1000);
}
show();
//시계가동하기



