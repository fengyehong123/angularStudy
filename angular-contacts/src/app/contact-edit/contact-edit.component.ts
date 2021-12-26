import { Component, OnInit } from '@angular/core';
// ActivatedRoute: 通过该对象获取动态路由参数
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  // 联系人对象
  formData = {
    name: '',
    email: '',
    phone: '',
    id: 0
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // 在组件中获取动态路由参数
    const contactId = this.route.snapshot.params.id;
    // 通过id获取联系人
    this.getContactById(contactId);
  }

  // 根据id获取联系人
  getContactById (id: String) {
    this.http.get(`http://localhost:3000/contacts/${id}`)
      .toPromise()
      .then((data: any) => {
        // 把后端返回的数据赋值给表单对象,由于使用了数据绑定,因此画面上的项目也会实时更新显示
        this.formData = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  // 编辑联系人
  editContact() {
    // 获取当前联系人的id
    const id = this.formData.id;

    // 发送联系人保存请求
    this.http.patch(`http://localhost:3000/contacts/${id}`, this.formData)
      .toPromise()
      .then(data => {
        // 联系人保存成功之后跳转到联系人页面
        this.router.navigate(['/contacts']);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
