import { FC } from 'react';

const ScreenBlur:FC = () => {
  return <div className='absolute top-0 right-0 bg-black/50 backdrop-blur-[2px] z-10 w-full h-screen'></div>
}

export default ScreenBlur;