import { FC } from 'react';
import Graph, { GraphProps } from './Graph';

// GraphSection renders the graph related elements
const GraphSection: FC<GraphProps> = ({ graphData }) => {
  return (
    <section className="flex flex-col w-full lg:w-1/2 xl:w-3/5">
      <h2 className="text-2xl font-semibold">Graphs</h2>

      {/* Graph component receives the graphData as a prop to render the chart */}
      <div className='h-full w-full flex items-end mt-6 bg-[#222323] border-lightGrey border-[1px] rounded'>
        <Graph graphData={graphData} />
      </div>
    </section>
  );
};

export default GraphSection;
