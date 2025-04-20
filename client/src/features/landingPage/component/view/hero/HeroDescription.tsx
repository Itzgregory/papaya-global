interface HeroDescriptionProps {
    description: string;
  }
  

export default function HeroDescription({ description }: HeroDescriptionProps) {
    return (
      <div
        className="text-lg text-black"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    );
  }