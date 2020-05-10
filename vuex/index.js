let Vue;
function install(_Vue) {
  Vue = _Vue
  Vue.mixin({    //mixin给每个组件混入
    beforeCreate() {
      if (this.$options.store) {   //根组件
        this.$store = this.$options.store
      } else {        //子组件
        this.$store = this.$parent && this.$parent.$store
      }
    },
  })
}
class Store {
  constructor(options) {
    //核心逻辑，vuex强依赖vue的原因，基于vue的数据劫持和依赖收集来更新页面
    this.vm = new Vue({
      data() {
        return {
          state: options.state
        }
      }
    })
    this.mutations = {}
    this.actions = {}
    //格式化数据
    this.module = new MoudleCollection(options)
  }
  get state() {    //es6的属性描述符
    return this.vm.state
  }
  commit = (name, poyld) => {
    this.mutations[name](poyld)
  }
  dispatch = (name, poyld) => {
    this.actions[name](poyld)
  }
}
class MoudleCollection{
   constructor(options){

   }
   register(path,rawMoudle){
     let root = {
       _raw:rawMoudle,
       _children:{},
       state:rawMoudle.state
     }
     if(!this.root){
       this.root = root
     }else{

     }
     
   }
}
function forEach(obj, cb) {
  Object.keys(obj).forEach(key => {
    cb(key, obj[key])
  })


}

export default {
  install,
  Store
}