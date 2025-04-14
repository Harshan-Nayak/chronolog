'use client';

import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

const useCases = [
  {
    title: 'Professional Time Management',
    description: 'Track billable hours, monitor project time allocation, and validate time sheets effortlessly.',
    icon: BriefcaseIcon,
  },
  {
    title: 'Educational Tracking',
    description: 'Monitor study sessions, track learning application usage, and analyze study patterns to improve productivity.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Team Management',
    description: 'Track team productivity, monitor software usage, and optimize workflow efficiency.',
    icon: UserGroupIcon,
  },
  {
    title: 'Personal Productivity',
    description: 'Understand your digital habits, identify time-wasting patterns, and maintain a healthy work-life balance.',
    icon: HomeIcon,
  },
];

const UseCases = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Use Cases
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how Chronolog can help you in different scenarios
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1d1d1f] text-white">
                    <useCase.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases; 