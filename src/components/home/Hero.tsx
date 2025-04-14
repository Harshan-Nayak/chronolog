'use client';

import Link from 'next/link';

const QuickStat = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-2">
    <div className="h-2 w-2 bg-[#1d1d1f] rounded-full" />
    <span className="text-gray-700">{text}</span>
  </div>
);

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="relative pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Chronolog</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 text-gray-500">
                Your Personal Activity Intelligence Platform
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Track, analyze, and optimize your digital time with precision and privacy
            </p>

            <div className="mt-12 flex justify-center space-x-6">
              <Link
                href="/download"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1d1d1f] hover:bg-gray-800 transition-colors"
              >
                Download Now
              </Link>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl mx-auto">
              <QuickStat text="100% Privacy-Focused" />
              <QuickStat text="Real-Time Tracking" />
              <QuickStat text="Zero Configuration" />
              <QuickStat text="Local Data Storage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 