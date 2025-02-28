import { useInfiniteQuery } from "@tanstack/react-query";
import { getArticleList } from "../api/getArticleList";

export function useGetArticleListInfinite() {
  const fetchArticleList = ({ pageParam = 1 }) => getArticleList(pageParam);

  return useInfiniteQuery({
    queryKey: ["getArticleList"],
    queryFn: fetchArticleList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? allPages.length : undefined;
    },
  });
}
