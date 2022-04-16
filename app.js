// VARIABLES
let form = document.querySelector("form");
let input = document.querySelector(".input");
let inputBtn = document.querySelector(".input_button");
let todoItem = document.querySelector(".todo_item");
let todoButtons = document.querySelectorAll(".todo_btn");

// MAIN
form.addEventListener("submit", function (e) {
  e.preventDefault();
  todoName = input.value;
  createNewTodo();
  todoButtons = document.querySelectorAll(".todo_btn");
  clearInput();

  // Todo Button Logic
  todoButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let thisTodoName = btn.parentElement.parentElement.children[0];
      buttonAction(btn, thisTodoName);
    });
  });
});

// FUNCTIONS
function crossOff(btn, thisTodoName) {
  thisTodoName.style.textDecoration = "line-through";
  thisTodoName.style.color = "#00000075";
}

function remove(btn) {
  btn.parentElement.parentElement.remove();
}

function edit(btn, thisTodoName) {
  remove(btn);
  input.value = thisTodoName.innerHTML;
}

function buttonAction(btn, thisTodoName) {
  if (btn.classList[0] === "check") {
    crossOff(btn, thisTodoName);
  } else if (btn.classList[0] === "edit") {
    edit(btn, thisTodoName);
  } else if (btn.classList[0] === "delete") {
    remove(btn);
  }
}

function clearInput() {
  input.value = "";
}

function createNewTodo() {
  let newTodo = todoItem.cloneNode(true);
  newTodo.childNodes[1].innerHTML = todoName;
  todoItem.after(newTodo);
  newTodo.style.display = "flex";
}
