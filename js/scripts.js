// Business Logic
function toDoList() {
  this.task = [];
  this.currentId = 0;
}

toDoList.prototype.addTask = function(taskItems) {
  taskItems.id = this.assignId();
  this.task.push(taskItems);
}


Add
function List(name, description, date) {
  this.name = name;
  this.description = description;
  this.date = date;
}







$(document).ready(function() {
  
  
  event.preventDefault();
});