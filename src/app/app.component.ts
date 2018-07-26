import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor( ) {
  }

  public ngOnInit() {
  }

  onAddTodo(todo) {
    this.todos.push(todo);
   console.log(todo);
  }
  onRemoveTodo(todo) {
    this.todos = this.todos.filter((t) => t.title !== todo.title);
  }
}
