"use client";

import React, { useEffect, useState } from "react";
import { VideoCard } from "@/components/home";
import { Loading } from "../common";
import { useGetArticleListInfinite } from "@/lib/hooks/useGetArticleListInfinite";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";

export default function VideoList() {
  const {
    data: videoInfo,
    isLoading,
    fetchNextPage,
  } = useGetArticleListInfinite();

  const [articleList, setArticleList] = useState<Video[]>();
  const [ref, inView] = useInView();

  useEffect(() => {
    const data = videoInfo?.pages.map((page) => page.articles).flat();
    setArticleList(data);
  }, [videoInfo]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (isLoading) {
    return (
      <div className="w-full text-center py-10 flex justify-center">
        <Loading />
      </div>
    );
  }

  if (!articleList || articleList.length === 0) {
    return <div className="text-center py-10">표시할 비디오가 없습니다.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 gap-y-8">
      {articleList.map((video) => (
        <VideoCard key={uuidv4()} video={video} />
      ))}
      <div ref={ref} />
    </div>
  );
}
