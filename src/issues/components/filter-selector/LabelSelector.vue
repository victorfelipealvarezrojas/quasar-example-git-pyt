<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';

</script>

<template>
  <LoaderSpinner size="50px" :thickness="1" />

  <q-chip v-for="label in 10" :key="label" color="primary" outline clickable>
    Nombre::
  </q-chip>

</template>

<style scoped></style>
