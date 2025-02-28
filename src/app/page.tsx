import React from "react";
import { Header } from "@/components/home";
import VideoList from "@/components/home/VideoList"; // 중괄호 제거

export default async function Home() {
  // const queryClient = new QueryClient();
  // const pageNumber = 1;

  // try {
  //   await queryClient.prefetchQuery({
  //     queryKey: ["getArticleList", pageNumber],
  //     queryFn: () => getArticleList(pageNumber),
  //   });
  // } catch (error) {
  //   console.error("데이터 불러오기 실패:", error);
  // }

  return (
    <>
      <Header />
      <main className="w-full h-full p-4">
        {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
        <VideoList />
        {/* </HydrationBoundary> */}
      </main>
    </>
  );
}
