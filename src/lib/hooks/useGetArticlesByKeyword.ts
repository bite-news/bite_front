import { useQuery } from "@tanstack/react-query";
import { getArticlesByKeyword } from "@/lib/api/getArticlesByKeyword";

function useGetArticlesByKeyword(keyword: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getArticlesByKeyword", keyword],
    queryFn: () => getArticlesByKeyword(keyword),
    enabled: !!keyword,
  });

  return {
    data,
    isLoading,
    error,
  };
}

export { useGetArticlesByKeyword };
