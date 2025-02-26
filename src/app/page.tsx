import VideoList from "@/components/video/VideoList";
import React from "react";
import newsData from "@/data/news.json";

export default function Home() {
  return (
    <main className="w-full h-full p-4 pb-10">
      <VideoList videos={newsData} />
    </main>
  );
}
