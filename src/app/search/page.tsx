"use client";

import React, { useState } from "react";
import { Header, VideoList } from "@/components/search";
import { useGetArticlesByKeyword } from "@/lib/hooks/useGetArticlesByKeyword";
import { Loading } from "@/components/common";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: videoList, isLoading } = useGetArticlesByKeyword(searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="flex flex-col h-screen">
      <Header onSearch={handleSearch} />
      <div className="flex-1 w-full overflow-y-auto p-3">
        {isLoading ? (
          <div className="flex justify-center items-center h-[calc(100%-60px)]">
            <Loading />
          </div>
        ) : (
          (videoList?.length === 0 || videoList === undefined) && (
            <div className="flex justify-center items-center h-[calc(100%-60px)]">
              <p className="text-center">검색 결과가 없습니다.</p>
            </div>
          )
        )}
        {videoList && <VideoList videos={videoList} />}
      </div>
    </main>
  );
}
