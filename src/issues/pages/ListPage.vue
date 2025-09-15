
<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from '../components/filter-selector/FilterSelector.vue';
import IssuesList from '../components/issues-list/IssuesList.vue';
import useIssues from '../composables/useIssues';

const {issuesQuery} = useIssues()

const {data, isLoading} = issuesQuery

</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">GitHub Issues</span>
    </div>
  </div>

<div class="row">
  <div class="col-xs-12 col-md-4">
      <FilterSelector />
  </div>

  <div class="col-xs-12 col-md-8">
      <LoaderSpinner v-if="isLoading" title="loading"/>

      <IssuesList v-else :issues="data!" />
  </div>
</div>

</template>

<style scoped></style>
