
<script setup lang="ts">

interface Props {
  title?: string
}

withDefaults(defineProps<Props>(),{
  title: "defina un titulo",
})

</script>

<template>
  <div class="column items-center">
    <q-spinner color="primary" size="4rem"  v-bind:thickness="6" />
    <span class="q-mt-sm">{{ title }}</span>
  </div>

</template>

<style scoped></style>
