import React from 'react';
import { motion } from 'framer-motion';
import { DarkSpanish } from './entities/generals';
import Clock from './Clock';
import Image from 'next/image';
import Esp from '../public/Icons/Esp.png';
import EspD from '../public/Icons/EspD.png';
import Ing from '../public/Icons/Ing.png';
import IngD from '../public/Icons/IngD.png';
function Contact({ darkMode, spanish }: DarkSpanish) {
  return (
    <>
      <div className="flex flex-col w-full sm:w-4/5 h-[97vh] sm:h-[92vh] pt-12 text-white xs:pb-8 sm:pb-2 relative">
        <a
          className="sm:hidden inline absolute sm:bottom-24 bottom-16 right-6 sm:right-20 animate-spin-slow transition-all cursor-pointer"
          href="mailto:santicervan@live.com"
        >
          {spanish && darkMode && (
            <Image src={EspD} alt="getintouch" width={100} />
          )}
          {spanish && !darkMode && (
            <Image src={Esp} alt="getintouch" width={100} />
          )}
          {!spanish && !darkMode && (
            <Image src={Ing} alt="getintouch" width={100} />
          )}
          {!spanish && darkMode && (
            <Image src={IngD} alt="getintouch" width={100} />
          )}
        </a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="hidden sm:flex absolute sm:bottom-24 bottom-16 right-6 sm:right-20 animate-spin-slow transition-all cursor-pointer w-62"
          href="mailto:santicervan@live.com"
        >
          {spanish && darkMode && (
            <Image src={EspD} alt="getintouch" width={200} />
          )}
          {spanish && !darkMode && (
            <Image src={Esp} alt="getintouch" width={200} />
          )}
          {!spanish && !darkMode && (
            <Image src={Ing} alt="getintouch" width={200} />
          )}
          {!spanish && darkMode && (
            <Image src={IngD} alt="getintouch" width={200} />
          )}
        </motion.a>
        <div className="mix-blend-exclusion border-b-4 border-white mb-0 xl:mb-2">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[2.5rem] 2xl:text-[5rem] font-bold leading-[4rem] pb-3 text-white uppercase cursor-default"
          >
            {spanish ? 'Contacto' : 'Contact'}
          </motion.p>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col w-3/4">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[3rem] sm:text-[4rem] leading-[3rem] sm:leading-[4.5rem] md:leading-normal xl:text-[6rem] font-semibold mix-blend-exclusion text-white cursor-default"
            >
              Santiago Cervan
            </motion.h1>
            <motion.h2
              initial={{ y: 160, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-[2rem] xl:text-[3rem] leading-[2rem] mt-4 xl:leading-normal font-bold xl:pl-1 mix-blend-exclusion text-white xl:-mt-4 cursor-default"
            >
              {spanish ? '>Desarrollador Front End' : '>Front End Developer'}
            </motion.h2>
            <motion.a
              initial={{ y: 160, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-[1.7rem] xs:text-[2rem] sm:text-[3rem] xl:text-[4rem] mt-2 xl:mt-0 mix-blend-exclusion hover:text-red-500 font-serif font-thin text-teal-500 pl-1 xl:pl-5 transition-colors"
              href="mailto:santicervan@live.com"
            >
              santicervan@live.com
            </motion.a>
            <motion.a
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-[2rem] lg:text-[3rem] 2xl:text-[6rem] pl-2 mix-blend-exclusion hover:text-red-500  xl:text-white font-serif font-thin xl:-mt-3 xl:hover:text-red-500 transition-colors xl:inline hidden"
              href="https://wa.me/543517380506"
              target="_blank"
            >
              +54 3517380506
            </motion.a>
            <a
              className="text-[2rem] xl:text-[6rem] pl-2 mix-blend-exclusion hover:text-red-500  xl:text-white font-serif font-thin xl:-mt-3 xl:hover:text-red-500 transition-colors inline xl:hidden"
              href="https://wa.me/543517380506"
              target="_blank"
            >
              +54 3517380506
            </a>
          </div>
          <div className="flex flex-col w-fit">
            <motion.a
              initial={{ x: 160, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[1.5rem] pl-2 xs:text-[2rem] sm:text-[2.5rem] xl:text-[6rem] mix-blend-exclusion text-white font-semibold xl:-mt-3 hover:text-red-500 pt-4 transition-colors"
              href="https://gitlab.com/SantiCervan"
              target="_blank"
            >
              GitLab
            </motion.a>
            <motion.a
              initial={{ x: 160, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="text-[1.5rem] pl-2 xs:text-[2rem] sm:text-[2.5rem] xl:text-[6rem] mix-blend-exclusion text-white font-bold xl:-mt-12 hover:text-red-500 pt-4 transition-colors"
              href="https://www.linkedin.com/in/santicervan/"
              target="_blank"
            >
              LinkedIn
            </motion.a>
            <motion.a
              initial={{ x: 160, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="text-[1.5rem] pl-2 xs:text-[2rem] sm:text-[2.5rem] xl:text-[6rem] mix-blend-exclusion text-white font-semibold xl:-mt-12 hover:text-red-500 pt-4 transition-colors"
              href="https://github.com/SantiCervan"
              target="_blank"
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row w-full sm:w-4/5 pl-2 xl:pl-0 gap-2 xl:gap-0 mt-4 xl:mt-0 xl:w-4/5 pb-4 xl:pb-12 justify-between ">
        {spanish ? (
          <a
            className="mix-blend-exclusion text-white hover:text-teal-500 text-xl xs:text-2xl xl:text-3xl underline underline-offset-4 font-serif animate-pulse-fast"
            href="./CV Santiago Cervan Front end.pdf"
            target="_blank"
          >
            Descarga mi CV 2024
          </a>
        ) : (
          <a
            className="mix-blend-exclusion text-white hover:text-teal-500 text-xl xl:text-3xl underline underline-offset-4 font-serif animate-pulse-fast"
            href="./CV English Santiago Cervan Front end.pdf"
            target="_blank"
          >
            Download 2024 CV
          </a>
        )}
        <Clock spanish={spanish} />
      </div>
    </>
  );
}

export default Contact;
