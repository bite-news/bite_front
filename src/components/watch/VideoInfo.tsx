interface VideoInfoProps {
  info: Video;
}

export default function VideoInfo({ info }: VideoInfoProps) {
  return (
    <div className="absolute bottom-8 px-4">
      <div className="text-white text-xl font-bold line-clamp-1">
        {info.title}
      </div>
    </div>
  );
}
