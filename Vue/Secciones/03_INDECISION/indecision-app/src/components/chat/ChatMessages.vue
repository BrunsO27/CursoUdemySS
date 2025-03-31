<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
        <ChatBubble :its-mine="true" message="Hola Mundo"/>
        <ChatBubble :its-mine="false" message="no" image="https://yesno.wtf/assets/no/11-e6b930256265890554c1464973ebba55.gif"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';

</script>