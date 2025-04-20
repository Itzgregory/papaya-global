import Link from 'next/link';

export default function TestimonialsIntro() {
  return (
    <div className="testimonials-intro">
      <div className="testimonials-intro-text">
        <h2>Our customers say it best</h2>
        <div>
          <p>
            Discover how businesses across diverse industries are transforming their global operations—streamlining payroll, enhancing compliance, <br />
            and driving scalable growth—through the power of our end-to-end workforce solutions.
          </p>
          <p className="bold">
            From unifying workforce management to simplifying cross-border payments.
          </p>
        </div>
      </div>
      <Link href="/case-studies/" className="testimonials-intro-link">
        Explore our case studies
      </Link>
    </div>
  );
}