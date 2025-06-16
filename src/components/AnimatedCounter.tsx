import type { FC } from 'react';
import CountUp from 'react-countup';

import { counterItems } from '../constants';

interface AnimatedCounterProps {}

export const AnimatedCounter: FC<AnimatedCounterProps> = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((counterItem) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={counterItem.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp end={counterItem.value} suffix={counterItem.suffix} />
            </div>
            <div className="text-white-50 text-lg">{counterItem.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
