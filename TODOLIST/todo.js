const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const todo = document.querySelector(".todo-list");

btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  addOrDelete(input.value);
});
function addOrDelete(value) {
  const li = document.createElement("li");
  li.className = "li";
  li.innerText = value;
  todo.appendChild(li);

  const deletebutton = document.createElement("button");
  deletebutton.className = "del-btn";
  deletebutton.innerText = "Delete";

  li.appendChild(deletebutton);

  deletebutton.addEventListener("click", (e) => {
    todo.removeChild(li);
  });
}
