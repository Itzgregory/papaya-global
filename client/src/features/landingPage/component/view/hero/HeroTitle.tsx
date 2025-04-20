interface HeroTitleProps {
    title: string;
  }

  
  export default function HeroTitle({ title }: HeroTitleProps) {
    return <h1 className="text-3xl mobile:text-4xl laptop:text-5xl font-bold text-black mb-4">{title}</h1>;
  }