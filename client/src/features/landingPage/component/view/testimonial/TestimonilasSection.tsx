'use client';
import useTestimonialsLogic from './TestimonialsLogic';
import TestimonialsDisplay from './TestimonialsDisplay';

export default function ResponsiveTestimonialsSection() {
  const logic = useTestimonialsLogic();
  return <TestimonialsDisplay {...logic} />;
}