import { FC } from 'react';

export type ResultCardType = {
  result: string;
};

const ScenarioResultCard: FC<ResultCardType> = ({ result }) => {
  return (
    <article className='border-[#C8E972] border-[1px] rounded p-4 bg-[#C8E972]/5'>
      <p className='text-[#C9FF3B]'>{result}</p>
    </article>
  );
};

export default ScenarioResultCard;
