import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // 定义一个对象数组类型的数据,并且从浏览器的localStorage中获取数据
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = JSON.parse(window.localStorage.getItem('todos') || '[]');

  // 当前的编辑项(设置初始值为null)
  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null;

  /**
   * 实现导航切换数据过滤的功能
   * 💧1. 提供一个属性,该属性会根据当前点击的链接返回过滤之后的数据
   *    filterTodos
   * 💧2. 提供一个属性,用来存储当前点击的链接表示
   *    visibility 字符串
   *      all, active, completed
   * 💧3. 为链接添加点击事件,当点击导航链接的时候,改变
   */
  // 当前页面显示任务的状态: all, active, completed
  public visibility: String = 'all';

  /**
   * ⏹该函数是一个特殊的Angular声明周期钩子函数
   * 它会在Angular应用初始化的时候执行一次
   */
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    // 当Angular应用初始化的时候,调用一次hashchange事件,获取当前路由下的hash
    this.hashchangeHandler();
    /*
      监听window对象上的onhashchange事件
      .bind(this)是为了改变hashchangeHandler函数里面的this指向
      因为我们监听的是window对象上的onhashchange事件,如果不添加bind的话,this会指向window而不是当前class
    */
    window.onhashchange = this.hashchangeHandler.bind(this);
  }

  /**
   * ⏹当Angular组件数据发生改变的时候,ngDocheck钩子函数会被触发
   * 我们可以利用这个钩子函数去持久化存储我们的todos函数
   */
  // tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck(): void {
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // 任务列表过滤属性
  get filterTodos () {
    if (this.visibility === 'all') {
      // 返回全部的任务数据
      return this.todos;
    } else if (this.visibility === 'active') {
      // 返回全部为完成数据
      return this.todos.filter(item => !item.done);
    } else if (this.visibility === 'completed') {
      // 返回全部已完成的数据
      return this.todos.filter(item => item.done);
    }
  }

  // 向todo任务列表中添加数据
  addTodo(event): void {
    // 获取当前文本框输入的内容
    const titleText = event.target.value;
    if (!titleText.length) {
      return;
    }
    if (!!!titleText.trim()) {
      return;
    }

    // 获取最后一个任务的id
    let lastId = 0;
    if (!!this.todos && this.todos.length > 0) {
      lastId = this.todos[this.todos.length - 1].id + 1;
    } else {
      lastId = 1;
    }

    // 向任务列表中添加数据
    this.todos.push({
      // 如果任务列表中没有数据的话,设置id为1
      id: lastId,
      title: titleText,
      done: false
    });

    // 清除输入文本框中的数据
    event.target.value = '';
  }

  // 返回是checkbox是否全部选中的状态
  get toggleAll () {
    // 当所有的任务都完成的时候,返回true;只要有一个没有完成,就返回false
    return this.todos.every(t => t.done);
  }

  // 设置所有的任务状态为非选中状态
  set toggleAll (value) {
    this.todos.forEach(item => item.done = value);
  }

  // 删除任务项
  removeTodo (index: number) {
    this.todos.splice(index, 1);
  }

  // 保存编辑模式下输入的值
  saveEdit (todo, event) {
    // 去除编辑模式下的class
    this.currentEditing = null;
    // 将todo对象中的title修改为当前文本输入框输入的内容
    todo.title = event.target.value;
  }

  // 当按下Esc键的时候,退出编辑模式
  handleEditkeyUp ({keyCode, target}) {

    // 如果按下的是Esc键的话
    if (keyCode === 27) {
      // 把文本框的值恢复为原来的值
      target.value = this.currentEditing.title;
      // 去除编辑模式下的class
      this.currentEditing = null;
    }
  }

  // 未完成任务的剩余数量
  get remaningCount () {
    return this.todos.filter(item => !item.done).length;
  }

  // 清除所有已经完成的任务
  clearAllDone () {
    // 过滤出所有未完成的任务,已经完成的任务就会被清除掉
    this.todos = this.todos.filter(item => !item.done);
  }

  // hashchange处理事件
  hashchangeHandler () {
    /*
      我们监听onhashchange事件的时候,要使用箭头函数,这样才能使this指定当前class对象,而不是当前监听函数
      当用户点击了锚点的时候,我们需要获取当前的锚点标识
      然后动态的将根组件中的visibility设置为当前点击的锚点标识
    */
    const hash = window.location.hash.substr(1);
    switch (hash) {
      case '/':
        this.visibility = 'all';
        break;
      case '/active':
        this.visibility = 'active';
        break;
      case '/completed':
        this.visibility = 'completed';
        break;
    }
  }
}
