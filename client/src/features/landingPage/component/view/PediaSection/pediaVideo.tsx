interface PediaVideoProps {
    src: string;
  }
  
  export default function PediaVideo({ src }: PediaVideoProps) {
    return (
      <div className="w-full">
        <video
          src={src}
          className="w-full max-h-[500px] rounded-md"
          controls
          playsInline
          title="[Company Name] promotional video"
          aria-label="Promotional video showcasing [Company Name] services"
        />
      </div>
    );
  }