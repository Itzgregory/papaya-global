import Image from 'next/image';
import Link from 'next/link';
import { Testimonial } from '@/features/landingPage/type/testimonial/testimonial';

interface TestimonialsBoxProps {
  testimonial: Testimonial;
}

export default function TestimonialsBox({ testimonial }: TestimonialsBoxProps) {
  return (
    <div className="testimonials-box">
      <Image
        src={testimonial.backgroundImage.src}
        alt={testimonial.backgroundImage.alt}
        width={testimonial.backgroundImage.width}
        height={testimonial.backgroundImage.height}
        className="testimonials-box-bg"
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      <div className="testimonials-box-content">
        <div className="testimonials-box-logo">
          <Image
            src={testimonial.logo.src}
            alt={testimonial.logo.alt}
            width={testimonial.logo.width}
            height={testimonial.logo.height}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '60px'
            }}
          />
        </div>
        <div className="testimonials-box-quote">
          <p>{testimonial.quote}</p>
        </div>
        <div className="testimonials-box-author">{testimonial.author}</div>
        <Link href={testimonial.link} className="testimonials-box-link">
          Explore more
        </Link>
      </div>
    </div>
  );
}