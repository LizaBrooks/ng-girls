import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello word";

  constructor() { }

  ngOnInit(): void {
  }

}
