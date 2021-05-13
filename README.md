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

### jQuery JSON 데이터 파싱 
- 외부 data.js 파일에서 json데이터를 저장한 후 html에 불러와서 파싱
- 외부 사이트에서 제공하는(RestAIP서버) json데이터를 html에서 불러와서 파싱.
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 파싱(데이터를 분해해서 화면에 뿌려주는것)
- RestAIP서버 주소(빅데이터) : https://coroname.me/getdata


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