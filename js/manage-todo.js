class ManageTodo {
  constructor(arr) {
    this.__value = arr;
  }

  get value() {
    return this.__value;
  }

  update(arr) {
    // this.value = arr; // ❌

    this.__value = arr;
  }

  // addTodo(todo)
  addTodo(todo) {
    // this.value.unshift(todo); ❌

    this.__value.unshift(todo);
  }

  // removeTodoById(id)

  // sortTodo(direction) [[ direction = 'asc' | 'desc' ]]

  // getAllTodoDone

  // getAllTodoInProgress

  // toggleTodoById(id)
}

// var list = new ListTodo([]);
// console.log(list);

// list.update([1, 2, 3]);

// console.log(list);
