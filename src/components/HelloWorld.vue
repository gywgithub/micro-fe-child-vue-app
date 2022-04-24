<template>
  <div class="hello">
    <h1>Vue Child APP</h1>  
    <h2>Home Page</h2>
    <input type="button" value="table1" @click="goTable1" />
    <input type="button" value="跳转主应用 HelloTwoPage" @click="goMainHelloTwoPage" />
    <input type="button" value="子应用传参到主应用" @click="setMainState" />

    <!-- <div>主应用数据 lang {{lang}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      // lang: ''
    }
  },
  mounted () {
    // if (sessionStorage.getItem('lang')) {
    //   this.lang = sessionStorage.getItem('lang')
    // }
  },
  methods: {
    goTable1() {
      console.log('111')
      this.$router.push({
        path: '/table1'
      })
    },
    goMainHelloTwoPage () {
      window.history.pushState({}, '', '/hellotwo');
    },
    setMainState() {
      console.log(this.parentStore)
      this.parentStore.setGlobalState({
        lang: 'ZN'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
