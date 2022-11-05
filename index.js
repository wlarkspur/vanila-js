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
loginFormLogin.addEventListener("click", handleLogin);
