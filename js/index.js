var manageTodo = new ManageTodo([]);
var KEY_TODO = "manage-todo";

function handleRemoveTodo(id) {
  manageTodo.removeTodoById(id);

  // render lại list todo mới.
  manageTodo.render();
}

function handleToggleStatusTodo(id) {
  manageTodo.toggleStatusTodoById(id);

  manageTodo.render();
}

// gán sự kiện cho button remove bên ngoài.
/**
 * tìm tất cả các button remove và gắn sự kiện onclick cho từng thẻ.
 * document.querySelectorAll("button.remove")
 *
 * - Tìm element đầu tiên.
 * document.querySelector("button.remove")
 */

function handleAddTodo() {
  /**
   * 1. Lấy giá trị của ô input.
   * 2. Khởi tạo một object todo.
   * 3. Lưu object vào mảng.
   */
  // 1.
  var inputEle = document.getElementById("newTask");
  var valueInput = inputEle.value;

  /**
   * validate
   * kiểm tra người dùng có nhập dữ liệu vào hay không.
   * Nếu không thì dừng function tại đây.
   * Nếu có nhập thì vẫn tiếp tục.
   */

  // .trim(): loại bỏ khoảng trống trước-sau của string.
  if (valueInput.trim().length == 0) {
    // Dùng return để dùng function.
    // Vì function gặp return thì sẽ không thực hiện nữa vì đã timf được kết quả.
    return;
  }

  // 2.
  var todo = new Todo(valueInput);
  console.log(todo);
  // 3.
  manageTodo.addTodo(todo);

  /**
   * Clear input
   * Focus input
   */
  inputEle.value = "";
  inputEle.focus();

  // 4. render list todo ra màn hình
  console.log(manageTodo.value);
  manageTodo.render();
}

document.getElementById("addItem").onclick = handleAddTodo; // 1

// Expression function
var sortASC = function () {
  manageTodo.sortASC();
  manageTodo.render();
};

var sortDES = function () {
  manageTodo.sortDESC();
  manageTodo.render();
};

// Declaration function
// function sortASC(){
// }

// function sortDES(){
// }

/**
 * LocalStorage.
 * - Lưu giữ data khi reload trang web.
 */

// set
// JSON.stringify: chuyển về kiểu dữ liệu string.
localStorage.setItem(
  "key-1",
  JSON.stringify({
    age: 20,
    print() {
      console.log(this.age);
    },
  })
);
localStorage.setItem("key-2", JSON.stringify([1]));
// get
var key1 = localStorage.getItem("key-1"); // string

// Chuyển về kiểu dữ liệu ban đầu
var key1Original = JSON.parse(key1);
// console.log(key1Original);
// key1Original.print(); ❌

window.onbeforeunload = function () {
  localStorage.setItem(KEY_TODO, JSON.stringify(manageTodo.value));
};

window.onload = function () {
  var content = localStorage.getItem(KEY_TODO);

  if (content) {
    var listTodo = JSON.parse(content);

    // Khôi phục lại đúng đối tượng Todo trước khi được lưu.
    var newListTodo = listTodo.map(function (i) {
      return new Todo(i.name);
    });

    manageTodo.update(newListTodo);

    manageTodo.render();
  }
};

// falsy: "", 0, null, undefined, NaN,

// document.querySelector(".filter-btn").addEventListener("click", function () {
//   console.log("haha");
// });

// document.querySelector(".filter-btn").onclick = function () {
//   console.log("1111111");
// };

// --------------------------
var filterButton = document.querySelector(".filter-btn");
filterButton.onclick = function () {
  // console.log(filterButton.classList); // ???

  // Thêm vào trong class.

  // contains: classList có chứa class open hay không.
  // if (filterButton.classList.contains("open")) {
  //   // Nếu có thì remove.
  //   filterButton.classList.remove("open");
  // } else {
  //   // không có thì add vào.
  //   filterButton.classList.add("open");
  // }

  filterButton.classList.toggle("open");

  // filterButton.className = filterButton.className + " open";
};

// document.querySelector(".filter-btn").addEventListener("click", function () {
//   console.log("3333");
// });

if (document.querySelector("#newTask")) {
  document
    .querySelector("#newTask")
    .addEventListener("keydown", function (event) {
      if (event.which == 13) {
        handleAddTodo();
      }
    });
}
