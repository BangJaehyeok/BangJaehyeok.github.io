#### 알아야할 사항
- 깃헙 커밋암호
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

회의 참가 id : 425 532 9777

#### 20210813 (금) 작업
- id= txtin
- k=$('#txtin').val(); //getter 가져오는값은 항상 문자열
- $('#txtin').val('10'); //setter 이것도 문자열

- head, style, body, script 
- HTML이 계층적 구조를 가지는 것을 DOM(Document Object Model)이라고 한다.
- 웹페이지를 구성하는 태그들이 트리구조를 가지는 것.
- 동적인 HTML 핸들링(조작)

- $('#tbl').append('<tr><td>A</td><td>B</td><td>C</td></tr>')
- 한줄 추가하기 위한 코드. append를 통해 한 줄 추가한다.
- .find('tr:last').remove(); tr태그 중 last(마지막)을 찾아라. 그리고 remove해라.
- .find('tr:eq(3)').remove(); => eq에 인덱스값을 줘서 인덱스값에 맞는 칸의 내용을 지운다.
- :first :eq(n) :last 요걸 잘 활용해서 어떤 줄을 추가하고 없앨지를 선택할 수 있다.
- $('#tbl tr:eq(3) td:eq(4)').text('3,4') => tr.eq(3) : 세로열의 3번째, td.eq(4)=> 가로 행 4번째

-  $('#tbl tr:eq('+i+') td:eq('+j+')').text(n); 여기서 i가 아니라 +i+ 이렇게 집어넣어야 한다. 만약 (i)로 그대로 넣으면 그건 그냥 문자열 i이고, 변수로서 작용하지 않는다. 그래서 변수로 인식시키려면 '+i+' 이렇게 넣어야한다.
- 왜 문자열이냐면 '#tbl tr:eq(i) td:eq(j)' 이렇게 ''여기 안에 모두 다 들어가있기 때문이다. 그래서 '#tbl tr:eq(' 여기 문자열 따로 +i변수추가하고 ') td:eq('  여기 문자열 따로 +j하는 등으로 이렇게 구분해준다. 헷갈리지말자.

좌표 / 값
i==0 j++
00 1
01 2
02 3
03 4
04 5

j==4 i++
14 6
24 7
34 8
44 9

i==4 j--
43 10
42 11
41 12
40 13

j==0 i--
30 14
20 15
10 16

i==1 j++
11 17
12 18
13 19

j==3 i++
23 20
33 21

i==3 j--
32 22
31 23
i==2 j++
21 24
22 25




#### 20210812 (목) 작업
- html5에서는 그냥 button이라는 태그가 지원이됨. <button id=btnShow>보기</button> 이렇게 작성된다.
- radio 버튼이 여러개일때 어떤게 체크되어있는지 알려주는 것
- If($('male').is(':chedked')){
    str='male';}
- Radio와 checkbox에서 미리 체크되어있는걸 원하면 checked를 마지막에 써준다.
- select에서 미리 체크되어있는걸 원하면 selected를 써준다.
- input 태그 중 text/hidden/number/date/datetime/money => .val()
- input 태그 중 radio/checkbox => .is(':checked') -> true/false

- div에서 div태그 영역 안에 텍스트를 쓸 때 주의할 점.
- 1. .text태그로 .text("영화보기<br>모터사이클<br>등산")
- 2. .html("영화보기<br>모터사이클<br>등산")
- text() : 문자열 그대로 표시
- html() : 문자열을 html태그로 인식/화면에 그리기.

- 1번의 방식으로 한다면 text태그 안의 모든 것을 문자열로 인식해서 <br>도 모두 문자열로 인식해서 한줄띄어쓰기가 인식안되고 한줄로 모두 표시된다.
- 2번의 방식은 html태그 처리가 되어서 <br>이 정상적으로 처리된다.
- &nbsp; : <br>태그가 한줄띄우기라면 &nbsp;는 공백처리해서 띄어쓰기해준다.

- $('#female').prop('checked',true); cheked체크마크를 true표시해라
    check표시를 지우고 싶으면 true대신 false
- prop : 속성(property) => checked라는 특성에 true해라. false해라.
- .on('blur','#txtName',function(){
    alert($(this).val()); })
- 포커스가 빠져나갔을때 alert가 동작한다.
- val()는 괄호안의 값이 없을땐 해당 #txtName의 값을 리턴한다.

- 만약 어떤 하나의 값을 입력안하고 넘어가면
- if(str5==''){alert("취미를 최소한 하나 선택하십시오");
        return false;}
- 위처럼 해서 경고창을 띄워준다. 그리고 return false를 통해 해당 함수로 리턴해서 다른 함수가 실행되지 않게 리턴하게 한다.
- 실행하다가 중간에 멈추게하려면 return false를 하게할것. 특히, 자바스크립트는
- return;보다 return false;를 권장.
- div태그의 스타일을 건드리지 않고 div태그 안의 내용들을 지우고 싶을 땐
- .on('click','#btnClear',function(){
    $('#divShow').empty();}) 로 코딩한다.


#### 20210811 (수) 작업
- setInterval(showText,2000)이라고 한다면 showText는 호출이 아니라 콜백이다.
- 콜백은 직접호출이 아니고 실행을 등록해놓고 조건이 맞으면 웹브라우저가 실행함
- <form>태그 : 데이터를 서버프로그램에 전달하는 태그.
- <input type=submit> : 방아쇠. form 태그 안의 모든 input의 값들이 데이터를 서버에 전달.
- <input type=reset> : 입력태그를 비운다.
- <form action="서버프로그램" method="post/get">
- form태그의 action, method, submit 기억하기
- 외부와 통신한다는 특징이 있다.
========================================================
- 제이쿼리 : 코딩을 덜하고 더 많은 일을 할 수 있는 효율적인 코딩을 위한 것.
<script src="https://code.jquery.com/jquery-3.5.4.js">를 script에 해줘야 jquery를 쓸 수 있다.
- 이벤트(event) 목록
- blur : focus가 떠났을때
- focus : 마우스 왼쪽버튼이 눌려서 focus가 들어왔을때. 커서가 깜빡이고 좀 더 진해짐.
- click : 마우스 왼쪽버튼이 클릭됐을때
- dlbclick : 마우스 왼쪽버튼이 더블클릭됐을때
- change : html tag안의 값이 변경됐을때

- HTML => 웹페이지의 UI구현
- JS => 기능
- 제이쿼리를 통해 기능은 기능만 모아두고, html은 html로 모아두는 것 그것이 트렌드.
- $(document)
  .on('click','#btnCalc',function(){
    console.log('btnCalc 클릭')
  }) <==여기에 세미콜론찍지말아라. 꼭!! 에러난다.
- src인데 scr로 오타내서 에러내지말자. 먼저 확인해보자.
- $(#'point').hide(); => 즉시 사라짐
- .show() => 즉시 나타남
- .fadeIn() => 서서히 나타남 .fadeOut()=> 서서히 없어짐
- fadeIn,fadeOut은 괄호 안에 숫자를 넣으면 그 숫자에 맞춰 사라지고 나타남 1000이 1초 기본은 400
- $('#point').css('background-color','lightgoldenrodyellow')
- 제이쿼리에서 css를 처리할 수 있다.
- .on('click','#btnGO',function(){   
    $(this).fadeOut(1000);
- 위처럼 #btnGO라는 자기자신에게 하는 명령이 중복되면 $(this)로 처리해서 간단한 코딩을 한다.
- css적용을 할때 다른 css설정을 여러개 쓰고싶으면
- .css({'background-color':'lightgoldenrodyellow','color':'red'}) 이렇게 쓴다.
- 코딩간편화를 위해 obj={'background-color':'lightgoldenrodyellow','color':'red'}  .css(obj) 이렇게 간편화시키기도한다.
- <style>
  .style1 
  {background-color : lightgoldenrodyellow;
  color:red
  };
  .style2 
  {background-color : white; 
  color:blue
  };
- 위의방식으로 스타일css를 추가해서 하나의 문서에서 공통으로 가져다 쓸 수 있다.


========================================================

- 객실관리 프로그램
- 웹페이지 화면이 두개.
- 오늘 할일은 html과 css구성하기
- 1st 페이지
- 객실관리  예약관리(밑줄)
- 객실목록 : 백두산(스위트룸 4) 한라산(패밀리룸 6) 나머지산 등등
- 메뉴 : 객실이름(검색메뉴)(input type text), 객실분류(여러방의 종류들 스위트룸,패밀리룸, 더블룸, 싱글룸)(input type select option), 숙박가능인원(input type=number로 늘리고 줄이기), 1박요금(input type money), 
밑에 등록, 삭제, Clear버튼 3개 넣기
- 나중에 메뉴를 설명하는 부분을 꼭 넣기. 말풍선을 넣는다던가 한쪽의 공간에 설명을 넣기

-2nd 페이지
- 객실관리(밑줄) 예약관리
- 박스하나넣고 숙박기간 input type date로 하기
- 객실분류 input type select option and 옆에 검색or찾기 버튼
- 박스 밑에 또다른 큰 박스로 그 기간동안 예약 가능한 방리스트를 쫙 펼쳐놓기
- 오른쪽또다른 박스로 예약된 객실을 박스 안에 리스트로 나타나게한다.
- 가운데 공간에 객실이름, 숙박기간, 숙박인원, 총 숙박비, 예약자 모바일 정보가 나오게 한다.
- 등록, 취소, Clear



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
=============================================
- input type의 radio는 같은 name, id로 묶어야 그 중 한가지만 선택 가능하다.

- var obj={}; 자바스크립트의 빈 객체를 선언.
- 서버-클라이언트 간의 데이터형식
- 자바스크립트 객체는 key value couple이다. 그리고 서버와 클라이언트 간의 데이터형식이라 중요하다.
- JavaScript Object Notation) -> JSON(제이슨) 형식
- obj={'name':'James','mobile':'77778888','gender':'male','region':'Cheonan'};
- obj['fname']=function(){document.write('myname')}
- JSON 부분 아는부분만 대충봐도 충분히 공부된다. 너무 어렵고 꼼꼼하게 공부하지말자. 지친다.

- p=parseInt(arPoint[i]) 처음 arPoint[]를 선언했을때는 안의 값은 어떻게 넣든 문자열이다. 그래서 parseInt를 통해서 arPoint[]의 값들을 정수값으로 변환해줘야한다.
- 배열 초기화를 시키는 방법은 arPoint=[];로 다시 빈값으로 정의해주는게 간편한 방법이다.

- Java의 Array : for(int i=0;i<arPoint.length;i++)
- ArrayList : for(int i=0;i<arPoint.size();i++)

- setTimeout : 일정 시간 후에 1회 실행
- setTimeout(함수명, 지연시간(ms)); <== 3000ms가 3초이다.
- (1) 함수선언 (2) 그 함수를 setTimeout에서 n초 지연후 실행
- clearTimeout : setTimeout을 취소
- setInterval : 일정 시간 간격으로 실행.
- clearInterval : setInterval을 취소

```
gn=0; let timer;
  function getResult(){ 
      alert("타이머가 시작됩니다.")
      gn=1;
      timer=setInterval(function(){
      console.log(gn);
      document.getElementsByName('point')[0].value=gn+"초가 지났습니다.";
      gn+=1;
  },1000)
```
- 이렇게 함수를 통째로 써서 작동시키는 경우도 있다. 해당 함수는 1초마다 1+gn초가 지났습니다라는 멘트를 text창에 출력시키는 함수이다. 1000은 ms단위로 1초이다.
- console.log(gn);은 검사의 콘솔창에 차례차례 값을 찍어내는 역할이다. 잘 작동하는지 디버깅하기위함이다. console알아둘것.
- 해당 함수는 비록 for문같은 반복문이 아니지만 setInterval이 가진 특성으로 인해 반복문의 성질을 띄고 있다. 그리고 많은 곳에 이용되니 꼭 외워두자.

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