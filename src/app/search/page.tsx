"use client";

import React, { useState } from "react";
import { Header } from "@/components/search";
import { useGetArticlesByKeyword } from "@/lib/hooks/useGetArticlesByKeyword";
import { VideoList } from "@/components/home";
import { Loading } from "@/components/common";

export default function SearchPage() {
  // api/search

  const [searchQuery, setSearchQuery] = useState("");
  const { videos, isLoading } = useGetArticlesByKeyword(searchQuery);

  const handleSearch = (query: string) => {
    console.log("검색", searchQuery);
    setSearchQuery(query);
  };

  return (
    <main className="flex flex-col h-screen">
      <Header onSearch={handleSearch} />
      <div className="flex-1 flex w-full justify-center items-center overflow-y-auto mb-[60px]">
        {isLoading ? (
          <Loading />
        ) : videos.length === 0 ? (
          <p className="text-center">검색 결과가 없습니다.</p>
        ) : (
          <VideoList videos={videos} />
        )}
      </div>
    </main>
  );
}
