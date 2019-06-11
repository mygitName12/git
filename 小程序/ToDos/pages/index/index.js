Page({
  data :{
    // 文本框数据模型
    sedata :'',
    // 任务列表 数据模型
    todos :[
      {name:'Learing weapp', completed : false},
      { name: 'Learing Html', completed: true },
      { name: 'Learing javacript', completed: false }
    ] ,
    leftCont :2,
    allCompleted : false
  },
  // 1. 先让按钮点击时执行 拿到文本框里面的值， 将值添加到列表中
  addtodo : function (){
      // 当按钮添加点击时， 执行函数
      if(!this.data.sedata) return ;
    var newData = this.data.todos;
    newData.push({
        name : this.data.sedata,
        completed : false
      })
      this.setData ({todos : newData, sedata :" ", leftCont : this.data.leftCont + 1});
  },
  inputchang : function(e){
   
    this.setData({sedata : e.detail.value});
  },
  iconbtn : function(e){
      console.log(e.currentTarget.dataset.index);
    var item = this.data.todos[e.currentTarget.dataset.index];
    item.completed = ! item.completed;
    var leftCont = this.data.leftCont + (item.completed ? -1 : 1);
    this.setData({todos : this.data.todos, leftCont : leftCont})
  },

  deletarget : function(e){
    var todos = this.data.todos;
    todos.splice(e.currentTarget.dataset.index,1);
    this.setData({todos : todos})
  },
  toggAll : function(){
    // this 在这里永远指向当前页面对象
     this.data.allCompleted = !this.data.allCompleted;
    var todos = this.data.todos;
   var that = this;
  var  index = 0;
    todos.forEach(function(item){
      item.completed = that.data.allCompleted;
     index++;
    })
    // var leftCont = that.data.allCompleted ? index : index- this.data.leftCont;
   
    this.setData({ todos: todos, leftCont : leftCont });
  }
    
 
})
