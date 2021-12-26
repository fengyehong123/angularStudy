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

  // 页面初始化,钩子事件
  ngOnInit() {
    // 页面初始化后,获取联系人列表
    this.getContacts();
  }

  // 获取联系人列表
  getContacts() {
    this.http.get('http://localhost:3000/contacts').toPromise().then((data: any) => {

      // 后端接口返回的数据放到联系人列表中
      this.contacts = data;
    }).catch(err => {
      console.log(err);
    });
  }

  // 根据id删除联系人
  deleteContactById(id, event) {
    // 阻止a标签的默认事件
    event.preventDefault();

    // 如果用户选择否,就什么都不做
    if (!window.confirm('您确定要删除吗?')) {
      return;
    }

    this.http.delete(`http://localhost:3000/contacts/${id}`).toPromise().then((data: any) => {
      // 获取联系人列表
      this.getContacts();
    }).catch(err => {
      console.log(err);
    });
  }

}
