import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component'
// 引入ionic的模块
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    // 想要在自定义模块中使用ionic中的组件,就要引入ionic模块
    IonicModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
