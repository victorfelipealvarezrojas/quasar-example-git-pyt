import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/github-api';
import type { Issue } from '../interfaces/Issues';
import { computed } from 'vue';

const getIssue = async (id: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${id}`);
  return data;
};

const getIssueComment = async (id: number): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(`/issues/${id}/comments`);
  return data;
};

const useIssue = (id: number) => {
  const issueQuery = useQuery({
    queryKey: [`issue/${id}`],
    queryFn: () => getIssue(id),
    staleTime: 1000 * 60 * 60,
  });

  const commentQuery = useQuery({
    queryKey: [`issue/${id}/comments`],
    queryFn: () => getIssueComment(issueQuery.data.value!.number),
    staleTime: 1000 * 15,
    enabled: computed(() => issueQuery.data.value !== undefined), // la envuelve en un computed para que se vuelva a evaluar cuando issueQuery.data.value cambie
  });

  return {
    issueQuery,
    commentQuery,
  };
};

export default useIssue;
