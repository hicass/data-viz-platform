import { FC } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { graphData } from '../data/dummyData';

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

const Graph: FC = () => {
  return (
    <ResponsiveLine
      data={graphData}
      theme={graphTheme}
      enableArea={true}
      enableGridX={false}
      gridYValues={[20, 40, 60, 80, 100]}
      areaBaselineValue={20}
      colors={['#C8E972']}
      margin={{ top: 80, right: 60, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 20,
        max: 110,
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 1,
        tickPadding: 10,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enablePoints={false}
      pointLabelYOffset={-17}
      enableTouchCrosshair={true}
      
      useMesh={true}
    />
  );
};

export default Graph;
