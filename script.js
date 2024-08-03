// variables ---
const userList = [];
let submitButton = document.getElementById("btn-add");
let userId = 0;
let messageErr = document.querySelector(".message.m1");
let messageSucc = document.querySelector(".message.m2");
let content = document.querySelector(".content");
let messageTem = document.querySelector(".tem");

// add events
submitButton.addEventListener("click", addUser);

// logical functions
function addUser(e) {
  e.preventDefault();
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let profession = document.getElementById("profession");
  if (name.value == "" || age.value == "" || profession.value == "") {
    messageErr.style.display = "block";
    messageSucc.style.display = "none";
    return;
  }

  userId++;
  userList.push({
    id: userId,
    name: name.value,
    profession: profession.value,
    age: age.value,
  });
  messageErr.style.display = "none";
  messageSucc.style.display = "block";
  console.log(userList);
  userMap();
}

function userMap() {
  content.innerHTML = "";
  if (userList.length == 0) messageTem.style.display = "block";
  else messageTem.style.display = "none";

  userList.map((obj, idx) => {
    let id = obj.id;
    let name = obj.name;
    let age = obj.age;
    let profession = obj.profession;
    let div = document.createElement("div");
    div.id = "user" + id;
    div.innerHTML = `<div class="user-details"><span>${
      idx + 1
    }.</span><span>Name : ${name}</span> <span>Profession : ${profession}</span><span>Age : ${age}</span></div> <button class="btn-del" onClick="deleteUser(${id},${idx})">Delete User</button>`;
    content.appendChild(div);
  });
}

function deleteUser(id, idx) {
  console.log(id);
  let node = document.getElementById("user" + id);
  userList.splice(idx, 1);
  userMap();
}
