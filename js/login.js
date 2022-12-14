
let loginBtn = document.querySelectorAll('.btn');
let loginBody = document.querySelector(".wrapper__modalForm-loginForm");
let registerBody = document.querySelector(".wrapper__modalForm-registerForm");

for (let i = 0; i < loginBtn.length; i++) {

	loginBtn[i].addEventListener('click', function() {
        console.log("asadbek");
		for (let x = 0; x < loginBtn.length; x++) {
			if (loginBtn[x] == this) {
				loginBtn[x].classList.add('actionBtn');
                loginBody.style.display = 'none';
                registerBody.style.display = 'block';

			} else {
				loginBtn[x].classList.remove('actionBtn');
                registerBody.style.display = "none";
                loginBody.style.display = "block";
			}
		}
	});
}



let form = document.querySelector("#form");
let btnLogin = document.querySelector('.btnLogin');
let loginCard = document.querySelector('.login-card');
let loginPagesDelete =document.querySelector('.delete');



form.addEventListener('submit' , function(e) {
    e.preventDefault();


    loginCard.style.transform = "scale(1)";
    
    // loginCard.classList.toggle("login-card")
    
    
    // // innerHTML chaqirilayapdi function
    
    
    checkValue();
    checkBtn();
    
    // console.log("asadbek");

})

// input value

let userPhoneNumber = document.querySelector('.form__inputGroup-phone');
let userPassword = document.querySelector('.form__inputGroup-password');



function checkBtn() {

    let check = `

    <div class="box">
        <i class="fa fa-xmark delete" onclick=deletePage()></i>
        <p class="login-card-phone">
            <span>tel :</span>
            ${userPhoneNumber.value}
        </p>
        <p class="login-card-password">
            <span>password :</span>
            ${userPassword.value}
        </p>
        <i class="fa fa-check  check"></i>
        <span>
            sizning muvaqqiyatli ulandingiz
        </span>
    </div>

    `
    loginCard.innerHTML = check

}



// INPUT VALUE CHECK


// let checkArr = []

function checkValue() {

    let formPhoneNumber = document.querySelector(".form__inputGroup-phone");
    let formPassword = document.querySelector(".form__inputGroup-password");

    const check = {
        phone:formPhoneNumber.value,
        password:formPassword.value,

    }

    // location joyi

    // localStorage.setItem("formPhoneNumber", check.phone);
    // localStorage.setItem("formPassword", check.password);
    

    console.log(check.password, check.phone);

    // checkArr.push(check)


    if (check.phone.trim() === ""){
        alert("Telifon raqam kiriting " )
    } else if(check.password.trim() == "") {
        alert("**Parolni to'ldiring!")
        return false;
     } else if(check.password.trim().length < 8) {
        alert("**Parol uzunligi kamida 8 ta belgidan iborat bo'lishi kerak")
        return false;
     } else if(check.password.trim().length > 15) {
        alert("**Parol uzunligi 15 belgidan oshmasligi kerak")
        return false;
     } else {
        alert("Muffaqiyatli ulandingiz");
    }
    // checkBtn();


}


// delete function  index.html pages o'tish


function deletePage(){
    window.location.href = "index.html";
}











