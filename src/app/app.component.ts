import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  userData: any = {};

  getformdata(data: any) {
    console.log(data);
    this.userData = data;
  }

  display = false;

  toggle() {
    this.display = !this.display;
  }
  list: any[] = [];

  addtask(item: string) {
    console.log(item);
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  };

  removetask(id: number) {
    console.log(id);
    this.list = this.list.filter((item) => item.id !== id);
  };

  dataparent = 10
  sendvalue(){
    this.dataparent = Math.floor(Math.random()*1000)
  }

  userdata=[
    {name:"darshan",email:"darshan@gmail.com",password:"123"},
    {name:"keval",email:"keval@gmail.com",password:"123"},
    {name:"rakesh",email:"rakesh@gmail.com",password:"123"},
    {name:"parth",email:"parth@gmail.com",password:"123"},
  ]
}