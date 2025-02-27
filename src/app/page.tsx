import React from "react";
import { Header, VideoList } from "@/components/home";
// import { fetchVideos } from "@/lib/api/videoApi";
import newsData from "@/data/news.json";

export default async function Home() {
  // const initialVideos = await fetchVideos();

  return (
    <>
      <Header />
      <main className="w-full h-full p-4">
        <VideoList initialVideos={newsData} />
      </main>
    </>
  );
}
