import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import DetailedFeatures from '@/components/home/DetailedFeatures';
import DetailedUseCases from '@/components/home/DetailedUseCases';
// import DataExport from '@/components/home/DataExport';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DetailedFeatures />
      <DetailedUseCases />
      {/* <DataExport /> */}
    </>
  );
}
