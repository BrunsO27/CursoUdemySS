
<template>
  <section>
    <h3>Contador: {{ contador }}</h3>
    <h3>Cuadrardo: {{ contadorCuadrado }}</h3>

    <div>
      <button @click="aumentaContador">+1</button>
      <button @click="decrementaContador">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps({
  value: {type: Number, required: true}
});

const contador = ref(props.value);
const contadorCuadrado = computed(() => contador.value * contador.value);

const aumentaContador = () => {
  contador.value++;
};

const decrementaContador = () => {
  contador.value--;
};
</script>
