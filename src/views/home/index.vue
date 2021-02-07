<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <router-link to="/go">go</router-link>
    <p class="hhh">hhh <span>bbb</span></p>
    <el-button type="primary">button</el-button>
  </div>
</template>
<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
<style lang='less'>
#app {
  color: red;
}
.hhh {
  color: red;
  span {
    color: green;
  }
}
</style>