#### 작업예정
- 1달간(프론트엔드) 주로 UI 계속 진행(vs code 개발환경) 하면서,
- 간간히 자바 & 스프링(이클립스-egov전자정부프레임워크개발환경) 기본실습진행.
- 간간간히, 오라클DB(SQL디벨로퍼개발환경) 기본실습진행. Ansi-SQL(표준SQL)
- 2달째부터(백엔드) 주로 스프링으로 수업이 진행(이력서 포폴용)
- egov는 자바기반 -> JDK(Java Development Kit 자바개발환경) 설치확인.
- JDK 실행 경로 추가
- 오라클자바는 8버전부터는 돈을 내야함. 이러한 이슈때문에 오픈JDK로 회사에서 변경함. 그래서 오라클자바 8~11버전을 지우고, 오픈JDK로 변경 후 이클립스를 사용할 예정.
- OPEN JDK 8버전(egov와 100%호환됨) 사용함.
- 톰캣 : 이클립스에서 웹프로그램 결과를 확인하는 라이브서버.(localhost:8080)
- 라이브서버(아파치서버) : VS Code에서 HTML 결과를 확인하는 라이브서버(localhost:5500)
- JRE : java Runtime Environment(자바실행환경) 자바앱을 실행할때만 사용
- JDK설치 - 개발하고, 실행할때.
- 점심 후 웹프로젝트1개(헬로월드-맛만볼거)
- 스프링프로젝트1개(헬로자바)-자바 기초를 실습(계속 가져가는 프로젝트)
- 자바에 익숙해진 후 스프링프로젝트를 이용해 VScode에서 만든 UI를 JSP로 변경한 후 스프링웹프로젝트를 진행함.


#### 20210521(금) 작업
- 반응형 게시판페이지(CRUD) CSS 처리 : Creat(Update) = board_wirte.html
- 글쓰기폼(부트스트랩을 적용) : 첨부파일부분, 내용입력부분 웹에디터 추가
- 부트스트랩(AdminLTE) : 제이쿼리 기반의 UI 템플릿(프레임워크) 구글에 adminlte검색
- adminlte 3.10 다운받고 압축풀고 dist, pages, plugins, index, index2, index3만 골라서 깃작업폴더에 admin폴더에 복사함
- board_write.html 파일에 bootstrap코어 임포트 + 서머노트 플러그인 임포트
- board_view.html 댓글 UI디자인(부트스트랩) 추가.
- 반응형 서브페이지들(로그인, 회원가입, 마이페이지).
- 관리자단 AdminLTE 적용.(회원관리CRUD, 게시판CRUD, 대시보드)
- 이클립스 헬로월드 실습. 1. 다이나믹 웹프로젝트(jsp만드는 방식) 만든 후 사용자단UI 실행해보기
- 스프링 (MVC)웹프로젝트 만들예정. 헬로 스프링 1개, 2달간 이 프로젝트로 계속 진행.
- 위 스프링 프로젝트에서 자바 기초도 이것으로 실습할 예정. -> html UI만든 것을 jsp로 변경하는 작업할 예정.

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