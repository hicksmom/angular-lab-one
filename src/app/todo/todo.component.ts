// Must include a component called “todo”

import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

// Must include a Todo Interface, which consists of 
// a “task” (string) and a “completed” (boolean).

interface Todo {
  task : string;
  completed : boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  
  // The component must add an array of sample todo 
  // objects to the view. Each todo object should match 
  // the Todo interface. Include a mix of complete and 
  // incomplete items.

  public todos: Todo[] = [
    {task: "do laundry", completed: false},
    {task: "cook dinner", completed: true},
    {task: "load dishwasher", completed: false},
    {task: "help kids with homework", completed: true},
    {task: "exercise", completed: false},
    {task: "call Mom", completed: true},
    {task: "plan week", completed: true},
  ]

  // Add the title
  title: string = "TODO List"

  displayedTodos: Todo[] = [...this.todos];

  filter: string = "";

  getFilteredResults() {
    return this.displayedTodos.filter((todo) => {
      return todo.task.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  removeTask(todo: Todo) : void {
    let remove = this.displayedTodos.indexOf(todo);
    this.displayedTodos.splice(remove, 1);
  }

  completeTask(todo: Todo) : void {
    todo.completed = true; 
  }

  add: string = "";

  addTask(newTask : string) : Todo[] {
    if (newTask != '') {
      let newTodo : Todo = {task: newTask, completed: false};
      this.displayedTodos.push(newTodo);
      this.add = '';
      return this.displayedTodos;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
