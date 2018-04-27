<template>
  <div id="app">
    <button @click="toggleMe">Toggle</button>
    <hr/>
    <img v-if="isTrue" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
    computed:{
      // 1A) computed would read my store getter onLoad
      isTrue(){
          return this.$store.getters.isTrue;
      }
    },
    data(){
      return{}
    },
    methods:{
      toggleMe: function(){
          this.$store.dispatch('toggle');
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
