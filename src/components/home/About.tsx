'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden bg-white py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is Chronolog?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Chronolog is an intelligent activity tracking application that silently monitors your computer usage patterns while respecting your privacy.
              </p>

              <dl className="mt-12 space-y-10">
                <div className="relative">
                  <dt className="font-semibold text-gray-900">Complete Privacy</dt>
                  <dd className="mt-2 text-gray-600">
                    All your data stays locally on your machine, giving you complete control over your information. No account creation required.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-semibold text-gray-900">Effortless Tracking</dt>
                  <dd className="mt-2 text-gray-600">
                    Runs silently in the background with automatic startup and minimal system resource usage. No configuration needed.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-semibold text-gray-900">Smart Analytics</dt>
                  <dd className="mt-2 text-gray-600">
                    Get detailed insights into your digital habits with real-time monitoring and comprehensive timeline visualization.
                  </dd>
                </div>
              </dl>
            </motion.div>
          </div>

          <div className="relative flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[120%] -mr-[10%] aspect-[16/9] rounded-2xl shadow-lg"
            >
              <Image
                src="/preview.png"
                alt="Chronolog Dashboard Preview"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 