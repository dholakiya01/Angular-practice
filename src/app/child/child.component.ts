import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() item = 0;
  @Input() user: { name: string; email: string; password: string } = {
    name: '',
    email: '',
    password: '',
  };
  today = Date();
}
