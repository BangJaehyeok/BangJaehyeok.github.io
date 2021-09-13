#### 알아야할 사항

회의 참가 id : 425 532 9777

#### 20210824 (화) 작업
- 새로 스프링 레거시 프로젝트를 만든다.
- File - New - Others - Spring - Spring Legacy Project
- 이름 지정하고 밑에 Spring MVC Project 누르고
- com.human.app 누르고 프로젝트 생성
- 그리고 Homecontroller에서 run on server하고
- 404에러 뜨면 포트번호/app까지 지운다음에 실행해서 잘 나오면 굳

- Windows - properties - general - web browser에 크롬 선택
- use external web browser
- 계속 properties - web - JSP Files클릭 - Encoding부분을 ISO 어쩌구/유니코드(UTF-8)로 설정
- 위의 설정을 하면 한글이 거의 깨지지않고 run on server를 하면 크롬창으로 뜨게한다.
- 그리고 home.jsp에서 
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
이걸 추가해준다.

- java는 서버프로그램 Homecontroller.java => 기본 서버프로그램 소스
- resources
- webapp -> 클라이언트 프로그램
- 웹앱 안쪽에 views - home.jsp - 기본클라이언트 웹페이지 소스

- Webpage(HTML/CSS/Javascript) + Java Tag지원 => JSP(Java Server Page)

- 예를 들면 controller만드세요 하면 java폴더의 밑에밑에 쭈욱가서 java파일 형식으로 컨트롤러 파일을 생성한다. 
- 홈컨트롤러도 근본적으로 자바 클래스이다.

- 프로젝트의 환경설정 : 프로그램이 돌아가게하는 환경을 세팅
- web.xml
- pom.xml
- servlet-context.xml
- root-context.xml


#### 20210823 (월) 작업
- having은 group by 뒤에 쓰며 group by의 조건을 써준다.
- select 칼럼명1,...칼럼명N, 집계함수 from 테이블명
  group by 칼럼명1,...,칼럼명N
  having 집게함수에 대한 조건
  order by 칼럼명
- 어떤 것에 대해 group by를 했으면 select 뒤에도 그만큼 칼럼명을 써줘야한다.
- 집계함수 : count,distinct,sum,avg,min,max

- 집합 연산자 
- 합집합 : Union
- 교집합 : Intersect
- 차집합 : Minus

- 테이블명 수정 : alter table 이전테이블명 rename to 사용할 테이블명;

- Union 합집합 연산
select 컬럼명 from 테이블명 where country='한국'
union select 컬럼명 from 테이블명 where country='일본';

- Minus 차집합 연산(둘이 겹치는것을 제외한 한국의 남은 항목들 출력)
select goods from goods where country='한국'
minus
select goods from goods where country='일본';
- 일본의 남은 항목을 보고싶으면 한국과 일본의 자리를 바꾸면된다.

- Intersect 교집합 연산
select goods from goods where country='한국'
minus
select goods from goods where country='일본';

- 집합연산자를 쓸때 주의사항, 제한사항
1. 집합 연산자로 연결되는 각 select문의 컬럼의 갯수와 타입이 각각 일치해야한다. (제일 중요!)
2. select문을 연결할때 order by 절은 마지막에 붙인다.
3. BLOB, CLOB, BFILE 타입의 컬럼에 대해서는 연산자를 사용할 수 없다.
4. UNION, INTERSECT, MINUS 연산자는 LONG형 타입 컬럼에는 사용할 수 없다.(UNION ALL에는 적용 가능)

- JOIN
- 조인 : 테이블 사이를 연결해준다. where절에서 조인을 설정해준다.

select a.emp_name, b.department_name
from employees a, departments b
where a.department_id=b.department_id;

- 여기서 employees와 departments테이블에서 두 테이블에서 공통된 값을 가진 컬럼을 등호 연산자로 연결해 조인 조건에 일치하는 두 컬럼값이 같은 행을 출력하는 것이다. 
- 즉, join하기 위해서는 where조건에서 두 테이블의 공통된 값을 가진 컬럼을 등호연산자로 연결하는 것이 필수이다!!

select a.emp_name,b.job_title 
from employees a, jobs b
where a.job_id=b.job_id;

- employees를 a라고하고, jobs 테이블을 b라고 한다. 그러면 좀더 간편하게 짤 수 있다.
- employees와 jobs테이블의 공통된 job_id라는 컬럼을 연결시켜 조인했다.

- 내부조인(inner join) 
1. 동등조인(equi-join) : where조건에서 같다라고 하는 것. 그리고 가장 많이 쓰인다. 거의 80% 이상. 4,5개 이상 테이블을 동등조인으로 묶기도 함.
2. 세미조인(semi-join) : (in/exists)
3. Anti-join : != 동등조인의 반대. not equal
4. self-join : from에 하나의 테이블을 두개쓴다. 즉, 자기자신을 참조하는 것.

- 셀프조인 : 직원들의 이름, 직원들의 id, 직원들의 매니저 이름을 출력. 그런데 매니저 이름을 셀프조인해서 연결,출력한다.
select a.emp_name, a.employee_id, b.emp_name as manager_name
from employees a, employees b
where a.manager_id=b.employee_id;
여기서 where마지막 b.employee_id(+); 처럼 (+)처리한다면 null값도 출력이된다.
- 셀프조인 : 게시판의 댓글, 대댓글 처리할때 셀프조인을 이용한다. 
- 외부조인

- 서브쿼리 : SQL안에 보조로 사용되는 또 다른 SELECT문을 의미한다.
- select 다음에 있으면 일반 서브쿼리
- from 뒤에 있으면 인라인 뷰
- where절 뒤에 있으면 중첩쿼리

- 중첩쿼리 예 : where절에 있는 select문이 먼저 실행된다.
select count(*) from employees
where salary>=(select avg(salary) from employees);
- 이것은 where의 select가 먼저 실행된다. 즉, employees 테이블의 salary 평균을 먼저 구하고 각자의 salary가 평균보다 크거나 같은 데이터의 갯수(count)를 구하라.

- 또다른 중첩쿼리의 예(위와 비슷)
- select emp_name,salary from employees
where salary<=(select avg(salary) from employees)
order by salary desc;

- 제니퍼 왈렌 총무기획부 <- departments테이블과 조인
- from 뒤에 테이블 이름 추가
- where 뒤에는 조인조건이 and로 연결돼서 추가.

select a.emp_name,a.department_id,b.department_name
from employees a, departments b
where b.department_id 
in (select department_id from departments where parent_id is null)
and a.department_id=b.department_id ;

select a.emp_name, b.department_name
from (select emp_name,department_id from employees) a,
 (select department_name, department_id from departments where parent_id is null) b
 where a.department_id=b.department_id;

- 위 두개의 sql문은 똑같은 결과를 출력해낸다. 사람의 개성에 따라 다름.
- from에다 넣는건 인라인 서브쿼리, where에 넣는건 중첩쿼리

- 서브쿼리와 조인이 섞인 형태 엄청 많이 쓴다. 잘 외워서 잘 써먹도록하자.

- 사번,직원이름,매니저이름,부서명,직위명을 출력하시오.(단, 사번, 직원이름은 employee테이블에, 매니저 이름도 employee테이블에 있는데 employee_id와 같은 속성을 갖는다. 그리고, department_name은 deaprtments테이블, job_title은 jobs테이블에 있다.)

select a.employee_id, a.emp_name, b.emp_name, c.department_name, d.job_title
from employees a, employees b, departments c, jobs d
where  a.job_id=d.job_id and a.department_id=c.department_id 
and a.manager_id=b.employee_id(+)
order by a.employee_id;

마지막 위에 a.manager_id=b.employee_id(+)를 통해 manager_id가 null값을 가진 데이터까지 join한다. 

#### 20210820 (금) 작업
- sql문이 길고 자세할수록 나중에 다른 작업이 수월해지고 짧아진다.

- update employees set salary=8500 where salary between 5000 and 6000;
- update employees set salary=8500 where salary>=5000 and salary<=6000;
- 위와 아래는 같은 뜻이다. salary를 2번 쓰는 대신 between을 써서 간단하게 처리한다.

- 보통 delete를 쓴다면 where조건이 있는지 꼭 확인해야한다. 전체를 다 삭제하는 경우는 드물다.
- delete from 테이블명 where 조건문

- 컬럼명 변경하기
- alter table 테이블명 rename column 변경할 컬럼명 to 새로운 컬럼명;

- 데이터의 무결성(Integrity), 일관성(consistency)
- 예를 들어, select*from employees where salary=0; => 이런것은 쓸모없는 garbage data이다.

- insert에만 where를 쓰지 않는다. 사실 쓸필요없다.

- 데이터 정렬 2가지방법 : 오름차순(작은 순서에서 큰순서로 커진다. or 알파벳순서), 내림차순(점점 숫자가 내려간다. 작아진다. 알파벳의 역순)
- 이럴때 order by를 쓴다.(오름차순)
- 예) select employee_id, emp_name,salary from employees order by employee_id; 
- select * from employees order by hire_date; => 입사를 가장 먼저한 사람 순으로 오름차순 정렬된다.

- 무엇이 클까? 숫자<대문자<소문자 10<100  'a'<'b'  'a'<'ab' 'A'<'a'  '19'<'1a'
- 'aaaa'<'aaaaa' 'aaa'<'aaa ' 끝에 공백이 있으면 같아보여도 더 크다.
- 문자열 '19'와 '100'은 '19'가 더 크다. 두번째 문자열이 9가 더 커서그럼. 앞에서부터 한글자씩 비교하다가 차이가 생기면 그담은 고려안함.

- 오름차순 : order by [asc]생략
- 내림차순 : order by desc ex)select * from student order by city desc;
- 끝에 desc를 붙여준다. 

- 월급이 5000에서 6000인 사이의 직원의 이름을 내림차순으로 정렬해서 보여주기;
- select * from employees where salary between 5000 and 6000 order by emp_name desc;
- where가 먼저 나오고 그다음에 order by를 써준다.

- 이름이 David로 시작하는 사람을 찾는 것 like를 사용
- select*from employees where emp_name like 'David%' order by emp_name;
- 이름이 ~son으로 끝나는 사람 찾는 방법 like '%son';
- 이름 중간에 he가 들어가는 사람 찾는 방법 like '%he%';
- like의 단점 : 조금 느려진다. 문자열에만 사용할 수 있다. 숫자는 안됨.
- 만약 %가 없다면 like는 그저 =와 같다.
- %는 0개 이상의 문자들인데, _는 한글자만 찾고싶을때이다. 
- ex) like 'joh_' joh로 시작하는 4글자 문자열을 찾는 것.
- Al로 시작하고 n으로 끝나는 사람을 찾는다. => like 'Al%n'
- 성은 상관없고 공백 후에 L로시작하는사람 -> like '% L%'
- 이름이 5글자로 이루어지고 D로 시작하는사람 -> like 'D____ %'

- select emp_name,salary from employees where salary in (2000,3000,5000)
-> salary가 2000,3000,4000인 경우를 출력하는 것이다. 
- 반대로 not in도 있다.
- select emp_name,salary from employees where salary in (2000,3000,5000)
- salary가 2000,3000,5000이 아닌 모든 경우들을 출력하는 것.
- select * from employees where COMMISSION_PCT is not null; => null이 아닌 모든 것을 구한다. 

- SQL의 모든 함수는 반환값이 있다. 즉, 입력이 있으면 출력도 있다.
- 숫자함수, 문자함수, 날짜함수, 변환함수가 있다.
- ABS();
- 오라클은 반드시 select/from이 같이 있어야한다. from이 빠지면 에러가 난다.
- 그래서 select abs(-12) from dual; 써야할 테이블이름이 없으면 dual로 처리한다.
- abs(-12)처럼 출처가 없는 데이터연산을 해야할때 dual;로 처리한다.

- select power(5,3) from dual; 5의 3제곱. power는 제곱을 구한다.
- sqrt(16) = 4 루트처리한다.
- mod(10,3) 10을 3으로 나눈 나머지를 구한다. mod는 나머지 구하기.
- select ceil(10.123), floor(10.123) from dual;
- ceil()은 주어진 값보다 큰 정수중 가장 작은 정수 즉, 올림처리.
- floor()는 주어진 값보다 작은 정수중 가장 큰 정수 즉, 내림처리.
- ceil, floor 모두 정수가 주어지면 그냥 주어진 정수가 출력된다.
- 이외에도 숫자함수는 많다. ceil, floor, round, trunc, remainer, exp, log...

- 문자함수 : initcap(맨 앞글자만 대문자로 변환), lower(모두 소문자로 변환), upper(모두 대문자로 변환)
- concat 대신 ||요렇게 쓴다.
- select employee_id||emp_name from employees; 이렇게하면 정한 컬럼들이 붙어져나온다.
- substr(컬럼명,시작인덱스,길이) 
- 오라클은 파스칼언어계열(오라클,SQL,PL/SQL)이기 때문에 인덱스 시작이 0이 아닌 1이다.
- JS에서 trim은 좌우 공백을 다 없애는 것이었다.
- SQL에서는 ltrim(좌공백제거) rtrim(우공백제거)이 있다. 만약 양쪽 다 공백을 없애려면 ltrim(rtrim(emp_name)) from employees;이렇게 써야한다.
- lpad, rpad
- lpad(컬럼명/문자열,전체길이,채울문자열)
- select lpad(emp_name,15,'*') from employees; => 컬럼명/문자열의 길이가 주어진 전체길이보다 작으면 왼쪽을 남는만큼 채울 문자열로 채운다.
- rpad는 오른쪽으로 채운다.
- replace(컬럼명,두번째문자열,세번째문자열) : 컬럼명/문자열에서 두번째 문자열에 해당하는 부분을 세번째 문자열로 교체
- select replace(emp_name,' ','-') from employees order by emp_name;
- instr : 컬럼명, 문자열에서 두번째문자열의 시작하는 인덱스 값을 반환
- select emp_name,instr(emp_name,'a') from employees order by emp_name;

- 날짜함수 : sysdate,systimestamp,add_months,months_between,round, next_day
- sysdate만 좀 쓴다. select sysdate from dual; 현재 년/월/일이 뜬다.

- 변환함수 : to_char, to_number, to_date
- to_char : 문자로 형변환한다. 
- select to_char(sysdate,'YYYY-MM-DD DAY') from dual; 현재의 날짜를 주어진 문자형식으로 바꾸어 출력한다. 21-08-20 이런 sysdate가 2021-08-20 금요일 이렇게 바뀌어 출력됨.
- select emp_name, to_char(hire_date,'YYYY-MM-DD DAY') from employees;
- to_char는 많이 사용한다.
- 반대로 문자열을 숫자로 전환할때는 to_number를 써야한다.

- null관련 함수 : nvl, nullif가 많이 쓰인다.
- nvl : null값을 다른 값으로 대체하고 싶을 때 nvl(컬럼명,대체할값)
- 대체할 값은 해당 컬럼의 타입을 따라간다.
- select emp_name, nvl (manager_id,0) from employees order by emp_name;

- 집계함수 : count,distinct,sum,avg,min,max
- count랑 distinct 엄청 많이 쓴다. 엄청엄청많이 쓴다.
- count : 해당 테이블의 개수를 세는 함수 select count(*) count(commission_pct) from employess;
- count안에 컬럼명을 넣으면 null값을 제외한 컬럼의 레코드를 센다.
- count안의 값을 nvl(컬럼명,값)을 준다면 null의 값이 처리되어 테이블의 모든 값의 개수가 나타난다. 

- distinct : 컬럼안의 값중에 대표값들만 보여줌. 즉, 10,10,10,20,40,30,20,10,20, 이렇게 난잡하게 있는데 이중 중복된값들은 모두 치우고 10,20,30,40 이렇게만 보여줌.
- select distinct department_id FROM EMPLOYEES order by department_id;
- distinct는 많이 쓴다. 중요함.

- as : 별칭붙여주기
- 컬럼명이 너무 길다면 as를 뒤에 붙여 별칭을 만들어준다. 
- select distinct cust_year_of_birth as birth_year from customers order by birth_year;
- cust_year_of_birth를 birth_year로 별칭을 만들어 뒤에 birth_year만 만들었다.

- select distinct cust_year_of_birth as byear from customers order by byear;
- select distinct cust_year_of_birth from customers order by 1;
- by 1은 컬럼의 인덱스값.
- 둘다 같은 결과를 만들어낸다. 

- select employee_id, emp_name, manager_id from employees order by emp_name;
- 여기서 employee_id가 index 1이고, emp_name이 index 2이다. 그래서 order by 1을 해도 같은 결과가 나온다.
- 원래 테이블의 컬럼값이 아닌 해당 설정할때 가져올 컬럼의 인덱스값을 쓴다.

- select employee_id, emp_name, manager_id from employees order by manager_id,emp_name;
=> order by 에 2가지 요소를 쓴다면 처음 쓴 요소로 먼저 정렬을 하고 그다음에 쓴 요소로 정렬을 한다. 이중정렬. 즉, 위의 예문을 통해서 말하면 manager_id로 먼저 정렬한 후 manager_id가 같은 사람들 중에서도 emp_name 순으로 정렬이 된다.

- select sum(loan_jan_amt)  from kor_loan_status where region='세종' and gubun='기타대출'; 
-> kor_loan_status 테이블에 region이 세종이고, gubun이 기타대출의 sum(합)을 구하는 식

- 수학점수 합계/평균, 국어점수 합계/평균 하나의 SQL문으로 출력
- select sum(math), avg(math), sum(korean), avg(korean) from student;
- 최소값 min 최대값 max
- select min(math), min(korean), max(math), max(korean) from student;

- group by : 그 그룹에 속한 레코드 개수를 알 수 있다.
- select department_id, count(*) from employees group by department_id order by department_id; 부서별로 몇명인가를 알아내는 법 
- department_id별 count(*)를 하는 것.
- group by 뒤에 쓸 컬럼은 무조건 select 뒤에 모두 나열돼야한다. group by 뒤에 나온 컬럼만큼만 select뒤에 올 수 있다.
- select에 나열된 컬럼 뒤에는 무조건 하나이상의 집계함수(count,distinct,sum...)가 있어야 한다.
- 뒤에 count가 오니까 ~별 개수를 출력한다.

- customers내에서 남자/여자 회원의 각 인원수를 구한다.
- select cust_gender, count(*) from customers group by cust_gender;

- group by 와 따라다니는 것 = having
- having은 집계합수와 같이 쓰인다.
- select department_id, count(*)  as cnt from employees 
  group by department_id 
  having count(*) between 2 and 10 
  order by cnt;
- order by 에는 as처리한 cnt나 2라는 숫자로 count(*)를 정해서 쓸 수 있지만
 having 에는 온전히 count(*)를 써야 작동한다.
- 부서ID와 부서에 속한 사람들 수를 세는데 부서ID로 묶는 중에 부서에 속한 사람들 수가 2~10명 중이어야하고 부서에 속한 사람들 수대로 오름차순정렬한다.
- having은 group by에 속한 또다른 where이다. 

select * from kor_loan_status;
-- 각 지역별 대출 종류별 합계
select region, gubun,
#### 20210819 (목) 작업
- 데이터베이스 본격적인 시작
- 세로로 한줄을 field/column이라고한다. 열
- 가로로 한줄을 row/record(행)이라고 한다.
- 데이터를 추가하면 행이 늘어난다.
- 테이블구조 => 테이블 스키마 라고 말하는 경우가 많다.

- SQL(Structured Query Language) : 구조화된 질의언어 
- SQL에서는 작은따옴표 안에있는것만 문자열로 인식한다. 큰따옴표도안됨.

- insert into 테이블명 values (값1,값2,...,값n);
-> desc를 해서 나온 컬럼명 순서대로 값을 적어야한다.
- insert into 테이블명(컬럼명1,...,컬럼명N) values(값1,...,값N);
-> 내맘대로 컬럼명순서를 넣고싶을때 먼저 컬럼명을 지정하고 값을 넣는다.
- insert into 테이블명 set 컬럼명1=값1,컬럼명2=값2,...,컬럼명N=값N (MySQL에서만 통용)

- 데이터 조회(READ)
- select 컬럼명1,...,컬럼명N from 테이블명
- select * from 테이블명;

- select table_name from user_tables;
- desc 테이블명;
- select문을 거의 80%이상 쓴다. 익숙해지자.

- delete from 테이블명 => 테이블 내의 실제데이터(데이터)를 날린다. rollback으로 되돌릴 수 있다.
- drop table 테이블명 => 테이블의 schema(메타데이터)를 날려버린다. rollback으로 되돌릴 수 없음. 위험함.
진짜진짜 조심해야함. drop이녀석

- update 테이블명 set 컬럼명1=값1,컬럼명2=값2,...,컬럼명N=값N;

- create table total_sell(
menu_name varchar2(10) 이렇게 create할때 varchar2(10)이면 10바이트라는 뜻이다. 그런데 한글은 한글자가 2바이트라서 한글로는 5글자밖에 못들어간다. 그 이상은 넘쳐서 에러가 뜬다. 그것을 잘 계산해서 길이를 넣자.

문자열 타입 (오라클)char, varchar2, long/(MySQL)char, varchar, text
정수형 타입 number(N), number
실수형 타입 number(N,P), number, float
날짜/시간 타입 date,timestamp(ms)

- create table timetest(nowdate date,nowtime timestamp);
- insert into timetest values(sysdate, systimestamp);
=> 보통 위가 정석이지만 위처럼 sysdate, systimestamp를 쓰지않는다.

- create table timetest(created char(10),updated char(19));
- insert into timetest values('1994-05-05','2021-08-19 12:09:00');
- select*from timetest;
=> 위처럼 create하고 insert해주는 것이 현장에서는 더 편리하다.

- LOB(Large OBject) : 매우 큰 오브젝트 : 용량이 큰 영상,이미지파일
- 그런데 영상,이미지파일을 DB에 넣으면 처리속도가 엄청느려진다.
- 이미지/동영상을 DB에 저장하는 법 
- 1. 이미지/동영상 파일이름을 DB테이블에 문자열데이터로 저장
 ('http://image.human.com/student/img/파일이름.jpg')
- 2. 실제파일은 http://image.human.com/student/img폴더 안에 저장.
- 위치정보만 DB에 저장하는 것이 속도가 제일 빠르다.

- update는 데이터값을 수정하는 것이고, alter는 데이터 스키마를 수정하는 것이다.
- alter table 테이블명 drop 컬럼명
- alter table 테이블명 add 컬럼명 타입(길이)
- alter table 테이블명 modify 컬럼명 타입(길이) - 타입/길이만 변경
- alter table 테이블명 rename 컬럼명old to 컬럼명new - 타입길이는 불변, 컬럼명만 변경
- alter table 테이블명 change 컬럼명 새컬럼명 타입(길이) - 컬럼명, 타입(길이)도 바꿀 수 있다.

- 문자형 타입 중에 char와 varchar2의 차이는
- char는 주어진 길이까지 무조건 할당된다. 즉 char(10)인데 값으로 'time'이 들어가면 'time      '이렇게 나머지는 공백처리되어 10칸이 무조건 할당된다.
- 그러나 varchar2는 주어진 길이에 상관없이 넘치지만 않는다면 주어진 텍스트에 딱 맞게 처리된다. 즉, varchar2(10)이어도 'time'이 들어가면 'time' 딱 4칸만 할당되어 데이터낭비가 줄어든다.
- char는 생년월일, 주민번호 와 같이 데이터의 길이가 정해져있을때 좋다.

- sequence : 자동번호 생성
- create sequence 시퀀스명; => 1부터 시작해서 1씩 증가
- create sequence 시퀀스명 start with 시작값 increment by 2
 => 시작값부터 시작하여 2씩 증가하는 시퀀스.
- minivalue 최저값/maxvalue 최고값/ cycle 순환: 최저값에서 최고값으로 가면 다시 설정한 첫값으로 돌아가서 다시 찍힌다.
- 최고값 설정안하면 쭉쭉쭉 올라간다.
 - 이렇게 시퀀스를 생성한 후 시퀀스의 갯수를 알고싶으면
 - select seq_num.currval from dual; 이렇게 치면 알 수 있다.
 - insert into member values(seq_num.nextval,'Janna','F',26);
 이렇게 아이디자리에 seq_num.nextval을 넣으면 시퀀스를 넣어서 숫자가 찍힌다.

- select/update/delete 조건하에서 실행하는 경우가 대부분 <- where문
- select*from employees where salary>8000;
=> employees 테이블에서 salary가 8000보다 높은 데이터를 모두 출력하라.

select employee_id,emp_name, salary  from employees  where manager_id=100
=> manager의 사번이 100번인 모든사람의 이름, 사번, 월급을 조회

select 컬럼들 from 테이블명 where 조건.

월급이 5000불과 같거나 작은 사람들의 이름,월급,입사일자를 조회
select emp_name, salary, hire_date from employees where salary<=5000;

데이터 수정
update student set birthday='2000-12-30' where name='John';
=> student테이블에서 이름이 John인 사람의 생일을 2000-12-30으로 바꿔라.

update student set birthday='1994-05-05' where name='Jacob' or name='Jane'
update student set birthday='1999-05-05' where city='LosAngeles'
update student set birthday='1999-05-05' where birthday is null;
=> null의 값을 조건으로 쓰고싶으면 is null이렇게 써야한다.
update 테이블명 set 고쳐야할 내용 where 고칠대상의 조건


#### 20210818 (수) 작업
- 만약 데이터베이스가 없을때 설치하는 방법 하는 중.

- cmd에서 폴더이동방법 : cd \download
- 해당 폴더에서 파일 찾는법 : dir *.dmp

- sqlplus에 파일 임포트가 잘 되었는지 확인하는 방법
- sqlplus -> ora_user/human123으로 로그인
- select table_name from user_tables;
- 그래서 9개나 10개의 테이블이 존재하면 된다.

- DBMS(DataBase Management System)
- DBMS의 기능 = 데이터의 CRUD
- SQL(Structured Query Language)
- myts.dbf : 데이터베이스가 저장되는 파일
- DBMS는 myts.dbf라는 파일을 관리해준다. DBMS프로그램에게 명령을 내리거나 감시하는 프로그램을 SQL이라고한다. SQL로 데이터를 핸들링하거나 한다.

- column : 속성이 같은 것끼리 세로로 쫘아악 정렬한것
- 테이블 : 데이터가 보관되는 장소
- row record : 가로로로 하나의 데이터 객체를 가리키는 것.
- column의 속성을 field라고한다.
- view : readonly 조회만 가능한 테이블
- synonym : 별명(nickname/alias)을 붙인 객체
- index : 테이블데이터를 정리, 검색속도를 증가.
- sequence : 일련번호를 검색하기위해 사용됨.

- DDL(Data Definition Language) : 데이터정의언어
- DML(Data Manipulation Language) : 데이터조정언어
- 배우는건 주로 DML. 데이터를 핸들링하는 것

- SQL : Create Read Update Delete
- DML : insert select update delete
- DDL : create/grant/evoke select alter drop/truncate

- 대상 : DML(실제 데이터) DDL(데이터가 담긴 그릇에 관한 정보 즉, 메타데이터)

- create table/index/view/synonym/sequence 등 DDL문으로서, 생성하는 명령.
- cteate table 이름 (컬럼명1, 타입(길이), 컬럼명2 타입(길이),,,,);
- varchar : 가변길이 문자열

- create table student(
student_name VARCHAR2(25),
mobile varchar2(20),
gender char(1),
city varchar2(24)
);

- student라는 테이블을 생성함. 
- char라는 타입은 무조건 데이터를 한자리 차지한다. 그 자리가 공백이거나 없다고하더라도 무조건 한자리 차지해서 안쓰는 공간이 낭비된다. 
- 그러나 varchar2는 가변길이 문자열이기 때문에 빈공간이면 데이터를 차지하지 않는다. 따라서 요즘은 문자열이면 거의 대부분은 varchar2를 사용한다.

- insert into 테이블명 values(값1);

- alter table student modify(city varchar2(24)); -> 테이블student의 city컬럼의 최대값을 24로 수정한다.

- select * from 테이블명 : 모든 칼럼과 칼럼의 값들을 조회한다.
- select 칼럼명1,칼럼명2,,,,칼럼명N from 테이블명 : 특정칼럼을 보고싶다.

- update student set city='NewYork' where city='N';
- -> student라는 테이블에서 city컬럼의'N'값을 'NewYork'으로 변경한다.
- delete from student; => 해당 테이블의 모든 데이터를 삭제한다.

- 테이블 밑에 컬럼들의 이름, 타입들을 정의한 그런 구조들을 스키마(scheme)라고한다. 
- desc 테이블명; 명령어를 입력하면 출력창에 해당 테이블의 스키마가 나타난다.

- 타입의 종류 : char, varchar2, number(m,n):m:전체길이, n:소수점이하자리수
- number(5,0) : 0~99,999

- ALTER TABLE TABLE_NAME MODIFY COLUMN_NAME VARCHAR2(4000);
- -> 해당 table의 컬럼 타입을 변경하는 명령


#### 20210817 (화) 작업
- $.isNumeric(변수):변수가 숫자면 true, 문자열이면 false
- $.isArray() : 변수면 true, 아니면 false
- inArray(찾고자하는 것) : 괄호안의 문자,숫자가 배열안에 있으면 1, 없으면 -1
- trim() : '    hello world    '라는 문자열의 앞뒤 공백을 없앤채 출력하게 도와줌
- ex) 'hello world' 중간의 공백은 없애주지 않음

- 자바스크립트로 서버와 통신(data전달)
- HTML <-> Server통신
- <form method=post/get action=서버프로그램>
- <input type=submit/reset>
</form>
- form태그는 서버로 데이터를 submit해서 서버와 통신하게되어 좋았지만 전체화면이 refresh되어서 번거로운 단점이 있다.
- 그래서 javascript <-> Server 통신(data전달)을 생각해냄
- Ajax(Asynchronous Javascript And XML)
- XML -> HTML의 확장판
- ajax의 예 -> 네이버 로그인할때 전체화면이 다 날아오는게 아니라 로그인이 된 곳만 바뀌어서 회원정보가 표기되는부분만 날아와서 주고받는 데이터가 감소됨. 서버의 과부하가 덜 일어남.
- 데이터가 적으면 text, 많으면 JSON, 엄청 많으면 XML로 주고받는다. 거의 JSON이면 해결된다.
- 그래서 요즘은 form태그를 잘 안쓴다. ajax처리한다.

- 쿼리스트링(QueryString) = 서버프로그램에게 보내는 값들의 리스트
- 프로그램 경로명?key1=value1&key2=value2&key3=&key4=value4....
- {key1:value1,key2:value2,key3:value3,...}

========================================

- sql설치 그리고 초기설정

- sql설치하고 명령프롬프트 on
- sqlplus 입력
- user-name : system
- password : apmsetup
그다음
- create tablespace myts datafile 'c:\temp\myts.dbf' size 100m autoextend on next 5m;
- => 내가 작업한 내역이 해당 주소의 파일로 저장되고, 초기사이즈가 100mb할당되며 만약 초과된다면 5MB씩 자동으로 계속 용량이 추가할당된다.
이거 입력
- Tablespace created가 뜬다.
- 그리고
- create user ora_user identified by human123
- default tablespace myts
- temporary tablespace temp
- ;
- 이러면 user created라고한다.
- 위 명령어들은 일반user를 만드는 명령어다.

- 위의 system은 sql의 완전한 관리자이며 ora_user라는 것을 만들었다.
- 보통은 유저등급을 하나 만들어서 거기서 작업하고 그 이후에 특별한 일이 있으면 system을 만든 것이다.

- grant dba to ora_user; 를 입력하면 ora_user에게 거의 admin에 해당하는 권한을 부여한다.

- Database(Oracle) - SQL Developer - Human
- 데이터베이스와 사람사이를 이어주는 프로그램이 SQL디벨로퍼다. 즉, SQL디벨로퍼는 데이터베이스 그 자체는 아니다.


#### 20210816 (월) 작업
- rowspan : 표에서 위와 아래의 셀을 합치는 명령어
- <td rowspan=2> 해당 td가 아래로 2칸을 차지해서 위가 아래를 먹는 형상으로 합쳐진다.
- 그리고 합쳐진 밑의 칸 td는 삭제해야한다.
- 만약 4줄먹는다면 4줄 먹는만큼의 밑의 td들을 삭제해야한다.
- colspan : 표에서 좌우의 셀을 합치는 명령어
- colspan도 rowspan처럼 해줘야한다.
- <td colsapn=3> 그리고 먹은만큼 같은 tr의 td들을 삭제해준다.

- $('#tbl').find('tr:eq(1) td:eq(2)').text('A');
- $('#tbl tr.eq(1) td:eq(2)').text('A');
- 위와 아래 둘다 같은 결과를 나타낸다.

- snail의 기본개념 : 동서남북

- 제이쿼리의 $(document).ready는 가장 마지막에 실행된다. 그래서 body에 뭐가있든지 다 없애버리고 지만 남는다.
- 그래서 .ready안에 document.write쓰지말고
- .ready(function(){
    $('body').append('커맨드센터')
}) 이렇게 해서 나타내줘야한다.

- #:id , .:class 아무것도 없는 : tag
- $('#tbl') : id가 tbl인 element
- $('.board') : class가 board인걸 가진 element
- $('body'), $('form') : 해당 태그들을 다 가져옴.
- $('input[name=txtName]').val('park') : input태그중에 name이 txtName인 태그에다가 park를 집어넣어라. name만 지정되어있을때 name 호출방법은 이러하다.
- $('input[name=txtName]:first').val('park') txtName을 가진 input 태그들 중에 가장 첫번째에 park 값을 집어넣는다.
- $('input[name=txtName]:last').val('park') txtName을 가진 input 태그들 중에 가장 마지막에 park 값을 집어넣는다.
- $('input[name=txtName].last').val('park') txtName 이름을 가지고 클래스가 last인 input 태그에 park값을 집어넣는다.

- 배열에 관련해서 표시하는 방법은 valueforEach파일을 참고

- k=1
  $('#tbl tr').each(function(){
    $(this).find('td').each(function(){//여기 this는 tr을 가리키는 this
      $(this).text(k++);//여기 this는 td를 가리키는 this
    })
  })
- 제이쿼리를 잘 알려주는 가장 좋은 예문.

- 정규표현식(Regular Expression) : 특정한 규칙을 가진 문자열의 집합을 표현하는데 사용하는 형식 언어.
- 검색할때 대소문자 구분없이 쓴다. "[Tt]he"
- a* : a로 시작하는 모든 단어 *: 0개 이상의 모든 문자
- . -> 한개의 문자
- {n} -> 반복횟수
- []: 또는
- ^ -> ~로 시작하는
$ -> ~로 끝나는

- $('table tr').even().css('background-color','cyan');
- table의 tr의 짝수 인덱스 요소를 선택해 배경색을 cyan으로 바꾼다.
- 홀수번째 인덱스 요소 선택은 .odd()이다.

```
.on('click','table tr td',function(){ 
  if($(this).text()==''){
    $(this).text(a);
    a++
  }
  return false;
})

```
- 이거 잘 외워두자.
- 특히, if($(this).text()==''){ 여기서 $(this).text()

- close : 가깝다.
- closest 가장 가까운
- 표의 트리구조에서 가장 가까운 조상을 찾는것. 형제는 안찾음.
- $('#here').closet('table').prop('id'); => here아이디를 가진 녀석의 조상 중 가장 가까운 table의 id를 찾아 써라.

- trigger를 통해서 중복된 코드를 방지하고, 코드를 절약할 수 있다.
- append prepend : table의 안쪽이지만 tr,td보다 앞서서 찍히는것이 prepend, tr,td의 가장 뒤에 찍히는 것이 append 기준 태그의 안쪽 앞뒤에 추가
- after before : table의 바깥쪽에서 가장 앞이 before, table의 바로 밑부분에 after. 기준태그의 바깥 앞뒤에 추가.

- appendTo()와 append()는 서로 입력할 변수의 자리가 앞뒤로 바뀐것.

- gt(greater than) : ~보다 큰
- lt(less than) : ~보다 작은

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