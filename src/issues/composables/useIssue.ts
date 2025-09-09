import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/github-api';
import type { Issue } from '../interfaces/Issues';

const getIssue = async (id: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${id}`);
  return data;
};

const useIssue = (id: number) => {
  const issueQuery = useQuery({
    queryKey: [`issue/${id}`],
    queryFn: () => getIssue(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    issueQuery,
  };
};

export default useIssue;
