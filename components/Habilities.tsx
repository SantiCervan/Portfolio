import React from 'react';
import dynamic from 'next/dynamic';

function Habilities() {
  const DynamicGraph = dynamic(() => import('./Graph'), {
    ssr: false,
  });
  return (
    <div>
      <p>Habilities</p>
      <DynamicGraph />
    </div>
  );
}

export default Habilities;
