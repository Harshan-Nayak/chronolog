import { ClockIcon, ShieldCheckIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Intelligent Activity Tracking',
    description: 'Automatically tracks active windows and applications with smart session management and minimal system impact.',
    icon: ClockIcon,
  },
  {
    name: 'Privacy First',
    description: 'All data stays on your computer with no account creation or internet connection required. You have complete data ownership.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Smart Analytics',
    description: 'Get detailed insights with real-time monitoring, timeline visualization, and comprehensive usage patterns.',
    icon: ChartBarIcon,
  },
  {
    name: 'Resource Efficient',
    description: 'Designed to run silently in the background with minimal CPU and memory usage, ensuring smooth performance.',
    icon: CpuChipIcon,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Chronolog?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Designed with privacy, efficiency, and intelligence in mind, Chronolog helps you understand and optimize your digital time.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1d1d1f] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 text-center">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 