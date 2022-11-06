const clock = document.querySelector(".app__clock");
const btn = document.querySelector(".todolist__list__btn");
const tdlistUl = document.querySelector(".todolist__ul");
const input = document.querySelector(".todolist__input");
const loginForm = document.querySelector("#login-form");
const loginFormLogin = document.querySelector(".login-form__login");
const loginHidden = document.querySelector(".login-hidden");
const usernameValue = document.querySelector(".login-form__username");
const greeting = document.querySelector(".greeting");
//const background = document.body.background;
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function timer() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}h:${minutes}m:${seconds}s`;
}

function handleLogin(event) {
  event.preventDefault();
  loginHidden.classList.add(HIDDEN_CLASS);
  const username = usernameValue.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginHidden.classList.remove(HIDDEN_CLASS);
} else {
  paintGreetings(savedUsername);
}

function paintGreetings(username) {
  greeting.innerText = `Privet ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(event.target.parentElement);
  li.remove();
}

function handleToDoBtn(event) {
  event.preventDefault();
  const newTodo = input.value;
  input.value = "";
  toDolist(newTodo);
}

function toDolist(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  tdlistUl.appendChild(li);
}

timer();
setInterval(timer, 1000);
btn.addEventListener("click", handleToDoBtn);
loginFormLogin.addEventListener("click", handleLogin);
