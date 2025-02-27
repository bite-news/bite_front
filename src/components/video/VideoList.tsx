"use client";

import React from "react";
import VideoCard from "./VideoCard";
import { useInfiniteScroll } from "@/lib/hooks/useInfiniteScroll";

interface VideoListProps {
  initialVideos: Video[];
}

export default function VideoList({ initialVideos }: VideoListProps) {
  const { data: videos, isLoading, ref } = useInfiniteScroll(initialVideos);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 gap-y-8">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div ref={ref} className="w-full py-4 flex justify-center">
        {isLoading ? (
          <div className="loader">로딩 중...</div>
        ) : (
          <div className="h-10"></div>
        )}
      </div>
    </>
  );
}
