import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Spanish } from './entities/generals';

function Skills({ spanish }: Spanish) {
  const DynamicGraph = dynamic(() => import('./Graph'), {
    ssr: false,
  });
  const DynamicMobileGraph = dynamic(() => import('./Mobile/GraphMobile'), {
    ssr: false,
  });
  return (
    <div className="w-full pl-0 sm:pr-6 md:pl-8 md:pr-44 mix-blend-exclusion text-white flex flex-col sm:flex-row">
      {spanish ? (
        <div className="hidden sm:flex text-vertical transform -rotate-90 w-60 self-start h-0 mt-[25rem]">
          <motion.p
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase text-[3rem] md:text-[5rem] font-bold mix-blend-exclusion text-white cursor-default"
          >
            Habilidades
          </motion.p>
        </div>
      ) : (
        <div className="hidden sm:flex text-vertical transform -rotate-90 w-60 self-start h-0 mt-32">
          <motion.p
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase text-[3rem] md:text-[5rem] font-bold mix-blend-exclusion text-white cursor-default"
          >
            Skills
          </motion.p>
        </div>
      )}
      <div className="sm:hidden flex">
        <motion.p
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase text-[2rem] font-bold mix-blend-exclusion text-white border-b-4 w-full md:border-b-0 md:w-auto"
        >
          {spanish ? 'Habilidades' : 'Skills'}
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

export default Skills;
