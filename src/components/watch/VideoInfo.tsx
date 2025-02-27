interface VideoInfoProps {
  info: Video;
}

export default function VideoInfo({ info }: VideoInfoProps) {
  return (
    <div className="absolute bottom-12 px-10">
      <h2 className="text-white text-xl font-bold">{info.title}</h2>
    </div>
  );
}
