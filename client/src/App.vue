<template>
  <div id="app" class="container">
    <h1>Shortify</h1>
    <Home />
  </div>
</template>

<script lang="ts">
import Home from "@/components/Home/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  created: function() {
    const mode = localStorage.getItem("mode")
    mode ? localStorage.setItem("mode", mode) : localStorage.setItem("mode", "light")
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0px auto;
}
.container > h1 {
  font-family: cursive;
  color: tomato;
  font-style: italic;
  font-size: 3rem;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
