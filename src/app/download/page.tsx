'use client';

import { useEffect } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';


export default function DownloadPage() {
  useEffect(() => {
    // Trigger download automatically when the page loads
    const downloadUrl = '/downloads/chronolog.exe';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'chronolog.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-16 flex flex-col items-center bg-gray-50">
      <div className="text-center max-w-3xl mx-auto px-4">
        <ArrowDownTrayIcon className="h-16 w-16 mx-auto text-[#1d1d1f]" />
        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          Your Download Should Begin Shortly
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          If your download doesn&apos;t start automatically, 
          <a
            href="/downloads/chronolog.exe"
            download
            className="text-[#1d1d1f] font-semibold hover:underline"
          >
            click here
          </a>
          .
        </p>

        <div className="mt-12 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">System Requirements</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Windows 10 or later</li>
              <li>• Storage: Less than 100MB</li>
              <li>• Memory: Less than 100MB RAM</li>
              <li>• Any modern CPU</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Quick Start Guide</h2>
            <ol className="mt-4 space-y-2 text-gray-600 list-decimal list-inside">
              <li>Run the downloaded installer</li>
              <li>Follow the installation wizard</li>
              <li>Launch Chronolog from your desktop or start menu</li>
              <li>The app will start tracking automatically</li>
            </ol>
          </div>
        </div>

       
      </div>
    </div>
  );
} 