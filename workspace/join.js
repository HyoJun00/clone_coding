//전체동의
NodeList.prototype.map = Array.prototype.map;

const all = document.querySelector("input#check_all");
const terms = document.querySelectorAll("input.check");
console.log(terms);

//전체 동의 체크박스를 클릭할 때 마다 실행되는 이벤트 리스너
all.addEventListener("click", () => {
  terms.forEach((term) => {
    term.checked = all.checked;
  });
});

//약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
terms.forEach((term) => {
  //약관동의 체크박스를 나타내는 NodeList에 대해 forEach 메소드를 호출
  term.addEventListener("click", (e) => {
    //현재 반복중인 약관동의 체크박스에 대해 클릭 이벤트 리스너를 추가함
    all.checked = terms.map((term) => term.checked).filter((checked) => checked).length===6;
    console.log(all);
    console.log(term);
    console.log(terms);
    // .length === 6;
    //전체동의 체크박스 상태를 변경
    //terms.map((term) => term.checked) : 약관동의 체크박스들의 checked 속성값을 배열로 매핑
    //filter((checked) => checked) : checked가 true인 요소만 걸러냄
    //length === 3; : 체크박스에 선택된 개수가 3개인지 확인
  });
});

// 빈칸 검사(입력하지 않았을때 뜨는 경고)
const nameCheck = document.querySelector('#join_name');
const email = document.querySelector('#join_email');
const password = document.querySelector('#join_password');

//블러상태에서 검사 후 경고메시지 출력하는 함수
function redMsg (){
  if(!this.value){
    this.style.border = "1px solid red";

    //동적으로 경고메시지 생성
    let p = document.createElement("p");
    p.style.color = "red";
    p.className = "error_msg";

    //입력필드에 아이디를 사용해서 현재 입력 필드가 무엇인지 정확하게 판별해야한다
    if(this.id === "join_name"){
      p.textContent = "이름을 입력하세요.";
    } else if(this.id === "join_email"){
      p.textContent = "이메일을 입력하세요.";
    } else if(this.id === "join_password"){
      p.textContent = "비밀번호를 입력하세요.";
    }

    //메시지 표시되어있지 않으면 추가
    if(!this.parentElement.querySelector(".error_msg")){
       this.parentElement.appendChild(p);
    }
  }else{ // 입력 값이 유효하면 스타일 변경 메시지 제거
      this.style.border = "1px solid #009481";
      if(this.parentElement.querySelector(".error_msg")){
        this.parentElement.querySelector(".error_msg").remove();
      }
    }
  }

// 빈칸 검사 함수 실행
nameCheck.addEventListener("blur", redMsg);
email.addEventListener("blur", redMsg);
password.addEventListener("blur", redMsg);
