<template>
  <div>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value ?? '')"
      @blur="$emit('blur')"
      :class="['form-control', { 'border-red-500': error }]"
    />
    <span class="text-red-400" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue?: string | number;
  error?: string;
  type?: 'text' | 'number';
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>
.form-control {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* shadow */
  appearance: none; /* appearance-none */
  border: 1px solid #e2e8f0; /* border */
  border-radius: 0.25rem; /* rounded */
  width: 100%; /* w-full */
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  color: #4a5568; /* text-gray-700 */
  line-height: 1.25; /* leading-tight */
  outline: none; /* focus:outline-none */
}

.form-control:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
