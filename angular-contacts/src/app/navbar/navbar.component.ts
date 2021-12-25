import { Component, OnInit } from '@angular/core';
// 导入http请求Client
import {HttpClient} from '@angular/common/http';
// 导入路由
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // 从浏览器中获取用户的邮箱数据
  user = JSON.parse(window.localStorage.getItem('user_info') || '{}');

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // 退出登录
  signout (e) {

    // 阻止a标签的默认事件
    e.preventDefault();

    this.http.delete('http://localhost:3000/session').toPromise().then((data: any) => {

      // 退出成功后,清除token
      window.localStorage.removeItem('auth_token');

      // 跳转到登录页面
      this.router.navigate(['/signin']);
    }).catch(err => {
      window.alert('退出失败,请稍后重试!');
    });
  }

}
