<<<<<<< HEAD
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
=======
import { Component, OnInit, Output , EventEmitter } from '@angular/core';
>>>>>>> 0b4afc611d072181a0cd477d76954f5938626cab

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
<<<<<<< HEAD
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
=======
export class UsersComponent implements OnInit {


  id:number;
  name:String
  test:string = 'hung';
  @Output() childData = new EventEmitter;

   users = [
    {
      id: 1,
      name: 'asd',
    },
    {
      id: 2,
      name: 'hung',
    },
  ];
>>>>>>> 0b4afc611d072181a0cd477d76954f5938626cab


  ngOnInit(): void {}



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

  // createUser(){
  // }

  fromChild(){
    this.childData.emit(this.test);
  }
}


