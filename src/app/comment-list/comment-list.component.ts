/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-08T23:55:15+05:30
* @Email:  tamyworld@gmail.com
* @Filename: comment-list.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-09T00:06:21+05:30
*/



import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';
import {EmitterService} from '../emitter.service';


@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnChanges {

  constructor(
    private commentService:CommentService
  ) { }
  comments:Comment[];
  @Input() listId:string;
  @Input() editId:string;

  ngOnInit() {
    this.loadComments();
  }

  loadComments(){
    this.commentService.getComments().subscribe(comments=>{
      this.comments=comments;
    },error=>{
      console.log(error);
    });
  }
  ngOnChanges(changes:any){
    EmitterService.get(this.listId).subscribe((comments:Comment[])=>{
      this.loadComments();
    });
  }

}
