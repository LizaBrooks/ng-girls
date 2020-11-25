import { Component } from '@angular/core';
import {TodoItem} from './interfaces/todo-item';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.handleLoginCallback();
  }
  title = 'todo-list';
  // todoList: TodoItem[] = [
  //   {title: 'install NodeJS'},
  //   {title: 'install Angular CLI'},
  //   {title: 'create new app'},
  //   {title: 'serve app'},
  //   {title: 'develop app'},
  //   {title: 'deploy app'},
  // ];
  // addItem(title: string) {
  //   title = 'My To Do List APP';
  // }

}
