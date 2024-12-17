import { FC } from 'react';
import {
  performanceData,
  graphData,
  scenarioResultData,
} from '../../data/dummyData';
import PerformanceCardSection from './PerformanceCardSection/PerformanceCardSection';
import GraphSection from './GraphSection/GraphSection';
import ScenarioResultsSection from './ScenarioResultsSection/ScenarioResultsSection';
import Button from '../ui/Button';

// Component to render the Dashboard view
const Dashboard: FC = () => {
  return (
    <section className="h-full flex flex-col gap-10 bg-darkGrey p-8">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-bold">Charging Station</h1>
        <Button
          text="Edit Variables"
          style="bg-grey hover:bg-white/10"
          onClick={() => console.log('Button Clicked!')}
        />
      </div>

      <ScenarioResultsSection scenarioResultCards={scenarioResultData} />

      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <GraphSection graphData={graphData} />
        <PerformanceCardSection performanceCards={performanceData} />
      </div>
    </section>
  );
};

export default Dashboard;
