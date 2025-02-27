"use client";

import { dateConverter } from "@/lib/utils/dateConverter";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { id, title, thumbnail_url, source_created_at } = video;
  const [thumbnail, setThumbnail] = useState(thumbnail_url);

  return (
    <div className="flex flex-col">
      <Link href={`/watch/${id}`} className="relative w-full aspect-video">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover rounded-lg"
          onError={() => {
            setThumbnail(
              "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            );
          }}
        />
      </Link>
      <div className="mt-3">
        <Link href={`/watch/${id}`}>
          <h3 className="font-bold leading-[1.3] line-clamp-2">{title}</h3>
        </Link>
        <p className="text-gray-600 text-xs mt-1">
          {dateConverter(source_created_at)}
        </p>
      </div>
    </div>
  );
}
