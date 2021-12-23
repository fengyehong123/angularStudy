import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入我们自定义的组件
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {LayoutComponent} from './layout/layout.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactNewComponent} from './contact-new/contact-new.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import {TagNewComponent} from './tag-new/tag-new.component';
import {TagEditComponent} from './tag-edit/tag-edit.component';
import {TagListComponent} from './tag-list/tag-list.component';

// 路由导航对象
const routes: Routes = [
  // 配置路由地址所对应的组件
  {
    // 当我们访问根路由的时候,重定向到/contacts路由中去
    path: '',
    redirectTo: '/contacts',
    // 必须完全匹配到路径的时候,才会做重定向
     pathMatch: 'full'
  },
  /*
    当我们访问/contacts路径的时候,会先把LayoutComponent组件渲染出来
    然后把children中path为''的路由渲染到LayoutComponent组件中的路由出口中
  */
  {
    path: 'contacts',
    component: LayoutComponent,
    // 子路由
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        // 子路由中的请求路径: /contacts/new
        path: 'new',
        component: ContactNewComponent
      },
      {
        path: 'edit',
        component: ContactEditComponent
      }
    ]
  },
  {
    path: 'tags',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'new',
        component: TagNewComponent
      },
      {
        path: 'edit',
        component: TagEditComponent
      },
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
