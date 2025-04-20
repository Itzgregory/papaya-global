'use client';
import { NavProvider } from '../../../../../lib/navContext';
import { ReactNode } from 'react';

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return <NavProvider>{children}</NavProvider>;
}