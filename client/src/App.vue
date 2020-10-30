<template>
  <div id="app" class="container" :class="mode">
    <h1>Shortify</h1>
    <Home @changeMode='changeMode'/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from "@/components/Home/Home.vue";
import { Mode } from '@/types/theme';

export default Vue.extend({
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      mode: Mode.LIGHT
    }
  },
  methods: {
    changeMode(val: Mode) {
      this.mode = val
    }
  },
  created: function() {
      this.mode = localStorage.getItem("mode") as Mode || Mode.LIGHT
      this.mode ? localStorage.setItem("mode", this.mode) : localStorage.setItem("mode", Mode.LIGHT)

  }
});
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

.icon--yellow {
    color: #f2760f;
}

.icon--grey {
    color: #66757f;
}
</style>
