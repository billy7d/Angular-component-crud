import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
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


  ngOnInit(): void {}



  deleteUser(id: number) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].id == id) {
        this.users.splice(index, 1);
      }
    }
  }

  // createUser(){
  // }

  fromChild(){
    this.childData.emit(this.test);
  }
}


