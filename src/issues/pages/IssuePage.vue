<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import { useRoute } from 'vue-router';
import IssuesCard from '../components/issues-list/IssuesCard.vue';
import useIssue from '../composables/useIssue';

const route = useRoute();
const { id} = route.params;

const {issueQuery, commentQuery} = useIssue(Number(id));
const {data, isLoading} = issueQuery;
const {data: comments, isLoading: isLoadingComments} = commentQuery;


</script>

<template>
  <router-link class="text-white" to="/">Go Back</router-link>

  <LoaderSpinner v-if="isLoading" color="white" title="" />
  <IssuesCard v-else-if="data" :issue="data" />


  <LoaderSpinner v-if="isLoadingComments" :thickness="1" size="1rem" title="" />
  <div v-else class="column">
    <span class="text-h3 q-mb-md" >Comments {{ comments?.length }}</span>
      <IssuesCard
          :v-if="comments"
          style="margin: 0 auto; width: 90%; margin-bottom: 10px;"
          v-for="comment in comments"
          :issue="comment"
          :key="comment.id"
      />
  </div>



</template>

<style scoped></style>
