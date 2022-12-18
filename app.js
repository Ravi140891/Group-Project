// const form = document.querySelector(".input-area");
// const chatWindow = document.querySelector(".chat-box");
// const userMsg = document.getElementById("input-text");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   chatWindow.innerHTML += `<li class="user"><span class="pic"><img src="0c19d27f22fb38af7df8c5aa250d37b3.png" alt=""></span><div class="user-name"><h4>User 1</h4><p>${userMsg.value}</p></div></li>`;
//   userMsg.value = "";
// });


// Sign Up page JS code

const signUpForm = document.querySelector(".signup-form");
appData = JSON.parse(localStorage.getItem("data")) || [];
const fullName = document.querySelector('.full-name')
const email = document.getElementById('email')
const userId = document.getElementById('userid')
const password = document.getElementById('pass')
const confirmPass = document.getElementById('confirm')
const nameErr = document.querySelector('.name-err'); 
const mailErr = document.querySelector('.mail-err');
 var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const userErr = document.querySelector('.user-err');
const ageErr = document.querySelector('.age-err');
const age = document.getElementById('age');
const passErr = document.querySelector('.pass-err')



signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if(fullName.value == "" && fullName.value.length < 5){  
    nameErr.style.display = "block"
    setTimeout(() => {
      nameErr.style.display = 'none'
    },1500)
    return;
  }

  if(email.value == '' & !email.value.match(validRegex)){
    mailErr.style.display = 'block'
    setTimeout(()=>{
      mailErr.style.display = 'none'
    },1500)
    return;
  }
  if(userId.value !== ''){
    for(let i = 0; i < appData.length; i++){
      if(appData[i].id == userId.value){
        userErr.style.display = 'block'
        setTimeout(() => {
          userErr.style.display = 'none'
        },1500)
        return;
      }
    }
  }

  if(age.value == ''){
    ageErr.innerText = "Please enter age";
    ageErr.style.display = 'block'
    setTimeout(() => {
      ageErr.innerText = ''
      ageErr.style.display ='none'
    },1500)
    return
  } else if(age.value < 18){
    ageErr.innerText = 'Sorry only 18+ can register'
    ageErr.style.display = 'block'
    setTimeout(()=>{
      ageErr.innerText = ''
      ageErr.style.display = 'none'
    },1500)
    return;
  }
  
  if(pass.value !== confirmPass.value){
    passErr.style.display = 'block'
    setTimeout(() => {
      passErr.style.display = 'none'
    },1500)
    return;
  }
  
  let user = {
    nam : fullName.value,
    mail : email.value,
    id : userId.value,
    pass : password.value,
  }
  appData.push(user);
  localStorage.setItem('data', JSON.stringify(appData));
  console.log(appData);
  signUpForm.reset();
});


// login page validation

const loginId = document.getElementById('login-id')
const loginPass = document.getElementById('login-pass')
const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  window.location.replace = "signup.html";
})
