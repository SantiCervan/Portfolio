import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

function Habilities() {
  const DynamicGraph = dynamic(() => import('./Graph'), {
    ssr: false,
  });
  const DynamicMobileGraph = dynamic(() => import('./Mobile/GraphMobile'), {
    ssr: false,
  });
  return (
    <div className="w-full sm:pl-8 sm:pr-44 mix-blend-exclusion text-white flex flex-col sm:flex-row">
      <div className="hidden sm:flex text-vertical transform -rotate-90 w-60 self-start h-0 mt-32">
        <motion.p
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase text-[5rem] font-bold mix-blend-exclusion text-white"
        >
          Skills
        </motion.p>
      </div>
      <div className="sm:hidden flex">
        <motion.p
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase text-[2rem] font-bold mix-blend-exclusion text-white"
        >
          Skills
        </motion.p>
      </div>
      <div className="w-full border-l-4 mb-4 hidden sm:flex">
        <DynamicGraph />
      </div>
      <div className="w-full mb-12 sm:hidden flex">
        <DynamicMobileGraph />
      </div>
    </div>
  );
}

export default Habilities;
