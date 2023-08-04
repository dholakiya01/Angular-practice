import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css'],
})
export class LoopComponent {
  // data = ["rajesh","mahesh","manoj"];
  color = 'red';
  bgcolor = "green"

  onchangecolor() {
    this.color = 'blue';
    this.bgcolor = 'skyblue';
  };
  
  data = [
    { name: 'manoj', age: '25', socialaccounts: [{ name: 'manoj' }] },
    { name: 'rajesh', age: '25' },
    { name: 'anuj', age: '25' },
    { name: 'pranav', age: '25' },
  ];
}
