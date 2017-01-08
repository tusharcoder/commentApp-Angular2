/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-09T00:07:53+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.module.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-09T00:28:51+05:30
*/



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CommentModule} from './comment/comment.module';
import {EmitterService} from './emitter.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommentModule,
  ],
  providers: [EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
