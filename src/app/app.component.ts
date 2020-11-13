import { Component, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
<<<<<<< HEAD


  // article = {
  //   title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
  //   url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40',
  // };

  // updateArticle() {

  //   this.article.title = document.getElementById('article-title').value;
  //   this.article.url = document.getElementById('article-url').value;
  // }

  // articles = [
  //   {
  //     title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
  //     url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  //   },
  //   {
  //     title: 'Game of Life',
  //     url: 'https://thefullsnack.com/posts/game-of-life.html'
  //   },
  //   {
  //     title: 'Nguyên tắc thiết kế REST API',
  //     url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
  //   },
  //   {
  //     title: 'Why You Only Need to Test with 5 Users',
  //     url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
  //   },
  //   {
  //     title: 'Let’s Build A Web Server. Part 1.',
  //     url: 'https://ruslanspivak.com/lsbaws-part1/'
  //   }
  // ];

  title ="myApp";
  information:any = [];
  dataSendToChild;


    //  firstName: string ;
    //  lastName: string ;




  // saveData(){
  //   var info  = {
  //     fn : this.firstName,
  //     ln:this.lastName

  //   };


  //   this.information.push(info);
  // }


  receiveFromChild(e){

    this.information = e;
     this.dataSendToChild = this.information;
  }



=======
  title = 'angular-test';

  outputChildData(name: string){
    console.log('Hello' + name);

  }
>>>>>>> 0b4afc611d072181a0cd477d76954f5938626cab
}
