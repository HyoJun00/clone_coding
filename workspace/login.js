// 빈칸 검사(입력하지 않았을때 뜨는 경고)
const loginEmail = document.querySelector('#login_email');
const loginPassword = document.querySelector('#login_password');

//블러상태에서 검사 후 경고메시지 출력하는 함수
function redMsg (){
  if(!this.value){
    this.style.border = "1px solid red";

    //동적으로 경고메시지 생성
    let p = document.createElement("p");
    p.style.color = "red";
    p.className = "error_msg";

    //입력필드에 아이디를 사용해서 현재 입력 필드가 무엇인지 정확하게 판별해야한다
    if(this.id === "login_email"){
      p.textContent = "이메일주소를 입력해주세요.";
    } else if(this.id === "login_password"){
      p.textContent = "비밀번호를 입력해주세요.";
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
loginEmail.addEventListener("blur", redMsg);
loginPassword.addEventListener("blur", redMsg);