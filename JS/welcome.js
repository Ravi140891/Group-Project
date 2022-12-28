user = [
  { id: "Thor", date: "12/20.2022, 11:20:18 AM" },
  { id: "Hulk", date: "12/20.2022, 11:30:20 AM" },
  { id: "Prakash", date: "12/20.2022, 11:35:18 AM" },
  { id: "Sagar", date: "12/20.2022, 11:40:28 AM" },
  { id: "Sunny", date: "12/20.2022, 11:45:18 AM" },
  { id: "Ashutosh", date: "12/20.2022, 11:47:18 AM" },
  { id: "Daya", date: "12/20.2022, 11:50:18 AM" },
  { id: "Rajesh", date: "12/20.2022, 11:52:18 AM" },
  { id: "Rohan", date: "12/20.2022, 11:55:18 AM" },
  { id: "John", date: "12/20.2022, 11:56:18 AM" },
  { id: "Johnny", date: "12/20.2022, 11:58:18 AM" },
  { id: "Peter", date: "12/20.2022, 12:05:12 PM" },
  { id: "Patrick", date: "12/20.2022, 12:08:12 PM" },
  { id: "Luthar", date: "12/20.2022, 12:10:12 PM" },
  { id: "Ben", date: "12/20.2022, 12:15:12 PM" },
  { id: "Silvia", date: "12/20.2022, 12:18:12 PM" },
  { id: "Tom", date: "12/20.2022, 12:20:12 PM" },
  { id: "Jerry", date: "12/20.2022, 12:22:12 PM" },
  { id: "Oggy", date: "12/20.2022, 12:25:12 PM" },
];
user1 = JSON.parse(localStorage.getItem("data")) || [];
Array.prototype.push.apply(user, user1);
const chatBox = document.querySelector(".chat-box");
render();

function createList(item) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<i class="fa fa-long-arrow-right"></i> Welcome, <span>${item.id}</span> to our server &nbsp<span class ="time">${item.date}</span>`;
  chatBox.appendChild(listItem);
}
function render() {
  user.forEach((item) => createList(item));
}
