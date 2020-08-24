// Business Logic
function toDoList() {
  this.task = [];
  this.currentId = 0;
}

toDoList.prototype.addTask = function(taskItems) {
  taskItems.id = this.assignId();
  this.task.push(taskItems);
}

toDoList.prototype.deleteTask = function(id) {
  
}







  
