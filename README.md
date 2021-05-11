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
- URL경로(path) : /루트, /test/html5.html



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