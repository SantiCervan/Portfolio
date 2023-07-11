import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Generals } from '../entities/generals';
import Image from 'next/image';
import sol from '../../public/Icons/sol.png';
import luna from '../../public/Icons/luna.png';
function NavBar({ setDarkMode, darkMode, setSpanish, spanish }: Generals) {
  const toggleSwitch = () => setDarkMode(!darkMode);
  return (
    <div className="w-full flex justify-between px-2 xs:px-3 py-6 fixed top-0 mix-blend-exclusion items-center text-white z-50">
      <motion.div
        initial={{ width: 170 }}
        animate={{ width: 67 }}
        transition={{ delay: 2, duration: 1.8 }}
        className="flex gap-1 text-lg font-semibold px-4 py-2 border-4 border-white cursor-default h-13 non-selectable"
      >
        <div className="flex ">
          <p>S</p>
          <motion.p
            initial={{ opacity: 100, x: 0 }}
            animate={{ opacity: 0, x: -20 }}
            transition={{ easing: 'linear', delay: 2, duration: 0.8 }}
          >
            antiago
          </motion.p>
        </div>
        <div className="flex ">
          <motion.p
            initial={{ x: 0 }}
            animate={{ x: -60 }}
            transition={{ easing: 'linear', delay: 2, duration: 1.8 }}
          >
            C
          </motion.p>
          <motion.p
            initial={{ opacity: 100, x: 0 }}
            animate={{ opacity: 0, x: -20 }}
            transition={{ easing: 'linear', delay: 2, duration: 0.8 }}
          >
            ervan
          </motion.p>
        </div>
      </motion.div>
      <div className="flex gap-2 xs:gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{ delay: 3 }}
          className="flex flex-col w-8 h-14 gap-1 cursor-pointer items-end"
        >
          <p
            className={`${
              spanish ? 'font-normal' : 'font-bold text-xl'
            } text-md transition-all`}
            onClick={() => {
              if (setSpanish) {
                setSpanish(false);
              }
            }}
          >
            EN
          </p>
          <p
            className={`${
              spanish ? 'font-bold text-xl' : 'font-normal'
            } text-md transition-all`}
            onClick={() => {
              if (setSpanish) {
                setSpanish(true);
              }
            }}
          >
            ESP
          </p>
        </motion.div>
        <div className="flex flex-row-reverse gap-1">
          <div
            className={`bg-white w-6 h-12 flex justify-center py-1 cursor-pointer ${
              darkMode ? 'items-end' : 'items-start'
            }`}
            onClick={toggleSwitch}
          >
            <motion.div
              className="bg-black w-4 h-6"
              layout
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ easing: 'linear' }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 2 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col h-12 justify-between items-center pointer-events-none"
          >
            <Image src={sol} width={20} height={20} alt="sun" />
            <Image src={luna} width={18} height={18} alt="moon" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
