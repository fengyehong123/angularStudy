import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  /**
   * 声明组件模块资源: 组件,指令,服务
   * 该模块中包含了多个组件
   */
  declarations: [
    AppComponent,
    FooComponent
  ],
  // 依赖模块
  imports: [
    BrowserModule
  ],
  providers: [],
  // 指定启动根组件,指定以哪个组件为入口
  bootstrap: [AppComponent]
})
// 将模块导出
export class AppModule { }
