import React from 'react';
import Image from 'next/image';
import Photo from '../public/Img/20211120_152652-02 (1)-01.jpeg';
import { motion } from 'framer-motion';
import { Spanish } from './entities/generals';
import PerfilMobile from './Mobile/PerfilMobile';
import SkillsCarrusel from './SkillsCarrusel';
function Perfil({ spanish }: Spanish) {
  return (
    <>
      <div className="flex justify-center md:hidden w-full">
        <PerfilMobile spanish={spanish} />
      </div>
      <div className="hidden w-4/5 pt-28 lg:pt-32 text-white 2xl:h-screen md:flex flex-col gap-12">
        <div className="h-[90%] w-full flex flex-col gap-6">
          <div className="h-[80%] w-full flex justify-between">
            <div className="">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 1 }}
                className="text-[4rem] 2xl:text-[6rem] font-bold mix-blend-exclusion text-white cursor-default hover:text-red-500 transition-colors leading-[4rem] lg:leading-none"
              >
                Santiago Cervan
              </motion.h1>
              <motion.h2
                initial={{ y: 160, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 1.2 }}
                className="text-[2rem] lg:text-[3rem] 2xl:text-[4rem] font-semibold lg:pl-3 mix-blend-exclusion z-40 absolute w-1/2 cursor-default text-teal-500 transition-colors"
              >
                {spanish ? 'Desarrollador Front End' : 'Front End Developer'}
              </motion.h2>
            </div>
            <div className="h-full flex justify-end items-center pr-4 z-0">
              <motion.div
                initial={{ x: 160, opacity: 0, rotate: 5 }}
                animate={{ x: 0, opacity: 100, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative md:h-44 md:w-44 lg:h-64 lg:w-64 2xl:h-96 2xl:w-96"
              >
                <Image
                  src={Photo}
                  alt="Photo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
          <SkillsCarrusel />
        </div>
        <div className="h-[10%] w-full flex justify-between relative mix-blend-exclusion">
          <p className="uppercase lg:text-lg font-semibold mix-blend-exclusion text-white cursor-default">
            {spanish ? 'Argentino' : 'From Argentina'}
          </p>
          <p className="uppercase lg:text-lg font-semibold mix-blend-exclusion text-white cursor-default">
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
