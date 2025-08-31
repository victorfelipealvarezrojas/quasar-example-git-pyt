<script setup lang="ts">
import { ref } from 'vue';


const moderl = ref(null)

</script>



<template>
  <q-btn-toggle v-model="moderl" toggle-color="primary" push spread :options="[
    { label: 'All', value: '' },
    { label: 'Open', value: 'open' },
    { label: 'Closed', value: 'closed' }
  ]" />
</template>

<style scoped></style>
