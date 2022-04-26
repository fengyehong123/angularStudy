import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

// 在tab1组件中引入我们自定义的公共模块
import { SlideModule } from '../module/slide/slide.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    // 声明引入的模块之后,才能在tab1.page.html中使用模块中的组件
    SlideModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
