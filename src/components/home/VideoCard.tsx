import { dateConverter } from "@/lib/utils/dateConverter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { id, title, thumbnail_url, source_created_at } = video;

  return (
    <div className="flex flex-col">
      <Link href={`/watch/${id}`} className="relative w-full aspect-video">
        <Image
          src={thumbnail_url}
          alt={title}
          fill
          className="object-cover rounded-lg"
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
