import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 使用双向数据绑定必须要引入FormsModule模块
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
