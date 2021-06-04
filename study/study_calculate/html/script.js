// 계산기 자바스크립트
//C버튼 reset기능 추가
function reset() {
    document.getElementById("output").innerHTML = "0";
}
//함수 removeZero 정의
function removeZero(){
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}
//화면값 출력
function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}
// %버튼 기능 추가
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}
// = 기능 추가
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}
