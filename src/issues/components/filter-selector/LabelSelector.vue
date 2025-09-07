<script setup lang="ts">
import useLabels from 'src/issues/composables/useLabels';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';

const {labelsQuery, toggleLabel, selectedLabels} = useLabels();
const {data, error, isLoading} = labelsQuery;

</script>

<template>
<div class="q-mt-md">
  <LoaderSpinner v-if="isLoading" size="50px" :thickness="1" title="" />

  <div v-if="error">{{ error }}</div>

  <q-chip
    v-for="label in data"
    :key="label.id"
    :style="{color:`#${label.color}`}"
    :outline="!selectedLabels.includes(label.name)"
    clickable
    @click="toggleLabel(label.name)"
  >
    {{ label.name }}
  </q-chip>
</div>

</template>

<style scoped></style>
