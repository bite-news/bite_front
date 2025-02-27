import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export function useInfiniteScroll<T>(initialData: T[]) {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const loadNextData = useCallback(async () => {
    if (isLoading || !hasNext) return;

    setIsLoading(true);
    console.log("로딩 중...");

    try {
      /**
        const response = await fetch(`/api/videos?page=${page}`);
        if (!response.ok) throw new Error("데이터 불러오기 실패");
        const { data: newVideos, hasNextPage, totalPageCount } = await response.json();

        setData((prev) => [...prev, ...newVideos]);
        setHasNext(hasNextPage);
        setPage((prev) => prev + 1);
      */

      await new Promise((res) => setTimeout(res, 3000));
      console.log(`데이터 불러오기 완료, 페이지 ${page + 1}`);

      if (page >= 5) {
        console.log("마지막 페이지 입니다.");
        setHasNext(false);
        return;
      }

      setData((prev) => [...prev]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasNext, page]);

  useEffect(() => {
    if (inView) loadNextData();
  }, [inView, loadNextData]);

  return { data, isLoading, hasNext, page, ref };
}
