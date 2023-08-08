import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
 show = false
 color = "red"

 name = ""
}

export interface datatype{
  name:string,
  email:string,
  password:string
}
