import { FC } from 'react';
import Graph from './Graph';

const GraphSection: FC = () => {
  return (
    <div className='h-[500px] w-4/5'>
      <h2 className='text-2xl font-semibold mb-4'>Graphs</h2>

      <Graph />
    </div>
  );
};

export default GraphSection;
