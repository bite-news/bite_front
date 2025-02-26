import VideoList from "@/components/video/VideoList";
import React from "react";
import newsData from "@/data/news.json";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full p-4 pb-10">
        <VideoList videos={newsData} />
      </main>
    </>
  );
}
