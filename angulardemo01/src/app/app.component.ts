import { Component } from '@angular/core';

@Component({
  // 指定模板中的标签
  selector: 'app-root',
  // 指定模板的位置
  templateUrl: './app.component.html',
  // 指定模板中css样式
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // 相当于vue中的data区域
  title = 'angulardemo01';
  count = 0;

  // 相当于vue中的method
  increment = function() {
    this.count++;
  };
}
