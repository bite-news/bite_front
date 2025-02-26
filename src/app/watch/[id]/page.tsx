"use client";

import React, { useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import newsData from "@/data/news.json";
import { IoChevronBack } from "react-icons/io5";

export default function WatchPage() {
  const params = useParams();
  const router = useRouter();
  const video = newsData.find((video) => video.id === Number(params.id));
  const videoRef = useRef<HTMLVideoElement>(null);

  // const videoUrl = video?.source_url;
  const videoUrl = "https://download.ted.com/talks/KateDarling_2018S.mp4";

  if (!video) {
    return <div className="p-4">비디오를 찾을 수 없습니다.</div>;
  }

  return (
    <main className="relative min-h-screen bg-black">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-20 text-white"
        aria-label="뒤로 가기"
      >
        <IoChevronBack size={35} />
      </button>

      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full min-h-screen object-contain"
        controls
        autoPlay
        playsInline
      />
      <div className="absolute bottom-12 px-10">
        <h2 className="text-white text-xl font-bold">{video.title}</h2>
      </div>
    </main>
  );
}
