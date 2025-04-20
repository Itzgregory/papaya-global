import Header from './header';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return <Header className={className} />;
}