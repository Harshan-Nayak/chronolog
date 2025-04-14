'use client';

import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  UserGroupIcon,
  HomeIcon,
  HeartIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline';

const useCases = [
  {
    title: 'Personal Productivity',
    icon: HomeIcon,
    features: [
      'Track time spent on productive vs. distracting applications',
      'Identify time-wasting patterns',
      'Set goals for application usage',
      'Monitor work-life balance',
    ],
  },
  {
    title: 'Professional Time Tracking',
    icon: BriefcaseIcon,
    features: [
      'Track billable hours',
      'Monitor project time allocation',
      'Generate activity reports',
      'Validate time sheets',
    ],
  },
  {
    title: 'Habit Formation',
    icon: ChartBarSquareIcon,
    features: [
      'Monitor application usage patterns',
      'Set usage goals',
      'Track progress over time',
      'Identify and break bad habits',
    ],
  },
  {
    title: 'Parental Monitoring',
    icon: HeartIcon,
    features: [
      'Monitor children\'s computer usage',
      'Track application time limits',
      'Ensure healthy computer habits',
      'Generate usage reports',
    ],
  },
  {
    title: 'Team Management',
    icon: UserGroupIcon,
    features: [
      'Track team productivity',
      'Monitor software usage',
      'Optimize workflow efficiency',
      'Resource allocation insights',
    ],
  },
  {
    title: 'Educational Use',
    icon: AcademicCapIcon,
    features: [
      'Track study time',
      'Monitor learning application usage',
      'Analyze study patterns',
      'Improve study habits',
    ],
  },
];

const DetailedUseCases = () => {
  return (
    <div id="use-cases" className="bg-white py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Use Cases
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover how Chronolog can enhance productivity across different scenarios
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1d1d1f] text-white">
                    <useCase.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <ul className="mt-8 space-y-4">
                  {useCase.features.map((feature, featureIndex) => (
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

export default DetailedUseCases; 