const clock = document.querySelector(".app__clock");
const btn = document.querySelector(".todolist__list__btn");
const tdlistUl = document.querySelector(".todolist__ul");
const input = document.querySelector(".todolist__input");

//const background = document.body.background;

function timer() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}h:${minutes}m:${seconds}s`;
}

function toDolist(event) {
  event.preventDefault();
  const todoInput = input.value;
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todoInput;
  tdlistUl.appendChild(li);
}

timer();
setInterval(timer, 1000);
btn.addEventListener("click", toDolist);
