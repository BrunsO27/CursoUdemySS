<template>
  <div class="bg-white px-5 py-2 rounded">
    <h1 class="text-3xl">Producto: <small class="text-blue-500">nombre</small></h1>
    <hr class="my-4" />
  </div>

  <form class="grid grid-cols-1 sm:grid-cols-2 bg-white px-5 gap-5">
    <div class="first-col">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Título</label>
        <input
          type="text"
          id="title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        />
      </div>

      <div class="mb-4">
        <label for="slug" class="block text-gray-700 text-sm font-bold mb-2">Slug</label>
        <input
          type="text"
          id="slug"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-gray-700 text-sm font-bold mb-2"
          >Descripción</label
        >
        <textarea
          id="description"
          class="shadow h-32 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div class="flex flex-row gap-3">
        <div class="mb-4">
          <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Precio</label>
          <input
            type="number"
            id="price"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>

        <div class="mb-4">
          <label for="stock" class="block text-gray-700 text-sm font-bold mb-2">Inventario</label>
          <input
            type="number"
            id="stock"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="sizes" class="form-label">Tallas</label>
        <div class="flex">
          <button
            v-for="size of allSizes"
            :key="size"
            type="button"
            class="bg-blue-100 p-2 rounded w-14 mr-2 flex-1"
          >
            {{ size }}
          </button>
        </div>
      </div>
    </div>

    <!-- Segunda columna -->
    <div class="first-col">
      <label for="stock" class="form-label">Imágenes</label>
      <!-- Row with scrollable horizontal -->
      <div class="flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-gray-200 rounded">
        <div class="flex-shrink-0">
          <img src="https://placehold.co/250" alt="imagen" class="w-[250px] h-[250px]" />
        </div>

        <div class="flex-shrink-0">
          <img src="https://placehold.co/250" alt="imagen" class="w-[250px] h-[250px]" />
        </div>
      </div>
      <!-- Upload image -->
      <div class="col-span-2 my-2">
        <label for="image" class="form-label">Subir imagen</label>

        <input multiple type="file" id="image" class="form-control" />
      </div>

      <div class="mb-4">
        <label for="stock" class="form-label">Género</label>
        <select class="form-control">
          <option value="">Seleccione</option>
          <option value="kid">Niño</option>
          <option value="women">Mujer</option>
          <option value="men">Hombre</option>
        </select>
      </div>

      <!-- Botón para guardar -->
      <div class="my-4 text-right">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>
      </div>
    </div>
  </form>
</template>

<script src="./ProductView.ts" lang="ts"></script>

<style scoped>
.form-label {
  display: block;
  color: #4a5568; /* text-gray-700 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 700; /* font-bold */
  margin-bottom: 0.5rem; /* mb-2 */
}

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
