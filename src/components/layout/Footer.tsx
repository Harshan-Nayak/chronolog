'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = {
  main: [
    { name: 'Features', href: 'features' },
    { name: 'Use Cases', href: 'use-cases' },
    { name: 'Download', href: '/download' },
  ],
};

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      return href; // Regular link navigation
    }

    if (!isHomePage) {
      return `/#${href}`; // Redirect to home with hash
    }

    // Scroll to section if on home page
    const element = document.getElementById(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Chronolog
              </Link>
              <p className="text-sm text-gray-600 mt-2">
                Your Personal Activity Intelligence Platform
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith('/') ? (
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">System Requirements</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>Windows 10 or later</li>
                <li>Storage: {'<'} 100MB</li>
                <li>Memory: {'<'} 100MB RAM</li>
                <li>Any modern CPU</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-8">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Chronolog. All rights reserved, Built By Harshan Nayak
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 