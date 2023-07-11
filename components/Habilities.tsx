import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

function Habilities() {
  const DynamicGraph = dynamic(() => import('./Graph'), {
    ssr: false,
  });
  return (
    <div className="w-full mix-blend-exclusion text-white flex flex-col px-1 sm:px-0 sm:items-center">
      <div className="sm:w-4/5">
        <motion.p
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase text-[5rem] font-bold mix-blend-exclusion text-white"
        >
          SKILLS
        </motion.p>
      </div>
      <DynamicGraph />
    </div>
  );
}

export default Habilities;
