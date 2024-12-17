import { FC } from 'react';
import Card, { CardType } from './Card';

interface PerformanceCardsProps {
  performanceCards: CardType[];
}

// Component to render Performance Card related elements
const PerformanceCardSection: FC<PerformanceCardsProps> = ({
  performanceCards,
}) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Key Performance Indicators</h2>

      <div className="h-full grid grid-cols-2 gap-6 mt-4">
        {/* Map through the performanceCards array and render a Card component for each item */}
        {performanceCards.map((card, idx) => (
          <Card {...card} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default PerformanceCardSection;
