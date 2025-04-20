export interface Testimonial {
    id: number;
    metrics: Metric[];
    backgroundImage: ImageProps;
    logo: ImageProps;
    quote: string;
    author: string;
    link: string;
    navLogos: {
      default: ImageProps;
      active: ImageProps;
    };
  }
  
  export interface Metric {
    title: string;
    description: string;
  }
  
  export interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
  }