import { computed, ref } from 'vue';

export const useCounter = (valorInicial: number) => {

    const contador = ref(valorInicial);
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
        //ReadOnly
        /*contadorCuadrado = computed(() => contador.value * contador.value); */


        aumentaContador,
        decrementaContador
        
    }
}