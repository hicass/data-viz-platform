import { FC, useState } from 'react';
import {
  performanceData,
  graphData,
  scenarioResultData,
  variableCategoryData,
} from '../../data/dummyData';
import PerformanceSection from './PerformanceSection/PerformanceSection';
import GraphSection from './GraphSection/GraphSection';
import ScenarioResultsSection from './ScenarioResultsSection/ScenarioResultsSection';
import Button from '../ui/Button';
import VariablePanel from './VariablePanel/VariablePanel';
import ScreenBlur from '../ui/ScreenBlur';
import ViewController from './ViewController/ViewController';

// Component to render the Dashboard view
const Dashboard: FC = () => {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <main className='flex flex-col h-full w-full'>
      <ViewController />

      <div className="relative h-full w-full flex flex-col gap-10 bg-darkGrey p-8 border-lightGrey border-[1px] rounded overflow-scroll">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold">Charging Station</h1>
          <Button
            text="Edit Variables"
            style="bg-grey hover:bg-white/10"
            onClick={() => setPanelOpen(true)}
          />
        </div>

        <ScenarioResultsSection scenarioResultCards={scenarioResultData} />

        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-6">
          <GraphSection graphData={graphData} />
          <PerformanceSection performanceCards={performanceData} />
        </div>

        {/* If the panelOpen state is true, render the panel related components */}
        {panelOpen && (
          <>
            <ScreenBlur />
            <VariablePanel
              setPanelOpen={setPanelOpen}
              variableCategoryData={variableCategoryData}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
