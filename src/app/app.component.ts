/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-08T13:13:09+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-09T00:29:32+05:30
*/



import { Component } from '@angular/core';
import {CommentIndexComponent} from './comment-index/comment-index.component';

@Component({
  selector: 'app-root',
  template:`
  <h1>Comments</h1>

  <comment-widget></comment-widget>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comments';
}
