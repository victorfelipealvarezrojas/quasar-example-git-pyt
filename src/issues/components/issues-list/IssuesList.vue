<script setup lang="ts">
import IssuesCard from './IssuesCard.vue';
import type{ Issue } from 'src/issues/interfaces/Issues';

interface Props {
  issues: Issue[]
}




const props = defineProps<Props>()



</script>

<template>
  <div class="row" >
  <div style="width: 96%">
    <IssuesCard v-for="issue of props.issues" :key="issue.id" :issue="issue" />
  </div>
  </div>
</template>


<style scoped>

</style>
