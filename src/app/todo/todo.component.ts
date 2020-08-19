import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'bake cookies',
      completed: true,
    },
  ];

  searchTerm: string;

  constructor() {}

  submitForm(form: NgForm) {
    let newTodo: Todo = {
      task: form.value.task,
      completed: false,
    };
    // "this" is a reference to a property
    this.todos.push(newTodo);
  }
  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }
  setSearchTerm(form: NgForm) {
    // trim removes white space tolowercase makes everything lowercast
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }
  filter() {
    // will provide us with a new array of objects that are included in the the searchterm
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTodo = todo.task.toLowerCase().trim();
        return currentTodo.includes(this.searchTerm);
      });
    }
  }
  ngOnInit(): void {}
}
