import { useQuery } from "@tanstack/react-query";
import { getArticlesByKeyword } from "@/lib/api/getArticlesByKeyword";

function useGetArticlesByKeyword(keyword: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchedVideos", keyword],
    queryFn: () => getArticlesByKeyword(keyword),

    enabled: !!keyword,
  });

  console.log(keyword, data);

  return {
    data,
    isLoading,
    error,
  };
}

export { useGetArticlesByKeyword };
