import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props:{
    value: {type: Number, required: true},
  },
  setup(props) {
    const contador = ref(props.value);
    const contadorCuadrado = computed(() => contador.value * contador.value);

    const aumentaContador = () => {
      contador.value++;
    };

    const decrementaContador = () => {
      contador.value--;
    };

    return {
      contador,
      contadorCuadrado,

      aumentaContador,
      decrementaContador,
    };
  },
});