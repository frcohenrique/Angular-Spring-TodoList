import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  todos: Todo[] = []

  form: FormGroup = new FormGroup({
    description : new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  constructor(
    private service: TodoService,
  ){}
  submit(){
    console.log(this.form.value)
    const todo: Todo = { ...this.form.value }
    this.service.save(todo).subscribe(savedTodo =>
      this.todos.push(savedTodo)
    )}

  listTodos(){
    this.service.listAll().subscribe(todoList => this.todos = todoList)
  }
  
  delete(todo: Todo){
    this.service.delete(todo.id).subscribe({
      next: (response) => this.listTodos()
    })
  }

  done(todo:Todo){
    this.service.markAsDone(todo.id).subscribe({
      next: (response) => {
        todo.done = response.done
        todo.endedAt = response.endedAt
      }
    })
  }

    ngOnInit(): void {
      this.listTodos()
    }
}
