<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template lang="pug">
h1 {{ msg }}

#lovelydiv 
  |This is a Sample Div
  br
  br
  |With Multiple Breaks
p Recommended IDE setup: 
  br
  br
  a(href="https://code.visualstudio.com/" target="_blank")
    | VSCode
  |  + 
  a(href="https://github.com/johnsoncodehk/volar" target="_blank")
    |  Volar
p
  a(href="https://vitejs.dev/guide/features.html" target="_blank")
    | Vite Documentation
  |  | 
  a(href="https://v3.vuejs.org/" target="_blank")
    | Vue 3 Documentation
button(type="button" @click="count++")
  | count is: {{ count }}
p Edit
  code  components/HelloWorld.vue 
  br
  br
  | to test hot module replacement.
</template>

<style scoped>
h1 {
  color: #96783b;
}
a {
  color: #42b983;
}

#lovelydiv {
  color: #96783b;
}
</style>
