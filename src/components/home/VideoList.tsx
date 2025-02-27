"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getArticleList } from "@/lib/api/getArticleList";
import { VideoCard } from "@/components/home";
import { Loading } from "../common";

export default function VideoList() {
  const { data, isLoading } = useQuery({
    queryKey: ["getArticleList", 1],
    queryFn: () => getArticleList(1),
  });

  const videos = data?.data.articles as Video[];

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <Loading />
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return <div className="text-center py-10">표시할 비디오가 없습니다.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 gap-y-8">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
