<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import { useRoute } from 'vue-router';
import IssuesCard from '../components/issues-list/IssuesCard.vue';


const route = useRoute();
const { id } = route.params;


</script>

<template>
  <div>{{ id }}</div>
  <LoaderSpinner color="white" title="" />

  <router-link class="text-white" to="/">Go Back</router-link>

  <IssuesCard />

  <LoaderSpinner :thickness="1" size="1rem" title="" />

  <div class="column">
    <span class="text-h3 q-mb-md" >Comments</span>
      <IssuesCard style="margin: 0 auto; width: 90%; margin-bottom: 10px;" v-for="comment in 5" :key="comment" />
  </div>



</template>

<style scoped></style>
