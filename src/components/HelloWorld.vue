<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="add">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  public msg = "fff";
  public count = 0;
  public add() {
    this.count++;
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
