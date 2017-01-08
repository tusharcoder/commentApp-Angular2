/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-09T00:12:35+05:30
* @Email:  tamyworld@gmail.com
* @Filename: comment.module.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-09T00:21:12+05:30
*/



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';

import {CommentBoxComponent} from '../comment-box/comment-box.component';
import {CommentFormComponent} from '../comment-form/comment-form.component';
import {CommentListComponent} from '../comment-list/comment-list.component';
import {CommentIndexComponent} from '../comment-index/comment-index.component';

import {CommentService} from '../comment.service';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    JsonpModule,
  ],
  declarations: [
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentIndexComponent,
  ],
  providers:[
    CommentService
  ],
  exports:[
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentIndexComponent,
  ]
})
export class CommentModule { }
