import { FC } from 'react';
import Graph from './Graph';

const Dashboard: FC = () => {
  return (
    <div className='h-[500px] w-2/3 bg-[#222323] border-lightGrey border-[1px] rounded'>
      <Graph />
    </div>
  )
}

export default Dashboard;