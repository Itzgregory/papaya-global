import Image from 'next/image';

interface BannerImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

export default function BannerImage({ desktopSrc, mobileSrc, alt }: BannerImageProps) {
  return (
    <>
      <div className="hidden absolute left-0 w-full h-full z-[1] tablet:block tablet:top-0 bg-transparent">
        <Image
          src={desktopSrc}
          alt={alt}
          width={2560}
          height={1708}
          sizes="100vw"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="block absolute bottom-0 left-0 w-full h-[68%] z-[1] tablet:hidden bg-transparent">
        <Image
          src={mobileSrc}
          alt={alt}
          width={778}
          height={1016}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}