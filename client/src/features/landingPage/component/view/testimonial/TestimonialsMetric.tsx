import { Metric } from '@/features/landingPage/type/testimonial/testimonial';

interface TestimonialsMetricsProps {
  metrics: Metric[];
}

export default function TestimonialsMetrics({ metrics }: TestimonialsMetricsProps) {
  return (
    <div className="testimonials-metrics">
      <div className="metrics-list">
        {metrics.map((metric, index) => (
          <div key={index} className="metrics-item">
            <h2>{metric.title}</h2>
            <p>{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}