let registerSection = document.querySelector(".register")
let forgetPassword = document.querySelector(".link")
let newLogin = document.querySelector(".new-login")


forgetPassword.addEventListener('click', () => {
  registerSection.style.display = 'none'
    newLogin.style.display = 'block'
})

let smsKod = document.querySelector(".links");
let newRegister = document.querySelector(".new-register");

smsKod.addEventListener('click', () => {
  registerSection.style.display = 'none'
  newRegister.style.display = 'block'
})




let kodRegister = document.querySelectorAll(".new__register");
let kodBody = document.querySelector(".new__register-body-kod");
let parolBody = document.querySelector(".new__register-body-parol");


for (let i = 0; i < kodRegister.length; i++) {
  kodRegister[i].addEventListener('click', function() {
      for (let x = 0; x < kodRegister.length; x++) {
          if (kodRegister[x] == this) {
              kodRegister[x].classList.add('new-register-active');
      kodBody.style.display = "none"
      parolBody.style.display = "block"
              
          } else {
              kodRegister[x].classList.remove('new-register-active');
      kodBody.style.display = "block"
      parolBody.style.display = "none"
          }
      }
  });
}