// 文件: 根模块,告诉ionic如何组装应用

// ionic angular的核心文件
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// 引入路由配置文件
import { AppRoutingModule } from './app-routing.module';

// 引入根组件
import { AppComponent } from './app.component';

@NgModule({
  // 声明组件
  declarations: [AppComponent],
  // 配置不会在模板中使用的组件
  entryComponents: [],
  // 引入的模块,依赖的模块
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  // 项目所需要的服务
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  // 项目启动需要加载的组件,默认就是根组件
  bootstrap: [AppComponent],
})
export class AppModule {}
