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

<script lang="ts" src="./CounterScript2.ts"></script>
