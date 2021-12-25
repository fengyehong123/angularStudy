import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// 自定义的路由守卫模块
@Injectable()
export class AuthGuard implements CanActivate {

  // 初始化路由对象
  constructor(
    private router: Router
  ) { }

  // 路由守卫功能
  canActivate() {
    /*
        当访问该页面的时候,先去浏览器中获取token,如果没有的话,就跳转到注册页面
        实现最基本的权限控制
    */
    const token = window.localStorage.getItem('auth_token');
    // 当token不存在的时候
    if (!token) {
        this.router.navigate(['/signin']);
        // 不能继续路由导航
        return false;
    }
    // 继续访问
    return true;
  }
}
