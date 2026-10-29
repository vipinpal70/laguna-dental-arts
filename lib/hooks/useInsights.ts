import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteArticle,
  getStoredArticles,
  saveArticle,
  togglePublishStatus,
} from '@/lib/insights-store';
import type { InsightArticle } from '@/data/insights';

export const insightsKeys = {
  all: ['insights'] as const,
  adminList: () => [...insightsKeys.all, 'admin', 'list'] as const,
};

export function useInsightsQuery() {
  return useQuery({
    queryKey: insightsKeys.adminList(),
    queryFn: getStoredArticles,
  });
}

export function useSaveArticleMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: saveArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: insightsKeys.adminList() });
    },
  });
}

export function useDeleteArticleMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: insightsKeys.adminList() });
    },
  });
}

export function useTogglePublishMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, published }: { id: string; published: boolean }) =>
      togglePublishStatus(id, published),
    onMutate: async ({ id, published }) => {
      await queryClient.cancelQueries({ queryKey: insightsKeys.adminList() });
      const previous = queryClient.getQueryData<InsightArticle[]>(insightsKeys.adminList());
      queryClient.setQueryData<InsightArticle[]>(insightsKeys.adminList(), (old) =>
        old?.map((a) => (a._id === id ? { ...a, published } : a))
      );
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(insightsKeys.adminList(), context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: insightsKeys.adminList() });
    },
  });
}
