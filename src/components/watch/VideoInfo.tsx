import Link from "next/link";
import { GoTriangleRight } from "react-icons/go";

interface VideoInfoProps {
  title?: string;
  sourceURL?: string;
}

export default function VideoInfo({ title, sourceURL }: VideoInfoProps) {
  return (
    <div className="absolute bottom-0 left-0 px-4 pb-8">
      <div className="text-white font-bold line-clamp-1 text-lg">{title}</div>
      {sourceURL && (
        <Link
          href={sourceURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex item-center -ml-2 pt-2"
        >
          <GoTriangleRight size={24} />
          원본 기사 보러 가기
        </Link>
      )}
    </div>
  );
}
