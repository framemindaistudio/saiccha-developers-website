export function VideoPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-image border border-border">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        preload="metadata"
        poster={poster}
        className="aspect-video w-full bg-foreground"
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
