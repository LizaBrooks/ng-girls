import {Component, OnInit, Output} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'My To Do List APP';
  todoList: Observable<TodoItem[]>;
  constructor(
    private todoListService: TodoListService,
    public authService: AuthService) {
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void{
    this.todoListService.addItem({title});
  }


  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }

}
