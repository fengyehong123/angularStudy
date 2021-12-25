import { Component, OnInit } from '@angular/core';
// 导入http请求Client
import {HttpClient} from '@angular/common/http';
// 导入路由
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // 表单对象
  signupForm = {
    email: '',
    password: '',
  };

  // 错误提示信息
  error_msg = '';

  /*
    在组件类中声明了一个私有成员http,它的类型是HttpClient
    Angular会自动去实例化HttpClient得到一个实例
    然后我们就可以在组件中使用http这个成员来调用一些请求方法了
    例如http.get http.post
  */
  constructor(
    private http: HttpClient,
    // 声明一个路由实例
    private router: Router
  ) { }

  ngOnInit() {
  }

  // 用户注册
  signup() {

    // 获取表单数据
    const formData = this.signupForm;
    // 发起http注册请求
    this.http.post('http://localhost:3000/users', formData).toPromise().then((data: any) => {
      // 用户邮箱没有被占用,错误消息为空
      this.error_msg = '';

      /*
        将服务器端返回的token保存到浏览器中
        其他页面可以获取该token,并携带该token进行请求验证,从而获取访问权限
      */
      window.localStorage.setItem('auth_token', data.token);
      // 将用户名保存到浏览器中
      window.localStorage.setItem('user_info', JSON.stringify(data.user));

      // 当用户注册成功之后,使用路由跳转到首页
      this.router.navigate(['/']);

    }).catch(err => {
      // 如果用户邮箱已经被注册,在页面上显示错误消息
      this.error_msg = '邮箱已经被占用';
    });
  }
}
