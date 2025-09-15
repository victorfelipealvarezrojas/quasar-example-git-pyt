import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/github-api';
import type { Issue, State } from '../interfaces/Issues';
import { useIssuesStore } from 'src/stores/issues-store';
import { storeToRefs } from 'pinia';

const getIssues = async (labels: string[], state: State): Promise<Issue[]> => {
  const params = new URLSearchParams();
  params.append('per_page', '10');

  if (state) params.append('state', state);
  if (labels.length > 0) {
    const labelsString = labels.join(',');
    params.append('labels', labelsString);
  }

  const { data } = await githubApi.get<Issue[]>('/issues', {
    params,
  });
  return data;
};

const useIssues = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);

  const issuesQuery = useQuery({
    queryKey: ['issues', { labels, state }],
    queryFn: () => getIssues(labels.value, state.value),
    staleTime: 1000 * 60 * 60,
  });

  return {
    issuesQuery,
  };
};

export default useIssues;
