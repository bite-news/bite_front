"use client";

import { CONSTANT } from "@/data/constant";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import style from "@/styles/videoContent.module.css";
import { useGetArticle } from "@/lib/hooks/useGetArticle";
import VideoInfo from "./VideoInfo";

interface VideoContentProps {
  videoId: number;
}

export default function VideoContent({ videoId }: VideoContentProps) {
  const router = useRouter();

  const { data: videoInfo } = useGetArticle(videoId);
  if (videoInfo === null) throw new Error();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number | null>(null);

  const [isIconVisible, setIsIconVisible] = useState<boolean>(false);
  const [iconType, setIconType] = useState<"PLAY" | "PAUSE">("PAUSE");

  const toggleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setIconType("PLAY");
      video.play();
    } else {
      setIconType("PAUSE");
      video.pause();
    }

    setIsIconVisible(true);
    setTimeout(() => setIsIconVisible(false), 1000);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const onSwipeVideo = () => {
    const gapY =
      touchEndY.current === null ? 0 : touchStartY.current - touchEndY.current;

    if (videoInfo) {
      if (Math.abs(gapY) >= CONSTANT.VIDEO_SWIPE_THRESHOLD) {
        if (gapY > 0) {
          if (videoInfo.next_id === null) alert("마지막 비디오");
          else router.replace(`/watch/${videoInfo.next_id}`);
        } else {
          if (videoInfo.prev_id === null) alert("첫번쨰 비디오");
          else router.replace(`/watch/${videoInfo.prev_id}`);
        }
      } else toggleVideoPlay();
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onSwipeVideo}
    >
      <video
        ref={videoRef}
        src={videoInfo?.video_url}
        className="w-full min-h-screen object-contain text-white"
        autoPlay
        playsInline
        loop
      >
        비디오 태그가 지원되지 않는 브라우저입니다.
      </video>
      {isIconVisible && iconType === "PLAY" && (
        <IoPlayCircleOutline
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 ${style["animate-fade"]}`}
          size={80}
        />
      )}
      {isIconVisible && iconType === "PAUSE" && (
        <IoPauseCircleOutline
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 ${style["animate-fade"]}`}
          size={80}
        />
      )}
      <VideoInfo title={videoInfo?.title} sourceURL={videoInfo?.source_url} />
    </div>
  );
}
