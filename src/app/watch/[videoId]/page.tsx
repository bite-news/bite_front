import newsData from "@/data/news.json";
import Header from "@/components/watch/Header";
import VideoInfo from "@/components/watch/VideoInfo";
import VideoContent from "@/components/watch/VideoContent";

export default async function WatchPage({
  params,
}: Readonly<{ params: Promise<{ videoId: number }> }>) {
  const videoId = (await params).videoId;

  // 임시
  const videoInfo =
    newsData.find((video) => video.id == videoId) ?? newsData[0];
  const videoIndex = newsData.findIndex((video) => video.id == videoId) ?? 0;
  const prevVideoId = videoIndex === 0 ? null : newsData[videoIndex - 1].id;
  const nextVideoId =
    videoIndex === newsData.length - 1 ? null : newsData[videoIndex + 1].id;
  const videoUrl = "https://download.ted.com/talks/KateDarling_2018S.mp4";

  return (
    <main className="relative h-svh bg-black">
      <Header />
      <VideoContent
        url={videoUrl}
        prevVideoId={prevVideoId}
        nextVideoId={nextVideoId}
      />
      <VideoInfo info={videoInfo} />
    </main>
  );
}
