#### 20210914(화) 작업
- 프로그래밍 언어의 조건 : 제어구조, 변수사용, 알고리즘 구현
- R언어 <- 통계전용언어 with BigDATA(최소 1TB)
- SPSS : 통계데이터분석프로그램(프로그래밍기능X)
- R언어+Python = 금상첨화 서로 잘 호환됨. but 프로그래머보단 수학적인 학자들을 위한 ㄹㅇ 통계학적 언어들.
- ADAP(통계분석사) : 회귀분석,표준분포,추정치가설
- 파이썬 : 프로그래밍범용언어
- R언어 : 통계분석전용언어

- 자료구조(Data Structure)
- 파일입출력
- Word Cloud, Graph

- 책 24페이지에 나오는대로 R언어를 다운받기.
- R core = Engine
- RStudio도 설치해야한다. sql디벨로퍼 같은 존재.
- rstudio.com에 들어가서 무료버전을 다운받고 설치한다.

- n=10 n이라는 메모리공간에 10이란 값을 넣는다.
- R언어에서는 n=10이 아니라 n<-10 이렇게 표현한다.
- 즉, 숫자데이터 10을 n변수에 할당한다.라는 뜻.
- R언어는 배열형태의 데이터구조가 기본이다. 하나의 변수에 배열과 비슷한 데이터구조가 할당된다.
- install.packages('패키지명') -> R언어 통제하에 있는 폴더에 다운로드,설치
- library("패키지명") -> R스튜디오 안으로 load됨(R studio시작시마다).

- 단일형 : 한가지 데이터타입
- 다중형 : 여러가지 데이터타입이 동시에 들어감.
- 1차원(선), 2차원(면), 3차원(부피가 있다)
- 벡터-> 데이터 프레임
- 데이터프레임(표처럼 생김) : data.frame(변수명1,변수명2,...,변수명N)
- 데이터프레임 생성 전에 미리 변수명들을 정의해야한다.
- df<-data.frame(id,gender,age,area) 각각의 변수명을 지정하고, 데이터프레임을 생성한 후, df라는 변수에 집어넣는다.
- View(df)하면 생성한 데이터프레임을 표처럼 볼 수 있다.

- str()함수는 java처럼 문자열이 아니라 structure 즉, 구조를 보여주는 함수이다.

- 외부파일의 데이터를 읽어들이기
- Excel, text, CSV(콤마로 구분된 텍스트파일)
- R데이터의 확장자는 .rda이다.
- 외부 엑셀파일을 읽기위해서는 외부 패키지를 설치하고 패키지를 로드해야한다.
- install.packages("readxl") <-외부패키지 설치
- library(readxl) : 패키지로드
- excel<-read_excel("C:/Users/Family/Documents/RStudy/source/data_ex.xls")
- 여기서 주의할 점은 폴더경로를 입력할때 역슬래시를 모두 슬래시로 바꿔줘야한다.

- 텍스트파일 읽기(탭으로 분리된 텍스트파일)
- txtdata<-read.table("C:/Users/Family/Documents/RStudy/source/data_ex.txt")

- 텍스트파일 읽기(콤마로 분리)
- d1<-read.table("C:/Users/Family/Documents/RStudy/source/data_ex1.txt",sep=',')
- 뒤에 sep=','를 붙여 콤마로 분리되었다는걸 인식시킴

- 그런데 컬럼이 되어야할 것까지 내용이 되어버림. 그래서 뒤에 header = TRUE를 넣으면 맨 첫줄이 Head가 되어 컬럼이 된다.
- 첫줄을 Header로 간주할것인가 아닌가 Header=TRUE/FALSE 다 대문자로 해야 인식함.
- sep=',' 컬럼분리자
- skip = N : 처음부터 n줄을 건너띄고 나머지를 읽는다.
- nrows=N : 처음부터 n줄을 읽고 나머지는 안읽는다.
- 해당 불러오기는 File메뉴의 임포트에서 다양하게 임포트해올 수도 있다.(더 간단)
- r언어의 저장 확장자는 .rda이다.

- rda파일포맷으로 저장
- save()를 이용한다. save(데이터프레임명,file="저장경로/파일이름")
- csv파일 포맷으로 보관
- write.table(데이터프레임명,file="저장경로/파일이름")
- txt파일 포맷으로 보관
- write.table(데이터프레임명,file="저장경로/파일이름")

- 데이터분석 연산자
- +-*/ 이건 같다. 사칙연산
- 근데 나머지는 %% 이고, 몫은 %/% 이다.
- 제곱은 **또는 ^

- 비교연산 : ==,!=,>,<,>=...
- 논리연산 : &(and), |(or)

- View(데이터세트명) : View창을 통해 데이터세트의 데이터 확인
- str() : 데이터 구조 보기
- dim() : 데이터 행/열의 갯수 확인
- ls() : 데이터세트의 변수명들을 확인

- 변수명을 즉, 컬럼명을 바꾸고 싶으면 새로운 라이브러리를 깔아야한다.
- install.packages("dplyr") 이거하고 library(dplyr) 이렇게해서 호출한다.
- 그리고 exdata1<-rename(exdata1,Y17_AMT=AMT17,Y16_AMT=AMT16,GENDER=SEX)
- 주의할점은 새변수명=기존변수명 이다. 새로 지정할 변수명을 먼저 써줘야한다. 

- 새로운 컬럼 추가
- exdata1$amt <- exdata1$Y17_AMT + exdata1$Y16_AMT
- exdata1의 변수중($) amt를 만든다. 그 amt의 속성은 exdata1의 변수중 Y17_amt와 y16_amt를 더한 것이다.

- 조건을 달아서 컬럼,변수명을 추가
- exdata1$AGE50_YN<-ifelse(exdata1$AGE>=50,"Y","N")
- AGE50_YN을 새로 만드는데 AGE변수에서 50이 넘는 변수는Y,아니면 N처리하라.

- DB의 select에 해당하는 것 -> select()
- DB의 where에 해당하는 것 -> filter()
- exdata1 %>% select(ID) ID만 추출해서 보여줌
- exdata1 %>% select(ID,AREA,Y17_CNT)묶어서 보여줄수도 있음
- exdata1 %>% select(-AREA) 빼고싶은걸 빼고 나머지 보여줌
- exdata1 %>% filter(AREA=='서울') 서울만 골라냄
- exdata1 %>% filter(AREA=='서울') %>% select(-ID,-GENDER) 서울인것만 filter하고 거기서 ID와 GENDER를 뺀다.


#### 20210913(월) 작업
- Phthon.org에 접속 -> download -> 3.9.7버전을 다운로드
- Add Python.3.9.PATH를 체크하고 설치함
- IDLE을 누른다. 화면이 뜬다. IDLE창을 띄우고 코딩을 해도된다. 보통 비쥬얼스튜디오를 띄워서 코딩을 하기도한다.
- 확장프로그램가서 python을 선택해 가장 많이 다운받은거 설치한다.
- 이클립스 = open foundation
- VSCode = Microsoft
- IDE(Integrated Development Environment) : 통합개발환경
- 파이썬은 비쥬얼스튜디오에서 작업한다.
- 파이썬은 자바(Sunmicro System)보다 먼저 발표됨. (ㅎㄷㄷ;;)
- 인공지능, 통계가 주목받으며 파이썬이 갑자기 주목받음
- less code, do more 매우 쉬운 언어, 학습도 빠름
- 큰 단점 : 매우 느림(학교,연구소,실험실같은 비영리단체에서 사용)
- 영리단체에서는 너무 느려서 안씀. 
- 요즘 프로그래밍 언어가 나오면 프레임워크도 딸려나옴
- Java -> 본격적인 프레임워크 : Spring(2001)
- Python -> 매우 많은 프레임워크가 생겨남  ex)Django(웹서비스), TensorFlow(머신러닝), Flask
- 변수타입선언이 없다.
- 함수도 반환값 구분이 없다.
- switch문이 없다. 대신 if문으로 대체
- 중괄호 {}가 없다. 대신 들여쓰기로 구분
- 파이썬에서는 들여쓰기가 굉장히 중요하다.
- 점프투파이썬 : 교재로 좋음 웹사이트에 다 풀려있음.
- 점프투장고 : 입문용이라 좋다. 어려운게 없당.
- 받은 파이|썬프로그래밍 책은 리눅스 기반이다.
- 자바는 컴파일러 언어.
- 파이썬은 인터프리터 언어.
- *.cpp(C언어 파일확장명) 
- 컴파일러 언어는 소스코드에서 실행파일을 만든다.(*.cpp -> *.exe) 그 실행파일을 컴퓨터에서 실행한다. 소스코드를 실행파일로 만드는 과정을 컴파일(Compile)한다라고 부름. 소스코드를 몽땅 다 실행파일로 만들어서 실행. 컴파일하는 시간이 덜 걸림. 실행시간이 전체적으로 빠르다.
- 인터프리터 언어는 실행파일을 만드는 과정 없이 컴퓨터에 바로 컴퓨터를 실행한다. 대신 한줄 컴파일해서 실행하고 한줄 컴파일해서 컴퓨터에서 실행하고 그런 과정을 거친다.
- 가장 큰 차이는 실행파일의 유무이다. (.exe파일)
- 속도의 차이가 있지만 작은 프로그램의 경우 컴퓨터의 하드웨어적인 성능이 높아져 속도차이가 크지 않아졌다. 그래서 인터프리터언어가 각광받음.
- 자바는 컴파일러 언어라고 침.
- 자바스크립트는 웹브라우저언어이기 때문에 인터프리터 언어라고한다.
- 컴파일러언어는 에러가 1이라도 있으면 실행파일이 안생긴다.
- 인터프리터는 100줄이라면 9번째줄에 에러가 있으면 8번째줄까진 실행되고 그 이후는 에러가 생겨 실행이 안된다. 한줄한줄 실행하기 때문.
- **은 거듭제곱. 사칙연산이 굉장히 간단한 코드로 실행된다.
- 파이썬은 ''나 ""나 상관없다.

- 자바스크립트 변수선언 : let,var,const let i=10, const i=10;(const로 변수선언을 했을시 변경불가이다.)
- java로 변수선언 : int i=10; float f=3.14; 등
- Python : i=10이렇게 해도된다. 자동으로 숫자타입으로 인식한다.
- 자바, 자바스크립트는 증감연산자가 있다.(++,--) 또한 +=,-=,*=,/= 등이 있다. 논리연산자( &&, ||)
- 파이썬은 i=i+1이렇게한다. 증감연산자 같은게 없다. 논리연산자도  And, Or이렇게 쓴다.
- 파이썬의 if문은 이렇게 쓴다.
- if 조건 :
   들여쓰기 ...
- 파이썬의 for문은 for i in range(10): ... 이렇게 끝 ㅈㄴ간단
- 파이썬은 for문 중심의 언어. 다양한 for문이 있다.
- range(시작,끝+1,증감)
- range(시작, 끝+1) <= 증감이 1씩된다.
- range(끝+1) : 시작:0, 증감:+1 하나의 숫자만 쓴다면 끝숫자로 인식한다.
- range(10): 시작0에서 끝9까지 이다.
- 파이썬의 들여쓰기는 두칸 들여쓰기가 대충 표준이다. 너무 들여쓰기 하면 나중에 가로로 코드가 길어진다.
- for i in range(1,16,2):
    for j in range(1,3):
        print(i+j)
- for문 안의 for문도 가능.
- if문도 있다.
- i=2
j=3
if i>j:
    print(i)
else:
    print(j)
- 위처럼하면 j값인 3이 찍힌다.
- if 조건 :
    elif 조건2 :
    else:
- while 조건: break/continue를 쓴다.
- print (str(i)+'x'+str(j)+"="+str(i*j)) 이렇게 숫자타입에 str을 씌워주면 +를 써도 에러가 안나고 잘 붙어서 출력된다.
- import math를 해주면 해당 문서 안에서는 math함수를 쓸 수 있다. sqrt같은 것.
- import math
i=16
print(math.sqrt(i)) 이렇게 하면 답은 4.0 출력된다. import math를 안써주면 sqrt를 쓸 수 없다.
- f-string의 모양은 f와 {}만 알면 됩니다. 문자열 맨 앞에 f를 붙여주고, 중괄호 안에 직접 변수 이름이나 출력하고 싶은것을 바로 넣으면 됩니다.
f'문자열 {변수} 문자열'
-  str="BangJaeHyeok"
- print(f'name is [{str}]')
- 출력 :  name is [BangJaeHyeok]
- import math
- print(f'the value {math.pi:.3f}')
- 출력 : the value 3.142
- print문 end
- print("hello",end=" & ")
- 파이썬의 출력문은 print를 사용하며 두 개의 옵션을 사용할 수 있습니다.
- sep=" " 
 이 옵션을 이용하게 되면 print문의 출력문들 사이에 해당하는 내용을 넣을 수 있습니다. 기본 값으로는 공백이 들어가 있으며 이를 사용해 원하는 문자를 입력할 수 있습니다.
- end=" "
 이 옵션의 경우 print 문을 이용해 출력을 완료한 뒤의 내용을 수정할 수 있습니다. 기본 값으로는 개행(\n)이 들어가 있으며 이를 사용해 개행을 없애거나 원하는 문자를 입력할 수 있습니다.
 - i=12
j=24
print('i={}, j={}' .format(i,j)) => i=12, j=24
print('i={1}, j={0}' .format(i,j)) => i=24, j=12
- 파이썬에서는 곱하기가 반복연산으로도 쓰인다. 단순한 곱하기가 아니라.
str=5*' '
str=str+'*'
print(str) =>   *  
- 파이썬의 함수는 자바스크립트와 거의 같다. 대신 function이 아닌 def라고 한다.
- def f1(a,b,c):
...
return x
- 파이썬은 함수 호출전에 함수 정의(선언)가 먼저와야한다.
- def addBlank(n):
    return n*' '#n개만큼의 공백을 만드는 함수

for i in range(1,11):
    print(addBlank(i)+'*')
- 위처럼 한다면 addBlank라는 함수는 제대로 작동한다.
- 그러나 파이썬은 위에서 한줄한줄 처리해나가는 인터프리터언어라서
- 반대로 for가 위고 def addBlank라면 위먼저 해석되기 때문에 함수정의가 먼저 안된다고 인식해서 해당 for문을 돌릴 수 없다.

- List == Array(Javascript), ArrayList(Java)와 같다.
- Dictionary == Javascript의 Object
- Tuple, Set은 따로 없다.
- obj = {key:value1,key2:value2,...,keyN:valueN} 객체형 함수
- ar=[1,2,3,4,5]
- ar[0]=1, ar[2]=3
- l=[]
l.append(12)
l.append([1,2,3])
l.append("My name is BJH")
for i in l:
    print(i)
- 문자열들도 섞여서 l이라는 리스트에 추가된다.
- 리스트 안에 리스트를 넣어도 된다.
- l.remove로 리스트 안의 내용을 골라 삭제할 수 있다.

- Tuple(튜플): 리스트와 동일하나, 수정불가. 처음 생성할때만 값지정이 가능하고 그 이후에는 삽입,삭제 등이 불가능하다. 리스트와 다른점은 **수정불가!!
- remove, append가 불가능하다.

- 기존코딩방식으로 변수간 자리바꿈을 하는것은 임시변수를 만들어서 거기에 값을 넣어두고 바꿔야했다.
- x=10; y=20;
- let temp=-1;
- temp=x;
- x=y;
- y=temp;
- 이렇게 임시변수 temp로 만들어서 값을 넣어두고 바꿔야했다. 그런데 파이썬에서는
- x=10
- y=20
- x,y=y,x
- x,y=y,x 이렇게 하기만해도 바뀐다!! 혁명!! 와우!!

- Set(집합): 리스트와 동일, 수정가능, 그러나 중복값 불허!!
- Set은 중복값을 불허하기때문에 index가 없다. 근데 거의 안씀.

- Dictionary(사전) : key, value가 couple(쌍)을 이루고 있다.
- d1={'name':'BJH','age':28,'city':'CheonAn','mobile':'777'}
- 위처럼 key,value가 쌍으로 있다. 중복값 허용, 인덱스값 없음(index대신 key허용)
- value(값)은 중복을 허용하되, key는 중복을 허용하지 않는다.
- d1={'name':'BJH','age':28,'city':'CheonAn','mobile':'777'}
- d1['name']='John'
- d1['salary']='3000'
- 위처럼 같은 key값을 쓰면 해당 키의 값이 지워지고 새값이 추가된다.즉, 수정
- 그치만 없는 키값을 넣는다면 추가로 인식하고 새로운 key:value값이 생성된다.

- Java, Javascript에는 Null이라고 있지만 파이썬에는 없다. 대신 None을 쓴다.
- for i in d1:
    print(i)
print(" ")
for i in d1.values():
    print(i)
print(" ")
for i,j in d1.items():
    print(i,j)
- 첫번째 for문은 dictionary의 키값만 출력
- 두번째 for문은 dictionary의 value값만 출력
- 세번째 for문은 dictionary의 key,value 모두 출력
- x=1,2,3,4,5 print(x) ==> (1, 2, 3, 4, 5) x는 튜플이라는 뜻 수정불가.
- 괄호면 튜플이다.

- 어떤 값을 받아들이고 싶으면 input()을 쓴다. input()은 문자열로 인식된다.
n=input("숫자를 넣으시오.")
for i in range(int(n)):
    print(i)
이렇게 하면 숫자를 넣으시오가 발현된다. 그리고 숫자를 입력하면 0부터 해당숫자-1까지 출력된다.

- Java: n=Integer.parseInt(str);
- JS : n=parseInt(str);
- JS : n=Number(str);
- PY : n=int(str);

- Java => Scanner s = new Scanner(System.in);
String str = s.nextLine();
int n=s.nextInt();
System.out.println();
뭔가 값을 받아서 출력하기 위해 해야할 코딩들.
- PY: n=input()
print(n)
파이썬은 매우 간단하다.

- 모듈이라는 a.py파일에서 있는 함수들을 가져다 쓰고싶으면
- import a 라고 하면 된다.
- a.f1(m,n)
