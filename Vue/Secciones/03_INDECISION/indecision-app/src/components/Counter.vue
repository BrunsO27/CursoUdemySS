<template>
  <section>
    <h3>Contador: {{ contador }}</h3>
    <h3>Cuadrardo: {{ contadorCuadrado }}</h3>

    <div>
      <button class="btn" @click="aumentaContador">+1</button>
      <button class="btn" @click="decrementaContador">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

const props = defineProps({
  value: {type: Number, required: true},
});

const {contador, 
       contadorCuadrado,
       aumentaContador,
       decrementaContador} = useCounter(props.value);

//Antes de Composable Functions
/* import { computed, ref } from 'vue';

const props = defineProps({
  value: {type: Number, required: true},
});

const contador = ref(props.value);
const contadorCuadrado = computed(() => contador.value * contador.value);

const aumentaContador = () => {
  contador.value++;
};

const decrementaContador = () => {
  contador.value--;
}; */
</script>

<style scoped>

/* .btn {
  @apply p-5;
} */

/* .btn{
  margin: 10px;
  padding: 2%;
  background-color: var(--color-blue-500);
  &:hover{
    background-color: var(--color-blue-700);
  }
} */

.btn {
  @apply bg-blue-500 rounded-lg hover:bg-blue-700;
  padding: 2%;
}

</style>