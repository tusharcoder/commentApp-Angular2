/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-08T23:31:15+05:30
* @Email:  tamyworld@gmail.com
* @Filename: comment-form.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-09T00:46:01+05:30
*/



import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import {CommentBoxComponent} from '../comment-box/comment-box.component';
import {CommentService} from '../comment.service';
import {EmitterService} from '../emitter.service';
import {Comment} from '../comment';





@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnChanges {

  constructor(
    private commentService:CommentService
  ) { }

  private model = new Comment('','');
  private editing=false;

  @Input() editId:string;
  @Input() listId:string;

  submitComment(){
    let commentOperation:Observable<Comment[]>;
    if(!this.editing){
      commentOperation=this.commentService.addComment(this.model);
    }else{
      commentOperation=this.commentService.updateComment(this.model);
    }
    commentOperation.subscribe(comments=>{
      EmitterService.get(this.listId).emit(comments);
      this.model=new Comment('', '');
      if(this.editing) this.editing=!this.editing;
    },
    error=>{
      console.log(error);
    }
  )
}

  ngOnChanges() {
    EmitterService.get(this.editId).subscribe((comment:Comment)=>{
      this.model=comment;
      this.editing=true;
    });
  }


}
