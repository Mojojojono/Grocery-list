const inputBox = document.getElementById("input-text");
const tasklist = document.getElementById("list");

const addTask = () => {
  if (inputBox.value === "") {
    alert("you cannot leave this empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

tasklist.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", tasklist.innerHTML);
};

const showTask = () => {
  tasklist.innerHTML = localStorage.getItem("data");
};
showTask();
