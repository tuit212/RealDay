
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



let form = document.querySelector(".form");
let btnLogin = document.querySelector('.btnLogin');
let loginCard = document.querySelector('.login-card');
let loginPagesDelete =document.querySelector('.delete');



btnLogin.addEventListener('click' , function(e) {
    e.preventDefault();

    btnLogin.classList.toggle("login-card")
    loginCard.style.display = "block";


    // innerHTML chaqirilayapdi function
    checkBtn();

    console.log("asadbek");
})




// input value

let userPhoneNumber = document.querySelector('.form__inputGroup-phone');
let userPassword = document.querySelector('.form__inputGroup-password');



function checkBtn() {

    let check = `

    <div class="box">
        <i class="fa fa-xmark delete"></i>
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
            sizning ma'lumotlaringiz saqlandi
        </span>
    </div>

    `
    loginCard.innerHTML = check

}