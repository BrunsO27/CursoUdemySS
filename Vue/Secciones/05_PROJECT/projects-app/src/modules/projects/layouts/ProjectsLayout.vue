<template>
  <div class="flex flex-col">
    <!-- Top menu-->
    <TopMenu />
    <main>
      <!-- Side menu -->
       <SideMenu/>
      <!-- RouterView -->
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>
