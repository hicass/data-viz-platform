import { FC } from 'react';
import { performanceData } from '../../data/dummyData';
import PerformanceCardSection from './PerformanceCardSection/PerformanceCardSection';
import GraphSection from './GraphSection/GraphSection';

const Dashboard: FC = () => {
  return (
    <div className='flex gap-4'>
      <GraphSection />
      <PerformanceCardSection performanceCards={performanceData} />
    </div>
  );
};

export default Dashboard;
