<script setup lang="ts">
import IssuesCard from './IssuesCard.vue';


</script>

<template>
  <div class="row" >
  <div style="width: 96%">
    <IssuesCard v-for="issue of 20" :key="issue" />
  </div>
  </div>
</template>


<style scoped>

</style>
