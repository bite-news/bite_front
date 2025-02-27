"use client";

import React from "react";
import { useInfiniteScroll } from "@/lib/hooks/useInfiniteScroll";
import { Loading } from "@/components/common";
import { VideoCard } from "@/components/home";

interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  const { data: videoData, isLoading, ref } = useInfiniteScroll(videos);

  console.log(videoData);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 gap-y-8">
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div ref={ref} className="w-full py-6 flex justify-center">
        {isLoading ? <Loading /> : <div className="w-full h-1"></div>}
      </div>
    </>
  );
}
