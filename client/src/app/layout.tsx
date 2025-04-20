import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../features/landingPage/component/view/nav/Navbar';
import Footer from '../features/landingPage/component/view/footer/footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export const metadata = {
  title: 'Papaya Global',
  description: 'Global payroll and payment solutions',
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 font-sans">
        <Navbar className="fixed top-0 w-full z-[999] bg-white shadow-header" />
        <main className="relative pt-[56px] debug-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}