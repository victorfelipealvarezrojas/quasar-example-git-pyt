import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/github-api';
import type { Label } from '../interfaces/label';
import { useIssuesStore } from 'src/stores/issues-store';
import { computed } from 'vue';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi<Label[]>('/labels?per_page=100');
  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    labelsQuery,
    // getters
    selectedLabels: computed(() => issuesStore.labels),
    // methods
    toggleLabel: issuesStore.toggleLabel,
  };
};

export default useLabels;
