import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-bg-primary border-t border-border">
      <div className="container-custom text-center">
        <p className="text-text-tertiary text-sm">
          &copy; {currentYear} Tên: Hoàng Yến. Built with attention to detail.
        </p>
      </div>
    </footer>
  );
}

