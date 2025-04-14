'use client';

import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, DocumentArrowDownIcon, TableCellsIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const exportFeatures = [
  {
    title: 'JSON Export',
    icon: DocumentArrowDownIcon,
    description: 'Export your data in JSON format for maximum flexibility and programmatic access.',
  },
  {
    title: 'CSV Export',
    icon: TableCellsIcon,
    description: 'Export to CSV format for easy analysis in spreadsheet software like Excel or Google Sheets.',
  },
  {
    title: 'Spreadsheet Compatible',
    icon: ArrowPathIcon,
    description: 'All exported data is compatible with popular spreadsheet software for further analysis.',
  },
  {
    title: 'Data Portability',
    icon: ArrowDownTrayIcon,
    description: 'Take your data with you and use it however you want. Your data, your choice.',
  },
];

const DataExport = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Export Your Data
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Your data belongs to you. Export it anytime in multiple formats for analysis or backup.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {exportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1d1d1f] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataExport; 