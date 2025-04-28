<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Bienvenido a nuestro sitio web</h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>Counter: {{ counter }}</p>

    <div class=" flex justify-center gap-2">
      <button
      class="bg-blue-500 rounded flex-1 px-4 py-2 text-white hover:bg-blue-700"
      @click="counter++"
    >
      +1
    </button>

    <button
      class="bg-blue-500 rounded flex-1 px-4 py-2 text-white hover:bg-blue-700"
      @click="counter--"
    >
      -1
    </button>
    </div>
    
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
