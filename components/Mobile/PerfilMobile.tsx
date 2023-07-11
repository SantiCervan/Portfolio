import React from 'react';
import Image from 'next/image';
import Photo from '../../public/Img/20211120_152652-02 (1)-01.jpeg';
import { motion } from 'framer-motion';
import { Generals } from '../entities/generals';

function PerfilMobile({ setDarkMode, darkMode }: Generals) {
  return (
    <div
      className={`w-full px-1 h-screen pt-20 ${darkMode ? 'text-white' : ''}`}
    >
      <div className="h-[80%] xs:h-[90%] w-full flex">
        <div className="w-[60%]">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            className="text-[4rem] xs:text-[5rem] font-bold mix-blend-exclusion text-white"
          >
            Santiago Cervan
          </motion.h1>
          <motion.h2
            initial={{ y: 160, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 1.2 }}
            className="text-[3rem] xs:text-[4rem] font-semibold pl-3 mix-blend-exclusion text-white z-40 absolute w-20 leading-tight"
          >
            Front End Developer
          </motion.h2>
        </div>
        <div className="h-full w-[40%] flex justify-end items-center pt-20 xs:pt-36 z-0">
          <motion.div
            initial={{ x: 3, opacity: 0, rotate: 5 }}
            animate={{ x: 0, opacity: 100, rotate: 0 }}
            transition={{ duration: 1 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 0,
              bottom: 150,
            }}
            className="relative"
          >
            <Image
              src={Photo}
              alt="Photo"
              height={400}
              width={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <div className={`h-[10%] w-full flex-col justify-between`}>
        <p className="uppercase font-semibold mix-blend-exclusion text-white">
          From Argentina
        </p>
        <p className="uppercase font-semibold mix-blend-exclusion text-white text-sm">
          Available to companies anywhere in the world
        </p>
      </div>
    </div>
  );
}

export default PerfilMobile;
