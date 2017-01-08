/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-08T20:55:23+05:30
* @Email:  tamyworld@gmail.com
* @Filename: comment-box.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-08T23:30:40+05:30
*/



import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Comment} from '../comment';
import {EmitterService} from '../emitter.service';
import {CommentService} from '../comment.service';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  constructor(
    private commentService:CommentService
  ) { }

@Input() comment: Comment;
@Input() listId:string;
@Input() editId:string;

editComment(){
  EmitterService.get(this.editId).emit(this.comment);
}

deleteComment(id:string){
  this.commentService.removeComment(id).subscribe(
    comments=>{
      EmitterService.get(this.listId).emit(comments);
    },err=>{
      console.log(err);
    }
  );
}

  ngOnInit() {
  }

}
