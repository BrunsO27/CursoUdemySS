<template>
  <button @click="$emit('click')" :class="[`btn btn-circle btn-secondary p-0.5 fixed`, position]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});

defineEmits(['click']);
</script>

<style scoped>
.top-left {
  position: fixed;
  top: 2.5rem; /* top-10 equivale a 2.5rem */
  left: 2.5rem; /* left-10 equivale a 2.5rem */
}

.top-right {
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
}

.bottom-left {
  position: fixed;
  bottom: 2.5rem;
  left: 2.5rem;
}

.bottom-right {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
}
</style>
