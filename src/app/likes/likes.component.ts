import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  likes: number = 0;

  likeThis() {
    if (this.likes == 0) {
      this.likes++;
    } else {
      this.likes = 0;
    }
  }

  unlikeThis() {
    if (this.likes >= 1) this.likes--;
  }
}
