import { Component, OnInit } from '@angular/core';
// 导入http请求Client
import {HttpClient} from '@angular/common/http';
// 导入路由
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  // 表单对象
  formData = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // 添加联系人到后台
  addContact() {
    this.http.post('http://localhost:3000/contacts', this.formData)
    .toPromise().then((data: any) => {
      // 联系人添加成功后,跳转到首页
      this.router.navigate(['/contacts']);
    }).catch(err => {
      console.log(err);
    });
  }
}
