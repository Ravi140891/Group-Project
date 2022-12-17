const form = document.querySelector(".input-area");
const chatWindow = document.querySelector(".chat-box");
const userMsg = document.getElementById("input-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  chatWindow.innerHTML += `<li class="user"><span class="pic"><img src="0c19d27f22fb38af7df8c5aa250d37b3.png" alt=""></span><div class="user-name"><h4>User 1</h4><p>${userMsg.value}</p></div></li>`;
  userMsg.value = "";
});
