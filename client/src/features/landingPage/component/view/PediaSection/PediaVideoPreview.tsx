interface PediaVideoPreviewProps {
  src: string;
  onClick?: () => void;
  className?: string;
}

export default function PediaVideoPreview({ src, className }: PediaVideoPreviewProps) {
  return (
    <video
      src={src}
      poster="/assets/landingpage/Paymentscountrypedia-video.mp4"
      className={`${className} rounded-md`}
      muted
      loop
      playsInline
      autoPlay
      title="[Company Name] video preview"
      aria-label="Preview video for [Company Name]"
      onError={() => console.error('Failed to load preview video:', src)}
    >
      <p>Your browser does not support the video tag. Please check the file path: {src}</p>
    </video>
  );
}