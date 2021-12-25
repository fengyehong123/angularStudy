import { Component, OnInit } from '@angular/core';
// 导入http请求Client
import {HttpClient} from '@angular/common/http';
// 导入路由
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // 表单对象
  signinForm = {
    email: '',
    password: '',
  };

  // 错误提示信息
  error_msg = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // 登录的方法
  signin () {

    this.http.post('http://localhost:3000/session', this.signinForm).toPromise().then((data: any) => {

      // 将token信息保存到浏览器中
      window.localStorage.setItem('auth_token', data.token);
      // 将用户名保存到浏览器中
      window.localStorage.setItem('user_info', JSON.stringify(data.user));

      // 登录成功之后进行页面跳转,跳转到首页
      this.router.navigate(['/']);
    }).catch(err => {

      if (err.status === 401) {

        this.error_msg = '登录失败,邮箱或密码错误';
      }
    });
  }

}
