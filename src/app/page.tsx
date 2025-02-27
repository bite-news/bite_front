import React from "react";
import Header from "@/components/layout/Header";
import VideoList from "@/components/video/VideoList";
import { fetchVideos } from "@/lib/api/videoApi";

export default async function Home() {
  const initialVideos = await fetchVideos();

  return (
    <>
      <Header />
      <main className="w-full h-full p-4">
        <VideoList initialVideos={initialVideos} />
      </main>
    </>
  );
}
