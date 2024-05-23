/**
 * Quy ước:
 * - Những thuộc tính nào khai báo kiểu: __<name>
 * thì không được phép lấy trực tiếp từ bên ngoài.
 */

var id = 1;

var STATUS = {
  DONE: "done",
  IN_PROGRESS: "in-progress",
};

class Todo {
  constructor(name) {
    this.name = name;

    // Mặc định lấy từ global, để id không được phép trùng nhau
    this.__id = id;

    // tăng id lên +1
    id += 1;

    // Mặc định khi khởi tạo object sẽ là in-progress
    this.status = STATUS.IN_PROGRESS;
  }

  // Method để lấy id của đối tượng
  getId() {
    return this.__id;
  }

  // chuyển method -> sử dụng như là một thuộc tính của đối tượng.
  get id() {
    return this.__id;
  }

  toggleStatus() {
    // c1
    // if (this.status == 'done') {
    //   this.status = STATUS.IN_PROGRESS;
    // } else {
    //   this.status = STATUS.DONE;
    // }

    // c2
    this.status = this.isDone ? STATUS.IN_PROGRESS : STATUS.DONE;
  }

  get isDone() {
    return this.status == STATUS.DONE;
  }

  isInProgress() {
    return this.status == STATUS.IN_PROGRESS;
  }
}

// var js = new Todo("js");


// console.log(js.id); //✅
// console.log(js.__id); //❌

// console.log(js);
// console.log(new Todo("html"));
// console.log(new Todo("css"));
