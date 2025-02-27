"use client";

import { CONSTANT } from "@/data/constant";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface VideoContentProps {
  nextVideoId: number | null;
  prevVideoId: number | null;
  url: string;
}

export default function VideoContent({
  url,
  nextVideoId,
  prevVideoId,
}: VideoContentProps) {
  const router = useRouter();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number | null>(null);

  const toggleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentY = e.touches[0].clientY;
    const gap = Math.abs(currentY - touchStartY.current);

    touchEndY.current = currentY;
  };

  const onSwipeVideo = () => {
    const gapY =
      touchEndY.current === null ? 0 : touchStartY.current - touchEndY.current;

    if (Math.abs(gapY) >= CONSTANT.VIDEO_SWIPE_THRESHOLD) {
      if (gapY > 0) {
        if (nextVideoId === null) alert("마지막 비디오");
        else router.replace(`/watch/${nextVideoId}`);
      } else {
        if (prevVideoId === null) alert("첫번쨰 비디오");
        else router.replace(`/watch/${prevVideoId}`);
      }
    } else toggleVideoPlay();
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onSwipeVideo}
    >
      <video
        ref={videoRef}
        src={url}
        className="w-full min-h-screen object-contain"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}
