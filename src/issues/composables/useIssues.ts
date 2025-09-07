import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/github-api';
import type { Issue } from '../interfaces/Issues';

const getIssues = async (): Promise<Issue[]> => {
  const params = new URLSearchParams();
  params.append('per_page', '10');

  const { data } = await githubApi.get<Issue[]>('/issues', {
    params,
  });
  return data;
};

const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: () => getIssues(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    issuesQuery,
  };
};

export default useIssues;
