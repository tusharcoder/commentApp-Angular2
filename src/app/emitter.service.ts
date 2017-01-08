/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-08T19:08:42+05:30
* @Email:  tamyworld@gmail.com
* @Filename: emitter.service.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-08T19:21:29+05:30
*/



import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {

  constructor() { }
  private static _emitters:{[ID:string]:EventEmitter<any>}={}
  static get(ID:string):EventEmitter<any>{
    if(!this._emitters[ID]){
      this._emitters[ID]=new EventEmitter();
    }
    return this._emitters[ID]
  }

}
