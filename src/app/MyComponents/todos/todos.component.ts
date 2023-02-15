import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    const localItem = localStorage.getItem('todos');

    if (localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localItem);
    }
  }
  ngOnInit(): void {}

  todoDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);

    this.todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoAdd(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoCheck(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
