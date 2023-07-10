import React, { useState } from 'react';
import { motion } from 'framer-motion';

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-full flex justify-between px-16 py-6 fixed top-0 mix-blend-exclusion">
      <motion.div
        initial={{ width: 67 }}
        animate={isHovered ? { width: 170 } : { width: 67 }}
        transition={{ duration: 1 }}
        className="flex gap-1 text-lg font-semibold px-4 py-2 border-4 border-white text-white cursor-default"
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
      <div className="flex">
        <button className="w-20 text-lg font-semibold text-white">Algo</button>
        <button className="w-20 text-lg font-semibold text-white">
          Contact
        </button>
      </div>
    </div>
  );
}

export default NavBar;
