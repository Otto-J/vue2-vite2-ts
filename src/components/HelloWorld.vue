<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="add">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import store from "../store";
@Component
export default class HelloWorld extends Vue {
  get state() {
    return this.$store.state;
  }
  public msg = "fff";
  get count() {
    return this.state.count;
  }
  public add() {
    store.commit("add");
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
