import { FC } from 'react';
import Graph, { GraphProps } from './Graph';

// GraphSection renders the graph related elements
const GraphSection: FC<GraphProps> = ({ graphData }) => {
  return (
    <div className="h-[500px] w-full xl:max-w-5xl">
      <h2 className="text-2xl font-semibold mb-4">Graphs</h2>

      {/* Graph component receives the graphData as a prop to render the chart */}
      <Graph graphData={graphData} />
    </div>
  );
};

export default GraphSection;
