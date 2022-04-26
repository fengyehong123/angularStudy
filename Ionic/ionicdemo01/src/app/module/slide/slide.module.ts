import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入组件
import { SlideComponent } from './slide.component'



@NgModule({
  // 声明模块中用到的组件
  declarations: [SlideComponent],
  imports: [
    CommonModule
  ],
  // 暴露出模块中的组件,让外部可以使用
  exports: [SlideComponent]
})
export class SlideModule { }
