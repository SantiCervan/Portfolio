import React from 'react';
import Image from 'next/image';
import Photo from '../public/Img/20211120_152652-02 (1)-01.jpeg';
import { motion } from 'framer-motion';
import { Spanish } from './entities/generals';
import PerfilMobile from './Mobile/PerfilMobile';
import scroll from '../public/Icons/abajo.png';
function Perfil({ spanish }: Spanish) {
  return (
    <>
      <div className="flex justify-center sm:hidden w-full">
        <PerfilMobile spanish={spanish} />
      </div>
      <div className="sm:inline hidden w-4/5 h-screen pt-32 text-white">
        <div className="h-[90%] w-full flex">
          <div className="w-[60%]">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ duration: 1 }}
              className="text-[6rem] font-bold mix-blend-exclusion text-white"
            >
              Santiago Cervan
            </motion.h1>
            <motion.h2
              initial={{ y: 160, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ duration: 1.2 }}
              className="text-[4rem] font-semibold pl-3 mix-blend-exclusion text-white"
            >
              {spanish ? 'Desarrollador Front End' : 'Front End Developer'}
            </motion.h2>
          </div>
          <div className="h-full w-[40%] flex justify-end items-center pr-4">
            <motion.div
              initial={{ x: 160, opacity: 0, rotate: 5 }}
              animate={{ x: 0, opacity: 100, rotate: 0 }}
              transition={{ duration: 1 }}
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
        <div className="h-[10%] w-full flex justify-between relative mix-blend-exclusion">
          <motion.div
            initial={{ y: 160, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ delay: 3 }}
            className="animate-bounce absolute bottom-0 left-1/2"
          >
            <Image src={scroll} alt="Scroll" width={40} height={40} />
          </motion.div>
          <p className="uppercase text-lg font-semibold mix-blend-exclusion text-white">
            {spanish ? 'Argentino' : 'From Argentina'}
          </p>
          <p className="uppercase text-lg font-semibold mix-blend-exclusion text-white">
            {spanish
              ? 'Disponible para empresas de todo el mundo'
              : 'Available to companies anywhere in the world'}
          </p>
        </div>
      </div>
    </>
  );
}

export default Perfil;
