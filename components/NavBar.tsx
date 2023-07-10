import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Generals } from './entities/generals';
import Image from 'next/image';
import sol from '../public/Icons/sol.png';
import luna from '../public/Icons/luna.png';
function NavBar({ setDarkMode, darkMode }: Generals) {
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
  return (
    <div className="w-full flex justify-between px-16 py-6 fixed top-0 mix-blend-exclusion items-center">
      <motion.div
        initial={{ width: 67 }}
        animate={isHovered ? { width: 170 } : { width: 67 }}
        transition={{ duration: 1 }}
        className="flex gap-1 text-lg font-semibold px-4 py-2 border-4 border-white text-white cursor-default h-13"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex ">
          <p>S</p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={
              isHovered ? { opacity: 100, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 1, easing: 'linear' }}
          >
            antiago
          </motion.p>
        </div>
        <div className="flex ">
          <motion.p
            initial={{ x: -60 }}
            animate={isHovered ? { x: 0 } : { x: -60 }}
            transition={{ duration: 1, easing: 'linear' }}
          >
            C
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={
              isHovered ? { opacity: 100, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 1, easing: 'linear' }}
          >
            ervan
          </motion.p>
        </div>
      </motion.div>
      <div className="flex gap-1">
        <div
          className={`bg-white w-6 h-12 flex justify-center py-1 ${
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
          animate={
            isHoveredSwitch ? { opacity: 100, x: 0 } : { opacity: 0, x: -20 }
          }
          className="flex flex-col h-12 justify-between items-center pointer-events-none"
        >
          <Image src={sol} width={20} height={20} alt="sun" />
          <Image src={luna} width={18} height={18} alt="moon" />
        </motion.div>
      </div>
    </div>
  );
}

export default NavBar;
