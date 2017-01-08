/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-08T19:31:36+05:30
* @Email:  tamyworld@gmail.com
* @Filename: comment.service.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-09T00:44:29+05:30
*/



import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Comment} from './comment';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {

  constructor(private http:Http) {}

  private commentsUrl='http://localhost:8000/api/comments/';

  getComments(): Observable<Comment[]>{
    return this.http.get(this.commentsUrl).map(res=>res.json()).catch((error:any)=>Observable.throw(error.json()||'Server error'))
  }

  addComment(body:Object):Observable<Comment[]>{
    let bodyString=JSON.stringify(body);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.commentsUrl, bodyString, options).map(res=>res.json()).catch((error:any)=>Observable.throw(error.json()||'Server error'));
  }

  updateComment(body:Object):Observable<Comment[]>{
    let bodyString=JSON.stringify(body);
    let headers=new Headers({'Content-type':'application/json'});
    let options=new RequestOptions({headers:headers})
    return this.http.put(`${this.commentsUrl}${body['id']}/`,body,options).map(res=>res.json()).catch((error):any=>Observable.throw(error.json()||'Server error'));
  }
  removeComment(id:string):Observable<any>{
    return this.http.delete(`${this.commentsUrl}${id}/`).map(res=>res.json()).catch((error):any=>Observable.throw(error.json()||'Server error'));
  }

}
