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
  const touchEndY = useRef<number>(0);

  const toggleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
    console.log({ start: touchStartY.current });
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndY.current = e.touches[0].clientY;
    console.log({ end: touchStartY.current });
  };

  const onSwipeVideo = () => {
    const gapY = touchStartY.current - touchEndY.current;
    console.log({ gapY });
    if (Math.abs(gapY) >= CONSTANT.VIDEO_SWIPE_THRESHOLD) {
      if (gapY > 0) router.replace(`/watch/${nextVideoId}`);
      else router.replace(`/watch/${prevVideoId}`);
    }
  };

  return (
    <div
      onClick={toggleVideoPlay}
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
