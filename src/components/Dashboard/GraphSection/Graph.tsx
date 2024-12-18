import { FC } from 'react';
import { ResponsiveLine } from '@nivo/line';

// Type for individual data points
type DataPoint = {
  x: string;
  y: number;
};

// Type for a graph series
export type GraphSeries = {
  id: string;
  color: string;
  data: DataPoint[];
};

// Prop for the entire dataset passed to the graph
export interface GraphProps {
  graphData: GraphSeries[];
}

// Theme object to help set graph style
const graphTheme = {
  grid: {
    line: {
      stroke: '#575757',
      strokeWidth: 1,
    },
  },
  axis: {
    ticks: {
      text: {
        fontSize: 14,
        fill: '#ffffff',
        outlineWidth: 0,
        outlineColor: 'transparent',
      },
    },
  },
  tooltip: {
    wrapper: {},
    container: {
      background: '#222323',
      color: '#FFFFFF',
      fontSize: 14,
    },
  },
};

// Component to render the graph
const Graph: FC<GraphProps> = ({ graphData }) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine
        data={graphData}
        theme={graphTheme}
        enableArea={true}
        enableGridX={false}
        gridYValues={[20, 40, 60, 80, 100]}
        areaBaselineValue={20}
        colors={['#C8E972']}
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 20,
          max: 110,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 20,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 1,
          tickPadding: 20,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        enablePoints={false}
        pointLabelYOffset={-17}
        // enableTouchCrosshair={true}
        useMesh={true}
      />
    </div>
  );
};

export default Graph;
