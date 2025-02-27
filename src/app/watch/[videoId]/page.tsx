import Header from "@/components/watch/Header";
import VideoContent from "@/components/watch/VideoContent";
import { getArticle } from "@/lib/api/getArticle";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function WatchPage({
  params,
}: Readonly<{ params: Promise<{ videoId: number }> }>) {
  const queryClient = new QueryClient();
  const videoId = (await params).videoId;

  if (isNaN(videoId)) throw new Error();

  await queryClient.prefetchQuery({
    queryKey: ["getArticle", videoId],
    queryFn: () => getArticle(videoId),
  });

  return (
    <main className="relative h-svh bg-black">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header />
        <VideoContent videoId={videoId} />
      </HydrationBoundary>
    </main>
  );
}
