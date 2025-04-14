'use client';

import { motion } from 'framer-motion';
import {
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CpuChipIcon,
  ViewColumnsIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';

const featureCategories = [
  {
    title: 'Silent Activity Tracking',
    icon: ClockIcon,
    features: [
      'Automatically tracks all application usage in real-time',
      'Runs quietly in the system tray',
      'Minimal system resource usage',
      'Start/pause tracking with one click',
    ],
  },
  {
    title: 'Privacy-Focused',
    icon: ShieldCheckIcon,
    features: [
      'All data stored locally on your computer',
      'No data sent to external servers',
      'Complete control over your data',
      'Export or delete your data anytime',
    ],
  },
  {
    title: 'Intuitive Dashboard',
    icon: ViewColumnsIcon,
    features: [
      'Beautiful timeline visualization',
      'Daily activity summaries',
      'Real-time activity updates',
      'Easy-to-read statistics',
    ],
  },
  {
    title: 'Detailed Analytics',
    icon: ChartBarIcon,
    features: [
      'Total active time tracking',
      'Most used applications',
      'Average session duration',
      'Hourly activity breakdown',
    ],
  },
  {
    title: 'Smart Filtering & Organization',
    icon: ArrowsPointingOutIcon,
    features: [
      'Filter by date range and time of day',
      'Filter by application name',
      'Group activities by application',
      'Merge consecutive sessions',
    ],
  },
  {
    title: 'System Integration',
    icon: CpuChipIcon,
    features: [
      'Automatic startup with Windows',
      'System tray quick access',
      'Desktop notifications (optional)',
      'Lightweight and efficient',
    ],
  },
];

const DetailedFeatures = () => {
  return (
    <div id="features" className="bg-gray-50 py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Your Productivity
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Every feature is designed to help you understand and optimize your digital time while maintaining complete privacy.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {featureCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1d1d1f] text-white">
                    <category.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="mt-8 space-y-4">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                        <div className="h-2 w-2 bg-[#1d1d1f] rounded-full" />
                      </div>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedFeatures; 