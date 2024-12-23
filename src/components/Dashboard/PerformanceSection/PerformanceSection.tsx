import { FC } from 'react';
import PerformanceCard, { PerformanceCardType } from './PerformanceCard';
import Button from '../../ui/Button';

interface PerformanceSectionProps {
  performanceCards: PerformanceCardType[];
}

// Component to render Performance Card related elements
const PerformanceSection: FC<PerformanceSectionProps> = ({
  performanceCards,
}) => {
  return (
    <section className="flex flex-col w-full xl:w-2/5">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Key Performance Indicators</h2>
        <Button
          text="Variables"
          style="text-sm bg-darkGrey hover:bg-white/5"
          onClick={() => console.log('Button Clicked!')}
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-6 mt-4">
        {/* Map through the performanceCards array and render a Card component for each item */}
        {performanceCards.map((card, idx) => (
          <PerformanceCard {...card} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default PerformanceSection;
