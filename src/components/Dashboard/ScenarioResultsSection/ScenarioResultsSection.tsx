import { FC } from 'react';
import ScenarioResultCard, { ResultCardType } from './ScenarioResultCard';

interface ScenarioResultsSectionProps {
  scenarioResultCards: ResultCardType[];
}

const ScenarioResultsSection: FC<ScenarioResultsSectionProps> = ({
  scenarioResultCards,
}) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#DCFF7F]">
        Best Scenario Results
      </h2>

      <div className='flex flex-col gap-4 mt-4'>
        {scenarioResultCards.map((card, idx) => (
          <ScenarioResultCard {...card} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default ScenarioResultsSection;
