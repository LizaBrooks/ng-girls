import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello word';

  constructor() {
    // this.changeTitle('My First Angular App');
    // console.warn(this.title);
  }


  ngOnInit(): void {
    // this.title = 'Angular CLI Rules!';
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }



  // changeTitle(event): void {
  //   console.log(event);
  //   this.title = event.target.value; // the original functionality still works
  // }
}
