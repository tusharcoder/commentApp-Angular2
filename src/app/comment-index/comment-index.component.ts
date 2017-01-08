/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-09T00:07:53+05:30
* @Email:  tamyworld@gmail.com
* @Filename: comment-index.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-09T00:12:22+05:30
*/



import { Component, OnInit } from '@angular/core';
import {EmitterService} from '../emitter.service';


@Component({
  selector: 'comment-widget',
  templateUrl: './comment-index.component.html',
  styleUrls: ['./comment-index.component.css']
})
export class CommentIndexComponent{
  constructor(){

  }
  //actually dont get confused this string 'COMMENT_COMPONENT_LIST' or 'COMMENT_COMPONENT_EDIT' are the IDs
private listId='COMMENT_COMPONENT_LIST';
private editId='COMMENT_COMPONENT_EDIT';

}
