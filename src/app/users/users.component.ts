import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent  {

  @Output() usersToSend = new EventEmitter;

  @Input() usersFromParent:any[];

  firstName:string;
  lastName:string;
  id:number = 1;

  users:any =[];

  addUser(){
    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      id: this.id++
    };
    this.users.push(user);
  };

  deleteUser(id: number) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].id == id) {
        this.users.splice(index, 1);
      }
    }
  };

  sendToParent(){
    this.usersToSend.emit(this.users);
  }
}
