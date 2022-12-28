const date = new Date();
let yyyy = date.getFullYear();
let mm = date.getMonth() + 1;
if (mm < 10) {
  mm = "0" + mm;
}
let dd = date.getDate();
if (dd < 10) {
  dd = "0" + dd;
}
let current = `${dd}/${mm}/${yyyy}`;
let time = date.toLocaleTimeString();
let userId = JSON.parse(localStorage.getItem("userId"));
let gender = JSON.parse(localStorage.getItem("gender"));
let emojiBox = document.querySelector(".emoji-box");
let emojiSelector = document.querySelector(".emoji-selector");
let emoji = document.querySelector(".emoji-icon");

emojiSelector.addEventListener("click", () => {
  emojiBox.classList.toggle("active");
});

fetch(
  "https://emoji-api.com/emojis?access_key=dd5856872d3977546a8acfc27d147a10fb448217"
)
  .then((res) => res.json())
  .then((data) => loadEmoji(data));

function loadEmoji(data) {
  data.forEach((emoji) => {
    let li = document.createElement("li");
    li.classList.add("emoji-icon");
    li.setAttribute("emoji-name", emoji.slug);
    li.textContent = emoji.character;
    emojiBox.appendChild(li);
  });
}

let message = [];

fetch("https://message-render.onrender.com")
  .then((res) => res.json())
  .then((data) => message.push(...data))
  .then(() => render())
  .catch((e) => console.log(e));

let message1 = [];
Array.prototype.push.apply(message, message1);
let inputMsg = document.getElementById("input-text");
let chatWindow = document.querySelector(".chat-box");
const chatBox = document.querySelector(".input-area");
emojiBox.addEventListener("click", (e) => {
  inputMsg.value += e.target.innerText;
});

inputMsg.addEventListener("focus", () => {
  emojiBox.classList.remove("active");
});

function createItem(msg) {
  let listItem = document.createElement("li");
  listItem.classList.add("user");
  listItem.innerHTML = `<span class="profile-pic"><img src="${
    msg.gender === "male" ? "../Images/avatar.svg" : "../Images/female.svg"
  }" alt=""></span><div class="user-name"><div class="top"><h4>${
    msg.id
  }</h4><span class="icon"><svg aria-hidden="true" role="img" width="40" height="40" viewBox="0 0 64 64" fill="none"><rect width="8" height="8" fill="currentColor"></rect><rect x="56" y="56" width="8" height="8" fill="currentColor"></rect><rect x="28" y="21.6453" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="30.6667" y="21.6453" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28" y="18.9785" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.3335" y="18.9785" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="30.6667" y="18.9785" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28" y="16.3119" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.3335" y="16.3119" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.6667" y="16.3119" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="30.6667" y="16.3119" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28" y="13.6453" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.3335" y="13.6453" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.6667" y="13.6453" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="30.6667" y="13.6453" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28" y="10.9785" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.3335" y="10.9785" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.6667" y="10.9785" width="2.66667" height="2.66667" fill="currentColor"></rect><rect opacity="0.2" x="30.6667" y="10.9785" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28" y="8.31189" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.3335" y="8.31189" width="2.66667" height="2.66667" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 36 21.6453)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 36 18.9785)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.6667 18.9785)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 36 16.3119)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.6667 16.3119)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 41.3335 16.3119)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 36 13.6453)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.6667 13.6453)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 41.3335 13.6453)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 36 10.9785)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.6667 10.9785)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 41.3335 10.9785)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 36 8.31189)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.6667 8.31189)" fill="currentColor"></rect><rect x="30.6667" y="24.3119" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="30.6394" y="47.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="30.6394" y="45.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28.0273" y="45.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="17.5796" y="34.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28.0273" y="42.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="17.5796" y="31.6882" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28.0273" y="39.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="17.5796" y="29.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28.0273" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="17.5796" y="26.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.4155" y="45.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="14.9675" y="34.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.4155" y="42.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="14.9675" y="31.6882" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.4155" y="39.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="14.9675" y="29.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.4155" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="14.9675" y="26.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.8035" y="45.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="12.3555" y="34.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.8035" y="42.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="12.3555" y="31.6882" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.8035" y="39.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="12.3555" y="29.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.8035" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="12.3555" y="26.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="20.1914" y="45.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="9.74365" y="34.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="20.1914" y="42.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="9.74365" y="31.6882" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="20.1914" y="39.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="9.74365" y="29.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="20.1914" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="9.74365" y="26.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="17.5796" y="45.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="7.13159" y="34.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="17.5796" y="42.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="7.13159" y="31.6882" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="14.9128" y="42.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.9128" y="31.6882" width="2.66667" height="2.66667" transform="rotate(-180 22.9128 31.6882)" fill="currentColor"></rect><rect x="17.5796" y="39.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="7.13159" y="29.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="14.9128" y="39.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="22.9128" y="34.3549" width="2.66667" height="2.66667" transform="rotate(-180 22.9128 34.3549)" fill="currentColor"></rect><rect x="12.2461" y="39.6882" width="2.66667" height="2.66666" fill="currentColor"></rect><rect x="25.5796" y="34.3549" width="2.66667" height="2.66667" transform="rotate(-180 25.5796 34.3549)" fill="currentColor"></rect><rect x="17.5796" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="7.13159" y="26.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="14.9128" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="22.9128" y="37.0215" width="2.66667" height="2.66667" transform="rotate(-180 22.9128 37.0215)" fill="currentColor"></rect><rect x="12.2461" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="25.5796" y="37.0215" width="2.66667" height="2.66667" transform="rotate(-180 25.5796 37.0215)" fill="currentColor"></rect><rect x="9.57959" y="37.0215" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="28.2461" y="37.0215" width="2.66667" height="2.66667" transform="rotate(-180 28.2461 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 35.9727 45.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 46.4207 34.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 35.9727 42.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 46.4207 31.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66666" transform="matrix(-1 0 0 1 35.9727 39.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 46.4207 29.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 35.9727 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 46.4207 26.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.5847 45.0215)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 49.0327 34.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.5847 42.3549)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 49.0327 31.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66666" transform="matrix(-1 0 0 1 38.5847 39.6882)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 49.0327 29.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 38.5847 37.0215)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 49.0327 26.3549)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 41.1968 45.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 51.6445 34.3549)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 41.1968 42.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 51.6445 31.6882)" fill="currentColor"></rect><rect width="2.66666" height="2.66666" transform="matrix(-1 0 0 1 41.1968 39.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 51.6445 29.0215)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 41.1968 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 51.6445 26.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 43.8086 45.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 54.2566 34.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 43.8086 42.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 54.2566 31.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66666" transform="matrix(-1 0 0 1 43.8086 39.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 54.2566 29.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 43.8086 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 54.2566 26.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 46.4207 45.0215)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 56.8687 34.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 46.4207 42.3549)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 56.8687 31.6882)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 49.0874 42.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(1 0 0 -1 41.0874 31.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66666" transform="matrix(-1 0 0 1 46.4207 39.6882)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 56.8687 29.0215)" fill="currentColor"></rect><rect width="2.66666" height="2.66666" transform="matrix(-1 0 0 1 49.0874 39.6882)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(1 0 0 -1 41.0874 34.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66666" transform="matrix(-1 0 0 1 51.7539 39.6882)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(1 0 0 -1 38.4207 34.3549)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 46.4207 37.0215)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 56.8687 26.3549)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(-1 0 0 1 49.0874 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(1 0 0 -1 41.0874 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 51.7539 37.0215)" fill="currentColor"></rect><rect width="2.66666" height="2.66667" transform="matrix(1 0 0 -1 38.4207 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(-1 0 0 1 54.4207 37.0215)" fill="currentColor"></rect><rect width="2.66667" height="2.66667" transform="matrix(1 0 0 -1 35.7539 37.0215)" fill="currentColor"></rect><rect x="30.6394" y="50.3549" width="2.66667" height="2.66667" fill="currentColor"></rect><rect x="30.6394" y="53.0215" width="2.66667" height="2.66667" fill="currentColor"></rect></svg></span><span class="time">${
    msg.day == dd ? "Today" : msg.day == dd - 1 ? "Yesterday" : current
  } at ${msg.hour}</span></div><p>${msg.message}</p></div>`;
  chatWindow.appendChild(listItem);
}

function autoScroll() {
  chatWindow.lastElementChild.scrollIntoView({ behavior: "smooth" });
}
chatBox.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  const msg = {
    id: userId,
    gender: gender,
    date: current,
    day: dd,
    hour: time,
    message: inputMsg.value,
  };
  message1.push(msg);
  createItem(msg);
  fetch("https://message-render.onrender.com", {
    method: "POST",
    body: JSON.stringify({
      id: msg.id,
      gender: msg.gender,
      date: msg.date,
      day: msg.day,
      hour: msg.hour,
      message: msg.message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((err) => console.log(err));
  autoScroll();
  inputMsg.value = "";
});

function render() {
  message.forEach((msg) => createItem(msg));
}