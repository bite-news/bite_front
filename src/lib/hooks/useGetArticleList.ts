import { useQuery } from "@tanstack/react-query";
import { getArticleList } from "../api/getArticleList";

export function useGetArticleList(articleId: number) {
  const { data } = useQuery({
    queryKey: ["getArticleList", articleId],
    queryFn: () => getArticleList(articleId),
  });

  return { data };
}
