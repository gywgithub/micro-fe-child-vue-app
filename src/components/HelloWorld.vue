<template>
  <div class="hello">
    <h1>Vue Child APP</h1>  
    <h2>Home Page</h2>
    <input type="button" value="table1" @click="goTable1" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goTable1() {
      console.log('111')
      this.$router.push({
        path: '/table1'
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
