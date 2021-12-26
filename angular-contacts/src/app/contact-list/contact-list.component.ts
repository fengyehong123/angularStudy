import { Component, OnInit } from '@angular/core';
// 导入路由
import {Router} from '@angular/router';
// 导入http请求Client,和请求头模块
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  // 联系人列表
  contacts = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/contacts').toPromise().then((data: any) => {

      // 后端接口返回的数据放到联系人列表中
      this.contacts = data;
    }).catch(err => {

    });
  }

}
