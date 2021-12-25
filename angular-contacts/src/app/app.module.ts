import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 数据双向绑定用到的模块
import {FormsModule} from '@angular/forms';
// http请求模块
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// 引入我们自定义的全局拦截器
import {GlobalInterceptor} from './global.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SigninComponent,
    SignupComponent,
    ContactListComponent,
    ContactNewComponent,
    ContactEditComponent,
    TagListComponent,
    TagNewComponent,
    TagEditComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    // 路由模块
    AppRoutingModule,
    // 表单模块(双向数据绑定需要引入表单模块)
    FormsModule,
    // http请求模块
    HttpClientModule
  ],
  providers: [{
    // 使用http请求拦截器
    provide: HTTP_INTERCEPTORS,
    // 使用我们自己定义的http请求拦截器,确保我们发送的请求携带上token
    useClass: GlobalInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
