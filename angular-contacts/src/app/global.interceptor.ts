import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

/*
  http请求拦截器
  我们每发送一次请求都要携带token才能通过后台的权限认证获取数据
  每发送一次请求都手动添加一次token太麻烦
  因此在请求拦截器中添加,每次请求的时候都会经过此拦截器,
  拦截器会给每一次请求添加token
*/
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 当页面初始化的时候,从浏览器中获取到token
    const token = window.localStorage.getItem('auth_token');

    // 将原有的request复制一份,然后再新对象上的请求头中添加token
    const authReq = req.clone({headers: req.headers.set('X-Access-Token', token)});
    return next.handle(authReq);
  }
}
