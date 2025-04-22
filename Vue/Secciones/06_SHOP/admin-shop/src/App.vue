<template>
  <RouterView />
  <VueQueryDevtools />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { useAuthStore } from './modules/auth/stores/auth.store';
import { AuthStatus } from './modules/auth/interfaces';

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

authStore.$subscribe(
  (_, state) => {
    if (state.authStatus == AuthStatus.Checking) {
      authStore.checkAuthStatus();
      return;
    }

    if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
      router.replace({ name: 'home' });
      return;
    }

    console.log(state.authStatus);
  },
  {
    immediate: true,
  },
);
</script>
