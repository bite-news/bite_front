"use client";

import React, { useState } from "react";
import { Header, VideoList } from "@/components/search";
import { useGetArticlesByKeyword } from "@/lib/hooks/useGetArticlesByKeyword";
import { Loading } from "@/components/common";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useGetArticlesByKeyword(searchQuery);

  const videos = data?.data?.articles as Video[];

  console.log(videos);

  const handleSearch = (query: string) => {
    console.log("검색", searchQuery);
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
          (videos?.length === 0 || videos === undefined) && (
            <div className="flex justify-center items-center h-[calc(100%-60px)]">
              <p className="text-center">검색 결과가 없습니다.</p>
            </div>
          )
        )}
        {videos && <VideoList videos={videos} />}
      </div>
    </main>
  );
}
