<template>
  <h1>Mi primera app de Vue</h1>
  <hr />

  <Counter :value="5" />
</template>

<script lang="ts" setup>
import Counter from './components/Counter.vue';
</script>
