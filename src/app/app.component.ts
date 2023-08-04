import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  data = 'My name is darshan';
  displayvalue = '';
  getvalue() {
    return 'get function data';
  }
  getval(val: string) {
    console.log(val);
    this.displayvalue = val;
  }

  count = 0;

  counter(type: string) {
    type === 'plus' ? this.count++ : this.count--;
  }
  show = 'data';
}
