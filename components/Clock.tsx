import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { Spanish } from './entities/generals';
function Clock({ spanish }: Spanish) {
  const [currentTime, setCurrentTime] = useState<string>('');
  useEffect(() => {
    const interval = setInterval(() => {
      const time = moment()
        .tz('America/Argentina/Buenos_Aires')
        .format('HH:mm:ss');
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pt-2 cursor-default">
      {spanish ? (
        <h1 className="md:text-2xl mix-blend-exclusion text-white">
          Son las{' '}
          <span className="font-semibold text-lg md:text-3xl font-mono ">
            {currentTime}
          </span>{' '}
          en Argentina!
        </h1>
      ) : (
        <h1 className="md:text-2xl mix-blend-exclusion text-white">
          {"It's"}{' '}
          <span className="font-semibold text-lg md:text-3xl font-mono ">
            {currentTime}
          </span>{' '}
          in Argentina!
        </h1>
      )}
    </div>
  );
}

export default Clock;
