var listTodoObj = new ManageTodo([]);

function render(listTodo) {
  var todoPlace = document.getElementById("todo");

  var content = "";

  /**
   * Lặp qua mảng listTodo
   *
   * gán lại giá trị content.
   */

  // c1.
  //   var length = listTodo.length;
  //   for (var i = 0; i < length; i++) {
  //     content += "<li>" + listTodo[i].name + "</li>";
  //     // <li>html</li><li>css</li><li>react</li>
  //   }

  // c2. forEach
  listTodo.forEach((item) => {
    // content += "<li>" + item.name + "</li>";
    
    // template string:
    content += `<li>${item.name}</li>`;
  });

  todoPlace.innerHTML = content;
}

function handleAddTodo() {
  /**
   * 1. Lấy giá trị của ô input.
   * 2. Khởi tạo một object todo.
   * 3. Lưu object vào mảng.
   */
  // 1.
  var valueInput = document.getElementById("newTask").value;
  // 2.
  var todo = new Todo(valueInput);
  console.log(todo);
  // 3.
  listTodoObj.addTodo(todo);

  // 4. render list todo ra màn hình
  console.log(listTodoObj.value);
  render(listTodoObj.value);
}

document.getElementById("addItem").onclick = handleAddTodo; // 1
