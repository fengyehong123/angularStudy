import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab3PageRoutingModule } from './tab3-routing.module';
// 在tab3模块中引入我们自定义的list模块
import { ListModule } from '../module/list/list.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    // 声明引入的模块
    ListModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
