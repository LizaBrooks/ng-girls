import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'todo-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})

export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void {
    if (newTitle) {
      this.submit.emit(newTitle);
    } else {
      alert('Value cannot be empty');
    }
  }
}
