import {Component, OnInit, Output} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'todo';
  todoList: any;
  constructor(
    private todoListService: TodoListService,
    public authService: AuthService) {
    this.getTodoList();
  }

  ngOnInit() {
  }

  addItem(title: string): void {
    this.todoList = this.todoListService.addItem({title});
    this.getTodoList();
  }


  removeItem(item): void {
    this.todoList = this.todoListService.deleteItem(item);
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoList = this.todoListService.getTodoList();
  }

}
