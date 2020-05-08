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
    let getters = options.getters
    //获取用户传入的getters,遍历每一项，使用Object.defineProperty将属性名在this.state上定义，返回值是函数返回值
    forEach(getters, (getterName, value) => {
      Object.defineProperty(this.state, getterName, {
        get: () => {
          return value(this.state)
        },
      })
    })
    let mutations = options.mutations
    this.mutations = {}
    //获取用户传入的mutations，进行订阅
    forEach(mutations, (mutationName, value) => {
      this.mutations[mutationName] = (poyld) => {
        value(this.state, poyld)
      }
    })
    let actions = options.actions
    this.actions = {}
    forEach(actions, (actionName, value) => {
      this.actions[actionName] = (poyld) => {
        value(this, poyld)
      }
    })
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
function forEach(obj, cb) {
  Object.keys(obj).forEach(key => {
    cb(key, obj[key])
  })


}

export default {
  install,
  Store
}