import { useQuery } from "@tanstack/react-query";
import { getArticle } from "../api/getArticle";

function useGetArticle(articleId: number) {
  const { data } = useQuery({
    queryKey: ["getArticle", articleId],
    queryFn: () => getArticle(articleId),
  });

  return { data };
}

export { useGetArticle };
