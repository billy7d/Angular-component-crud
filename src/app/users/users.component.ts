import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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

  deleteUser(id: number) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].id == id) {
        this.users.splice(index, 1);
      }
    }
  }
}
