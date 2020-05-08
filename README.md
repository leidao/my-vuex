#  阅读vuex源码，手写精简版vuex
## 前言  
> `x1.0`:实现基本的vuex功能，actions，mutations，getters，state功能简单实现  
> `x2.0`:实现modules模块化和动态注入功能  
### 项目运行
```
git clone https://github.com/leidao/my-vuex.git

cd my-vuex

npm install

npm run serve
```
### 说明  
#### __初始化__：  
>    1.在install函数中拿到Vue参数，使用mixin在每一个组件将Store实例进行混入，这样可以this.$store拿到store实例，在任  
> 何组件调用实例上的dispatch和commit方法和state的取值   
#### __`x1.0`分支__：    
>    1.实例化Vue，并传入一个对象，将用户传入options.state作为data参数进行数据劫持和进行依赖收集，当state上的属性值修改后， 
> 通知更新，重新渲染页面。  
>    2.遍历getters对象，使用Object.defineProperty将属性名在this.state上定义，在getter中return函数返回值，就可以使用  
> this.$store.state.xxx获取getters上的函数返回值  
>    3.遍历mutations和actions对象，进行订阅，定义dispatch和commit函数，进行发布。    


