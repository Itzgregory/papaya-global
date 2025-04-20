interface HeroVideoProps {
    videoSrc: string;
    className: string;
  }
  

  
export default function HeroVideo({ videoSrc, className }: HeroVideoProps) {
    return (
      <div className={className}>
        <video
          src={videoSrc}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        />
      </div>
    );
  }