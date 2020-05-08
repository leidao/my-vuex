let Vue;
function install(_Vue){
   Vue = _Vue
   Vue.mixin({    //mixin给每个组件混入
     beforeCreate() {
       if(this.$options.store){   //根组件
         this.$store = this.$options.store
       }else {        //子组件
        this.$store = this.$parent && this.$parent.$store
       }
     },
   })
}
class Store{
  constructor(options){
    this.vm = new Vue({
      data(){
        return {
          state:options.state
        }
      }
    })
  }
  get state(){
     return this.vm.state
  }
}
export default{
  install,
  Store
}