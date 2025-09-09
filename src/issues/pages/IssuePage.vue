<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import { useRoute } from 'vue-router';
import IssuesCard from '../components/issues-list/IssuesCard.vue';
import useIssue from '../composables/useIssue';

const route = useRoute();
const { id} = route.params;


const {issueQuery} = useIssue(Number(id));
const {data, isLoading} = issueQuery;

console.log(data)

</script>

<template>
  <router-link class="text-white" to="/">Go Back</router-link>

  <LoaderSpinner v-if="isLoading" color="white" title="" />
  <IssuesCard v-else-if="data" :issue="data" />
  <p>Issue Id: {{ id }} not found</p>

  <LoaderSpinner :thickness="1" size="1rem" title="" />

  <div class="column">
    <span class="text-h3 q-mb-md" >Comments</span>
      <IssuesCard style="margin: 0 auto; width: 90%; margin-bottom: 10px;" v-for="comment in 5" :key="comment" />
  </div>



</template>

<style scoped></style>
