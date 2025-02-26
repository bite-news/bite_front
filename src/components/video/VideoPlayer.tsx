// components/video/VideoPlayer.tsx
"use client";

import React from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
      <video
        src={videoUrl}
        className="w-full h-full"
        controls
        preload="auto"
        poster="/assets/placeholder.jpg" // 기본 썸네일 이미지 (선택사항)
      />
    </div>
  );
}
