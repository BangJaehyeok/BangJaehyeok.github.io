#### 20210806(금) 작업
- 오랜만의 vscode 반갑다
- 자바스크립트를 위한 vscode실행


#### 20210601(화) 작업
- 관리자단 AdminLTE적용-스프링시간|UI 디자인시간 선택 후 아래 작업 진행 예정
- 오늘부터 VS code -> 이클립스에서 작업.
- 회원관리CRUD-jsp, 게시판생성관리CRUD-jsp
- html을 분해(1개의 페이지를 2개로 분해. 1.header.jsp(메뉴공통), 2.footer.jsp(공통))
- 이클립스로 작업한 html 가져가서 -> resources 폴더(admin,home,root파일까지 복붙)로 배치
- 프런트 개발자에게 받아서 배치하는 것이 스프링 작업의 시작

#### 20210531(월) 작업
- ERD기준으로 게시판 UI수정.
- 관리자단 AdminLTE적용-스프링시간|UI 디자인시간 선택 후 아래 작업 진행 예정
- 회원관리CRUD-Html, 게시판생성관리CRUD-html
- 이클립스로 작업한 html 가져가서 -> resources 폴더(admin,home,root파일까지 복붙)로 배치
- 프런트 개발자에게 받아서 배치하는 것이 스프링 작업의 시작


#### 20210528(금) 작업
- 관리자단 admin/board_write.html, board_view.html(댓글 ajax 처리)
- 대시보드 home.html (최근 회원가입정보, 최근 게시물정보)
- 뒤로가기를 허용하면, 게시물 테러가 가능하다.(새로고침시 계속 트래픽이 쌓인다. 디도스처럼)
- 뒤로가기를 허용하지 않게 페이지를 이동하는 방식(Js에서는 location.replace함수사용)
- 뒤로가기를 허용하는 함수(Js에서는 location.href = '' 사용)
- 데이터를 전송할때 사용하는 문장-쿼리스트링 : ?key-value & key-value 쿼리스트링의 시작은 물음표.
- 소스 인스펙션(소스분석)
- UI트렌드용어 : 카드UI, 뱃지(명찰), 리본(이벤트 표시)

#### 20210527(목) 작업
- admin/board_list.html부터 시작.
- 관리자단 AdminLTE적용.(회원관리CURD-스프링작업시, 게시판CURD, 대시보드)
- 관리자단 AdminLTE적용 - 지금할것 : 게시판CRUD-html, 대시보드-html
                       - 스프링작업시 할 것 : 회원관리CRUD(바로jsp), 게시판생성관리CRUD(바로jsp)
- 관리자단 기본 템플릿 : 공통 UI부분 작업중.
- Ctrl+K + Ctrl+0 = 코드축소 = Ctrl+K+0 (코드구조 확인)
- Ctrl+k, Ctrl+J = 코드펼침 = Ctrl+K+J
- 문자줄바꿈안하기 text-nowrap
- row를 없애고 justify-contest-center를 추가해서 가운데정렬함.


#### 20210526(수) 작업
- 검색엔진에 최적화, 의미있는 태그를 사용했는가, <header>, <section>, <footer>, <article> 태그처럼 html5부터 만들어진 태그를 사용하면, 구글검색에 잘 노출된다.
- 유효성검사 : validation 입력값이 제대로 된 값인지 확인하는 과정.
- html5에는 내장된 유효성검사 = required(공백체크), type-"email"(이메일형식체크), type="password"(입력값을 숨김처리), type="number"(숫자체크)
- JS 유효성검사, 비밀번호 확인(2개 입력값을 체크)
- 반응형 서브페이지들(로그인, 회원가입, 마이페이지).
- HTML5부터는 유효성검사가 내장되어있기 때문에 JS로 빈칸인지 코딩할 필요가 없다. required속성을 태그에 집어넣으면 끝.
- 기획시, 메인1 css 네이밍, 서브1 css 네이밍을 기반으로 퍼블리셔, 프런트개발자가 CSS나 HTML 작업을 이어서한다.



#### 20210525(화) 작업
- css : 계층:조부 > 부 > 본인(timeline) > 자식(collapse timeline) > 손자(time-lable) > 증손자
- board_view.html 댓글 AdminLTE3의 페이징 UI 추가예정.
- 어제 스프링 프로젝트에서 5교시에 자바기초 시작예정
- 위 시작전 이클립스에서 프로젝트 익스플로러(윈도우 탐색기와 동일구조)와 패키지 익스플로러(폴더경로를 .으로 구분) 차이 확인.


#### 20210524(월) 작업
- 시간 형식(type): date(연월일), dateTime(연월일시분초), TimeStampt(연월일시분초)
- 타임스탬프가 1970년1월1일부터 지금까지 초를 계산한 결과값이다.
- 1970년1월1일부터 16억2천...초가 흐른시간이 현재시간.
- 부트스트랩 용어 : grid(12칸)시스템, modal, xs, md, lg, bs-부트스트랩, fa-폰트어썸
- 팝업창 : 모달창(modal-필수창: 작업후 다음으로 가능), 모달리스창(modalless-작업하고 상관없이 다중작업 가능)
- 폰트어썸(아이콘웹폰트): 아이콘을 확대해도 깨지지 않음(벡터이미지방식).
- 포토샵 디자인으로 아이콘을 만들면 확대시 깨짐(비트맵이미지=스칼라방식의 아이콘).
- 부트스트랩 그리드(모눈종이의 가로,세로선) 레이아웃 : 화면을 12개의 컬럼으로 분리해서 크기를 반응형으로 만든다.
- row(가로줄), col(세로칸), col-md(미디엄),xl-12(화면 가로크기를 12로 지정=100% 차지하게 처리)
- 반응형의 화면크기 : xs(750px 이하), sm(750px~970px), md(970px~1170), lg(1170px~)
- col-6(화면의 가로크기를 6으로 지정=50%), 가로크기를 지정하는 이유는 모바일, 테블릿, PC용일 때 가로크기를 지정해주기 위해서.
- board_view.html 댓글 UI디자인(부트스트랩) 추가.
- 반응형 서브페이지들(로그인, 회원가입, 마이페이지).
- 관리자단 AdminLTE 적용.(회원관리CRUD, 게시판CRUD, 대시보드)
- 톰캣(jsp를 해석) vs VS라이브서버(아파치서버-html해석)
- 자바소스(.java, .jsp) -> 컴파일(라인단위X-인터프리터X) -> class 파일(여기에 DB자료가 동적으로 입출력이 됨) -> html 번역(WAS-톰캣) -> IE, 크롬화면에 렌더링된다.
- localhost 도메인 = 127.0.0.1 아이피와 바인딩되는 도메인
- 이클립스 헬로월드 실습. 1. 다이나믹 웹프로젝트(jsp만드는 방식) 만든 후 사용자단UI 실행해보기
- jsp(1세대 2000년-게시판) -> 서블렛(2005년 2세대 servelet게시판)-> 스트러츠(2010년대 3세대프레임워크) -> 스프링(4세대 2013년대, 프레임워크)
- 2. 스프링 (MVC)웹프로젝트 만들예정. 헬로 스프링 1개, 2달간 이 프로젝트로 계속 진행.
- 위 스프링 프로젝트에서 자바 기초도 이것으로 실습할 예정. -> html UI만든 것을 jsp로 변경하는 작업할 예정.
- 백엔드 : 1.이클립스(스프링-규모가 큰 프로젝트), 2. 인텔리J(스프링부트-규모가 작은 프로젝트)


#### 20210521(금) 작업
- 반응형 게시판페이지(CRUD) CSS 처리 : Creat(Update) = board_wirte.html
- 글쓰기폼(부트스트랩을 적용) : 첨부파일부분, 내용입력부분 웹에디터 추가
- 부트스트랩(AdminLTE) : 제이쿼리 기반의 UI 템플릿(프레임워크) 구글에 adminlte검색
- adminlte 3.10 다운받고 압축풀고 dist, pages, plugins, index, index2, index3만 골라서 깃작업폴더에 admin폴더에 복사함
- board_write.html 파일에 bootstrap코어 임포트 + 서머노트 플러그인 임포트


### 이클립스 다운로드 방법
- https://drive.google.com/file/d/1BLj4XX9_ADx8NVZUZjcHxyjNJ6ZlEf_d/view
- 위 파일을 C드라이브에 직접 다운받는다. 
- 압축풀고 폴더의 jdk폴더의 bin의 주소를 복사한다.
- 내컴퓨터 우클릭 속성 - 고급시스템설정 - 환경변수 - 시스템변수 - path - 편집 - 주소를 복사.
- 서버말고는 다 삭제하기(톰캣도 다 삭제)

### 20210520(목) 작업.
- 메인페이지에서 시간이 걸리는 부분(프런트엔드) : 메뉴처리, 슬라이딩처리
- 메인페이지에서 시간이 걸리는 부분(백엔드) : 최근갤러리, 최근공지사항 DB데이터를 출력하는 부분
- 모바일용 게시판페이지(CRUD) CSS 스타일 처리 : Read(list,view페이지)
- Read-리스트형식(다중Map) : board_list.html 예)회원리스트(회원목록)
- Read-단일Map형식(key1:value1, key2:value2, key3:value3 ...) : board_view.html (회원상세보기, 회원1명만 보는 단일형식)
- 상세보기 페이지 댓글 디자인은 부트스트랩 디자인시(관리자단 작업시) 추가할 예정.
- 카멜표기법(낙타등표기법 ex) .bbsListTbl), 언더바표기법(_, ex) .bbs_title)
- href : hypertext reference (웹문서 참조)
- 정적(static) 컨텐츠 : html, css, js
- 동적(dynamic) 컨텐츠 : jsp(java스프링), py(python장고), PHP, C#(닷넷), Nodejs(익스프레스)
- (데이터변수) 바인딩 : 정적인 콘텐츠에 동적인 데이터를 넣어주는 것을 바인딩이라고 한다.
- 오후에 자바(스프링) 개발환경 설치, (이클립스:전자정부표준프레임워크의 개발환경 설치)
- 전자정부표준프레임워크 제작업체 : 삼성SDS, SK C&C, LG CNS 3개업체 협업으로 완성.
- 게시물 타이틀 넘치는 부분은 CSS처리했음. 스프링가서는 jsp에서 프로그램으로 처리할 예정.
- 태블릿 + PC용 CSS 스타일 처리
- 모바일 서브페이지 CSS 스타일 처리
- 태블릿 + PC용 CSS 스타일 처리
- 모바일+태블릿+PC 댓글시스템 CSS+제이쿼리+부트스트랩 처리
- AdminLTE(부트스트랩기반템플릿-반응형)를 이용해서 관리자단 디자인 만들기
- UI 디자인 마무리
- UI 구현 시작 ========= 스프링프로젝트 시작(자바+이클립스+오라클), 위에서 제작한 UI디자인을 이용해서 프로그램을 입히게된다. 
- 헤더영역, 푸터영역은 공통이다. 중간컨텐츠부분을 바꾸는것.


### 20210518(화) 작업내역
- 태블릿 메인 CSS 스타일 처리, PC용 메인 CSS 스타일 처리(반응형으로 제작)
- 반응형 페이지의 핵심기술은 미디어쿼리 명령어 사용, 가로크기를 %로 지정 (px 고정크기가 아닌 비율로 내부 컨텐츠 크기를 지정하는 방법)
- 네이버, 다음은 반응형 웹으로 만들지 않고 따로 m.naver.com처럼 아예 파일을 다르게 만들었다. 아직도 그렇게 유지하는 이유는 너무 오랫동안 고정되어있어서 바꾸기 어렵기 때문이다.
- 미디어(PC화면,스마트폰화면,프린터,태블릿화면) + 쿼리(질의어,질문)
- @media 미디어타입(screen, print 등등-all) and (min-width: 801px) {스타일 구현내용}
- 태블릿은 마우스 오버 기능을 넣을 필요가 없다.(손가락이 마우스라서)
- 배치 1 : JQurey 코어 임포트 이후 사용자가 지정한 js 배치를 해야함. 순서가 바뀌면 작동안함.
- 배치 2 : reset.css, mobile.css 등 임포트한 이후에 사용자가 지정한 tablet.css, pc.css를 배치해야 레이아웃이 깨지지 않는다.


#### 20210517(월) 작업내역
- 외부 data.js 파일에서 json데이터를 저장한 후 html에 불러와서 파싱
- 외부 사이트에서 제공하는(RestAIP서버) json데이터를 html에서 불러와서 파싱.
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 파싱(데이터를 분해해서 화면에 뿌려주는것)
- RestAIP서버 주소(빅데이터) : https://coroname.me/getdata

- 메인페이지에 자바스크립트(jQuery) 적용 (VS code + HTML5 + CSS + jQuery)
- 제이쿼리 적용 부분 : 메뉴, 슬라이드이미지 3개 처리 : 모바일 메인페이지 마무리
- 보통 이미지슬라이드 처리는 외부 라이브러리(Lib)를 사용(니보슬라이드, 캐로셀슬라이드)
- 외부 Lib사용않고 직접 만들어보기. OK
- 

#### 20210514(금) 작업내역
- 구문오류 : syntex(사인텍스) 오류(문법오류), 오탈자, ;이나 } 빠짐 등등
- 사용자 모바일 메인페이지 footer영역(이용약관, 개인정보취급 등등) cSS입히기
- 과제물 제출 준비
- 메인페이지에 자바스크립트(제이쿼리) 적용. 메뉴, 슬라이드이미지처리, top상단이동
- HTML유효성검사: https://validator.w3.org/
- CSS유효성검사: https://validator.w3.org/unicorn/?ucn_lang=ko
- 검사기준 : CSS3, HTML5
- 과제물 양식 : https://drive.google.com/file/d/1Q0d5tcDJEmJLUfDbjDKn--Xh4QOfLuy_/view
- json generator => json 데이터를 조건 하에 임의(무작위)로 만들어낼 수 있다.

### 20210513(목) 작업내역
- html5.html, css.html, js.html 학습완료
- jQuery 기본구조 실습함.
- 애니데스크 - 팀뷰어 대신 사용
- jQuery 미처리 작업은 다음주에. 오늘부터는 모바일 메인페이지 1개 만들고 과제물로 제출 - 프로그램 입히는 소스로 사용하게됨.
- jQuery 코어 다운받기 : min버전(압축-속도up), 일반버전(개발버전-속도normal)
- 작업폴더를 나누는 이유 : 관공서, 대학, 기업체의 웹프로그램(사이트)를 제작하게됨. 제작할 때, 1년간 무상 유지보수 이후 비용이 책정
- home폴더 기존작업물, 리뉴얼할때 기존폴더 home에 덮어쓰는 방식이 아님.
- 리뉴얼할 때 home2022 폴더를 새로 만들어 작업하게된다.
- 픽사베이에서 받은 이미지 3개 : 로고1, 슬라이드 이미지1, No Image 1 받고, 경로 적어놓기
- 로고 : https://pixabay.com/ko/vectors/%EB%A1%9C%EA%B3%A0-%EB%B0%B4%EB%93%9C-%EB%94%94%EC%9E%90%EC%9D%B8-2078018/
- 슬라이드 이미지 : https://pixabay.com/ko/photos/%EB%B2%9A%EA%BD%83-%EC%B2%B4%EB%A6%AC-%EC%9D%BC%EB%B3%B8%EC%96%B4-%EB%83%84%EC%83%88-%EA%BD%83-1260641/
- No Image : https://pixabay.com/ko/vectors/%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B2%84%ED%8A%BC-%EB%85%B9%EC%83%89-%ED%99%94%EC%9D%B4%ED%8A%B8-44529/




#### 20210512(수) 작업내역
- git clone으로 프로젝트를 가져온 경우 아래 내용을 추가해줘야함
- git config --list 확인에서 user.name, user.email 없으면 아래추가.
- 터미널에서 아래 2가지 실행
- 프로젝트를 1명이 제작하는 경우가 없기 때문에, 2명이상일때 소스수정한 사람 확인용 정보.



#### 20210511(화) 작업내역
- http://127.0.0.1:80[8000/9000/5500/6500] 80은 생략가능
- PC의 네트워크 내부주소(공통) : 127.0.0.1 ==  localhost 내부주소라 외부에서 접근 못함
- 고유주소 : yahoo.com(도메인) == 74.6.143.25(IP주소)
- 서버(응답하는 프로그램 = response) = 아파치서버, 톰캣서버
- 클라이언트(요청하는 프로그램 = request) = 웹브라우저
- 마크업이 태그로 구성되어있다. 태그 : <의미있는문자>...</의미있는문자>
- HTML도 버전이 있다. HTML5(현재사용), HTML4.01(구)
- 프로그램언어를 배운다면 3가지는 반드시 알아야함
    - 주석처리방법(모든프로그램 공통)
    - 디버그방법(자바스크립트 ~ 스프링)
    - CRUD(스프링+오라클DB)
- html 레이아웃 구조 제작
- 로렘 입숨 한글URL: http://guny.kr/stuff/klorem/#/dl-html
- 로렘 입숨 영어URL: https://loremipsum.io/generator/
- URL경로(path): /루트, /test/html5.html


##### 20210510(월) 작업내역
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
- 포트(port) : 포트번호로 구매. 서비스를 포트로 구분하는 것이 대세.
- 포트의 역할이 요즘 트렌드로 많이 쓰인다.
- 모든 서비스를 개별로 구매하는 것이 트렌드. => 마이크로서비스 RestAPI 서비스
- html : hyper text markup language = 태그를 사용하는 마크업 언어
- md : Markdown language = 태그를 사용하지 않는 마크다운 언어