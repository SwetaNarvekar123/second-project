import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

 todos: Todo[] = [ 
  new Todo('this is a',false),
  new Todo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', true)
]

constructor() { }

 getAllTodos()
 {
  return this.todos
 }

 addTodo(todo: Todo)
 {
this.todos.push(todo)
 }

updateTodo(index: number, updatedTodo: Todo)
{
this.todos[index]= updatedTodo
}

deleteTodo(index: number)
{
this.todos.splice(index,1)
}
}
