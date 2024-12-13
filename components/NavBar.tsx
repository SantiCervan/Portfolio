import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Generals } from './entities/generals';
import Image from 'next/image';
import sol from '../public/Icons/sol.png';
import luna from '../public/Icons/luna.png';
import NavBarMobile from './Mobile/NavBarMobile';
function NavBar({ setDarkMode, darkMode, setSpanish, spanish }: Generals) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSwitch, setIsHoveredSwitch] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleHoverSwitch = () => {
    setIsHoveredSwitch(true);
  };
  const handleMouseLeaveSwitch = () => {
    setIsHoveredSwitch(false);
  };
  const toggleSwitch = () => setDarkMode(!darkMode);
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  return (
    <>
      <div className="w-full flex sm:hidden">
        <NavBarMobile
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          setSpanish={setSpanish}
          spanish={spanish}
        />
      </div>
      <div className="hidden w-full sm:flex justify-between px-16 py-6 fixed top-0 mix-blend-exclusion items-center text-white z-50">
        <motion.div
          initial={{ width: 170 }}
          animate={isHovered ? { width: 180 } : { width: 72 }}
          transition={{ duration: 1 }}
          className="flex gap-1 text-lg font-semibold px-4 py-2 border-4 border-white h-13 non-selectable cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={() => scrollToBottom()}
        >
          <div className="flex">
            <p>S</p>
            <motion.p
              initial={{ opacity: 100, x: 0 }}
              animate={
                isHovered ? { opacity: 100, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ easing: 'linear', duration: 1 }}
            >
              antiago
            </motion.p>
          </div>
          <div className="flex">
            <motion.p
              initial={{ x: 0 }}
              animate={isHovered ? { x: 0 } : { x: -60 }}
              transition={{ easing: 'linear', duration: 1 }}
            >
              C
            </motion.p>
            <motion.p
              initial={{ opacity: 100, x: 0 }}
              animate={
                isHovered ? { opacity: 100, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ easing: 'linear', duration: 1 }}
            >
              ervan
            </motion.p>
          </div>
        </motion.div>
        <div className="flex gap-14 items-center">
          <div className="flex gap-1 cursor-pointer">
            <p
              className={`${
                spanish ? 'font-normal' : 'font-bold text-xl'
              } text-md hover:text-xl transition-all`}
              onClick={() => {
                if (setSpanish) {
                  setSpanish(false);
                }
              }}
            >
              EN
            </p>
            <p>/</p>
            <p
              className={`${
                spanish ? 'font-bold text-xl' : 'font-normal'
              } text-md hover:text-xl transition-all`}
              onClick={() => {
                if (setSpanish) {
                  setSpanish(true);
                }
              }}
            >
              ESP
            </p>
          </div>
          <div className="flex gap-1">
            <div
              className={`bg-white w-6 h-12 flex justify-center py-1 cursor-pointer ${
                darkMode ? 'items-end' : 'items-start'
              }`}
              onClick={toggleSwitch}
              onMouseEnter={handleHoverSwitch}
              onMouseLeave={handleMouseLeaveSwitch}
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
              initial={{ opacity: 100, x: 0 }}
              animate={
                isHoveredSwitch
                  ? { opacity: 100, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              transition={{ delay: 0.2 }}
              className="flex flex-col h-12 justify-between items-center pointer-events-none"
            >
              <Image src={sol} width={20} height={20} alt="sun" />
              <Image src={luna} width={18} height={18} alt="moon" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
