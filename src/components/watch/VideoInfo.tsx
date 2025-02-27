"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface VideoInfoProps {
  info: Video;
}

export default function VideoInfo({ info }: VideoInfoProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpened(!isOpened);
  };

  const onClickOpenContent = () => {
    if (isOpened) toggleOpen();
  };

  return (
    <div
      className={`absolute bottom-0 pb-8 px-4 w-full flex items-end ${isOpened ? "bg-black/50 h-svh" : ""}`}
    >
      <motion.div
        layout
        className={`flex flex-col gap-2`}
        onClick={onClickOpenContent}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white text-xl font-bold line-clamp-1">
          {info.title}
        </div>
        {isOpened && (
          <Link
            href={info.source_url}
            className="px-2 py-2 text-white border border-1 border-white rounded flex justify-between items-center"
          >
            기사 보러 가기
            <IoIosArrowForward />
          </Link>
        )}
        <motion.div
          className={`text-white ${isOpened ? "line-clamp-6" : "line-clamp-1"}`}
          onClick={toggleOpen}
        >
          {/* {info.content} */}
        </motion.div>
      </motion.div>
    </div>
  );
}
