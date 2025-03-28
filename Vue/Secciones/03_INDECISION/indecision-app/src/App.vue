<template>
  <h1>Mi primera app de Vue</h1>
  <hr />

  <Counter :value="1" />
  <CounterScript :value="2" />
  <CounterScript2 :value="3" />

</template>

<script lang="ts" setup>
import Counter from './components/Counter.vue';
import CounterScript from './components/CounterScript.vue';
import CounterScript2 from './components/Counter/CounterScript2.vue';
</script>
