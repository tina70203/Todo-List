var btn = document.querySelector(".btnClass");
var list = document.querySelector(".list");
var inputText = document.querySelector(".textClass");
var addForm = document.querySelector(".add");

var data = JSON.parse(localStorage.getItem("Todo")) || [];

//update data
function saveData(e) {
  e.preventDefault();
  var txt = document.querySelector(".textClass").value;
  var todo = {
    content: txt,
  };
  if (todo.content == "") {
    alert("Fill in what to do...  :) ");
  } else {
    data.push(todo);
  }

  updateList(data);
  addForm.reset();
  localStorage.setItem("Todo", JSON.stringify(data));
}

btn.addEventListener("click", saveData);
addForm.addEventListener("submit", saveData);

//Print it to the browser
function updateList(items) {
  str = "";
  var len = items.length;

  for (var i = 0; i < len; i++) {
    str += `<li> 
    ${items[i].content}
    <i class="far fa-trash-alt trashIcon" data-index=${i}></i></li>`;
  }

  list.innerHTML = str;
}
updateList(data);

//Delete todo
function toggleDate(e) {
  e.preventDefault();
  if (e.target.nodeName !== "I") {
    return;
  }
  var index = e.target.dataset.index;
  data.splice(index, 1);
  localStorage.setItem("Todo", JSON.stringify(data));
  updateList(data);
}
list.addEventListener("click", toggleDate);
