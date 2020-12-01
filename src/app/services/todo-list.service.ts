import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();


  constructor(private storageService: StorageService,
              private http: HttpClient) {
    this.retrieveListFromDataBase() ;
  }

  private _getAuthHeaders(): HttpHeaders {
    return  new HttpHeaders().set('Content-Type', 'application/json');
  }

  retrieveListFromDataBase(): void {
    this.http.get<TodoItem[]>('http://localhost:3000/items').subscribe(response => (
        this.todoListSubject.next(response)),
    );
  }

  getTodoList(): Observable<TodoItem[]> {
    return this.todoListSubject.asObservable();
  }

  addItem(item: TodoItem): any {
    this.http.post('http://localhost:3000/items',
      JSON.stringify({title: item.title, completed: item.completed || false}),
      {headers: this._getAuthHeaders()}).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }

  updateItem(item: TodoItem, changes): void {
    this.http.put(`http://localhost:3000/items/${item._id}`,
      JSON.stringify({
        ...item,
        completed: changes
      }),
      {headers: this._getAuthHeaders()}).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }

  deleteItem(item: TodoItem): void {
    this.http.delete(`http://localhost:3000/items/${item._id}`).subscribe(
      () => this.retrieveListFromDataBase()
    );
  }

}
