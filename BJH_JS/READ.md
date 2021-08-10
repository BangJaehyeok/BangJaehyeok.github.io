#### 20210810 (화) 작업
- function setName(){
        k=prompt("Your name:","");
        document.getElementsByName('pname')[0].value=k;}
    ==> 이 setName함수는 prompt로 텍스트입력 팝업창이 뜨게한다.
    그리고 document.getElementsByName('pname')[0].value=k;는 getElementsByName은 'pname'이라는 Name의 배열에 k의 값을 배열[0]에 넣어서 출력한다는 것이다.

- 자바스크립트 배열선언 : var ar=[]; 자바스크립트의 배열은 자바의 ArrayList와 성격이 같다. 그래서 추가,삭제,수정이 자유롭다.
- var ar=[]; or let ar=[]; or var ar=new Array(); 이렇게 배열을 선언한다.
- var ar=[10]; 배열의 길이가 10인 배열이 선언된다. 그리고 이 배열은 값이 지정되어있어도 추가,삭제가 매우 자유롭다.
- 추가(push)/삭제(pop,shift,delete)
- ar.push('Hello'), ar.push('World'), ar.push('Welcome')
- document.write(ar[0]) = Hello // document.write(ar[2]) = Welcome
- ar[1]=3.14;라고 뒤에 선언해도 이것이 지정된 배열만 혼자 타입이 바뀌어서 숫자 3.14로 저장이된다.
- ar.pop();하면 배열 가장 뒤의 배열값이 사라진다. 즉 Welcome이 사라짐.
- k=ar.pop(); document.write(k);하면 welcome이 찍힌다. 
- k=ar.shift(); document.write(k);하면 Hello가 출력된다. 즉, shift 함수는 가장 맨 앞의 값을 삭제시킴. 맨 앞의 0번째 배열을 삭제하니 인덱스번호가 다시 정해져서 1이었던 배열 인덱스값은 0으로 바뀌는 등의 하나씩 줄어든다.
- delete ar[1]; delete는 순서상관없이 배열 인덱스값을 지정해서 삭제한다.

-자바스크립트에서 HTML 문서의 객체를 가져올때 사용되는 함수는
.getElementById(), .getElementsByName(), .getElementsByTagName(), .getElementsByClassName() 가 있다.
- .getElementsByName()으로 가져온 객체는 배열로 저장이 된다.
- document.getElementsByName('pname')[0].value=k;}
- e=document.getElementsByName('pname') 라고한다면
- e[0].value=k e라는 배열 0번째 값에 k의 값을 집어넣어라.

-k1=document.getElementsByName('pname')[0].value; k1이 왼쪽에 있으면 오른쪽의 값을 꺼내와서 k1에 저장하는것.
- document.getElementsByName('pname')[0].value=k; k가 오른쪽에 있으면 왼쪽에 k값을 넣는 것이다. 즉, k가 뭐라고 앞에 정의되어있으면 그 정의된 값이 왼쪽에 들어간다.


#### 20210809 (월) 작업
- 자바스크립트는 웹상에서 작동하는 언어이다.
- 자바스크립트는 Hello.js 파일로 작동한다.
- 자바스크립트는 자바, C언어처럼 컴파일 과정을 거치지않는다. 
- 컴퓨터의 웹브라우저가 Hello.js파일을 받으면 즉각적으로 기계어를 처리해낸다.
- 중간코드나 기계어와같은 중간과정이 없다. 그냥 자바스크립트 파일을 웹브라우저가 한줄한줄씩 기계어로 바꿔서 처리한다.
- 그래서 자바스크립트는 웹브라우저가 꼭 필요하다.
- C언어, 자바는 컴파일러어라고한다.
- 자바스크립트는 인터프리터어라고한다.
- 언어로서 꼭 따라오는것 : 변수, 제어문, 연산자, 함수
- 자바스크립트의 변수
- 1. 타입선언이 없다. 
- 2. 배열이 java의 ArrayList와 많이 비슷하다.
- 3. 문법이 자바와 많이 비슷하다.
- 변수선언 : 반드시 할 필요가 없다. int없이 그냥 i=0해줘도 에러안남.
- 타입을 신경써주지 않아도된다. 그때그때 그냥 자동으로 바꿔준다.
- var i=0; or let i=0; 이런 식으로 변수선언을 했다고 알려주기.
- 상수 : 값이 처음에 세팅되면 바꿀 수 없는 변수
- const k = 1.1592; <= 이런식으로 상수를 선언해준다.
- 연산자는 자바랑 똑같다. ==,!=,<,>,<=,=>...논리, 사칙연산, 배정연산자 등등 모두 같다.
- a+b+c+d 이 중 하나라도 문자라면 +는 연결연산자로 작동한다.
- 중괄호 안에서 선언하면 let i=10;하면 i는 중괄호 안에서만 작동한다.
- 그런데 중괄호에서 그냥 i=10;하면 그것은 중괄호 바깥에서도 참조할 수 있다.
- 자바스크립트는 엔터만 쳐주면 굳이 ;안해줘도 된다. 한줄에 하나씩. 그런데 한줄에 여러명령어를 넣는다면 ;세미콜론으로 구분해줘야한다.
- 웹브라우저에 에러가 어떻게 나는지 알고싶으면 크롬 오른쪽하고 검사하면 된다.
- <script src='링크'></script> 해주면 다른 js파일과 연동하여 쓸 수 있다.
- 자바스크립트 단점 : 소스가 모두에게 오픈된다.

- 완전경로 : Root로부터의 경로명(맨처음부터 끝까지의 경로)
- 상대경로 : 다른 폴더로부터의 경로명(.과 ..을 사용한다.)
- 상대경로 : .=> 현재폴더, ..=> 상위폴더 ex) ../../Realtec , ../Program Files/Realtec
- 상대경로는 기준폴더에 따라 상대경로가 어떻게 쓰일지 달라진다.
- 완전경로로 찾을수도 있고, 기준폴더에 따른 상대경로를 쓸 수도 있다.

- 상호작용(interactive)
- console.log("방재혁")가 디버그용으로 사용한다.
- alert() : 메세지 표시(확인/ok) 일방적인 표시
- confirm(); : yes/no만 받아들임 confirm("종료하시겠습니까") 예/아니오만 버튼입력만 가능.
- prompt(); : 사용자의 입력데이터를 받아들임. 어떤데이터든 입력가능.

- 자바스크립트는 문자열에 "", '' 모두 사용가능하다.
- 자바스크립트에서는 이퀄안써도된다. if(k=="") k가 문자열이라고해도 저렇게 써도된다. ""말고 ''도 사용가능하다. 자바스크립트는 포용력이 넓다.
- document.write(k+"<hr>"+a) 줄바꿈할땐 안에 "<br>"로 추가한다.
- for(i=0,j=10;i<j;i++,j--){} for문안의 초기화, 후실행문은 여러문장이 올 수 있다. 
- switch(변수/표현식){case 10:... break; default:...} 자바와 같다.
- 논리적 코딩을 짤때 무턱대고 for,while문을 하지말고 한번 쭈욱 코딩의 진행을 적어봐라. 그리고 거기에 나오는 규칙성을 파악하고 코딩을 해볼 것.

- 함수의 제한은 자바보다 훨씬 자유롭다. 반환값이 있냐 없냐로 나뉜다.
- 함수의 범위를 어디까지 정하느냐에 따라 자유롭게 쓸수있다.
- 아예 for함수자체를 하나의 함수로 지정할 수 있다.
- function f1(){}
- 그치만 for문을 함수자체로 만들었을 때는 return값을 반복해서 호출할 수 없다.

#### 20210806 (금) 작업
- D드라이브에 저장소를 마련한다.
- 리포지토리(저장소) 초기화 : git init
- git add .
- Git에서 'user.name' 및 'user.email'을 구성하라고 떠요(해결책)
- git config --local user.name 이름
- git config --local user.email 이메일
- git branch -M master
- git remote add origin [사용자의 깃허브 저장소 URL]
- git push -u -origin master
- 업로드절차 1. 커밋(commit) 2. 푸시(push)
- 다운로드절차 1. 풀(pull) : 교실에서 작업한 결과를 집에서 이어서 작업할 상황
- 업로드 방법 : 커밋(commit)과 푸시(push)가 깃에 올리는 방법이다.
- 다운로드 : 풀(pull) 교실에 있다가 집에서 작업물을 확인할때.
- html(개발PC) 과 깃 저장소를 연결시킨다.

- ctrl+shift+B키를 누르면 크롬과 연동되어 작업내용이 새 크롬창에 떠서 나타난다.
- document.write("방재혁") = System.out.print("방재혁");과 동일
- 줄바꿈 <br> 줄생기게하고 한줄띄우기 <hr>
- html은 항상 시작태그, 끝태그로 구성되어야함.<html></html>
- html은 <head></head>와 <body></body> 크게 두가지로 구성되어있다.
- <title> : 웹페이지의 제목태그
- ㅁㅁㅂㅈ