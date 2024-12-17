import { FC } from 'react';
import { performanceData, graphData, scenarioResultData } from '../../data/dummyData';
import PerformanceCardSection from './PerformanceCardSection/PerformanceCardSection';
import GraphSection from './GraphSection/GraphSection';
import ScenarioResultsSection from './ScenarioResultsSection/ScenarioResultsSection';

const Dashboard: FC = () => {
  return (
    <section className="h-full flex flex-col gap-10 bg-darkGrey p-8">
      <h1 className="text-3xl font-bold">Charging Station</h1>
      <ScenarioResultsSection scenarioResultCards={scenarioResultData} />

      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <GraphSection graphData={graphData} />
        <PerformanceCardSection performanceCards={performanceData} />
      </div>
    </section>
  );
};

export default Dashboard;
