<template>
  <h1 class="text-2xl font-semibold mb-4">Register</h1>
  <form action="#" method="POST">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Login
    </button>

    <!-- Sign up  Link -->
    <div class="mt-6 text-blue-500 text-center">
      <RouterLink to="/login" class="hover:underline">Login in Here</RouterLink>
    </div>
  </form>
</template>
