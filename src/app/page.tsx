import React from "react";
import { Header, VideoList } from "@/components/home";
import newsData from "@/data/news.json";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full p-4">
        <VideoList videos={newsData} />
      </main>
    </>
  );
}
