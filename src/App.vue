<template>
  <div id="app">
   {{$store.state.msg}}<br>
   {{$store.state.newMsg}}<br>
   <div @click="msgChange">同步点击</div>
   <div @click="msgHandler">异步点击</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted(){
    console.log(this.$store);
  },
  methods:{
    msgChange(){
      this.$store.commit('setMsg',5)
    },
    msgHandler(){
      this.$store.dispatch('handMsg',10)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
