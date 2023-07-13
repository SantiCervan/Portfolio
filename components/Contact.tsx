import React from 'react';
import { motion } from 'framer-motion';
import { Spanish } from './entities/generals';
function Contact({ spanish }: Spanish) {
  return (
    <>
      <div className="flex flex-col w-full md:w-4/5 h-[97vh] sm:h-[92vh] pt-12 text-white xs:pb-8 sm:pb-2">
        <div className="mix-blend-exclusion border-b-4 border-white mb-0 md:mb-2">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold leading-[4rem] pb-3 text-white uppercase cursor-default"
          >
            {spanish ? 'Contacto' : 'Contact'}
          </motion.p>
        </div>
        <div className="flex">
          <div className="flex flex-col w-3/4">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[6rem] font-semibold mix-blend-exclusion text-white cursor-default"
            >
              Santiago Cervan
            </motion.h1>
            <motion.h2
              initial={{ y: 160, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-[3rem] font-bold pl-1 mix-blend-exclusion text-white -mt-4 cursor-default"
            >
              {spanish ? '>Desarrollador Front End' : '>Front End Developer'}
            </motion.h2>
            <motion.a
              initial={{ y: 160, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-[4rem] mix-blend-exclusion hover:text-red-500 font-serif font-thin text-teal-500 pl-5 transition-colors"
              href="mailto:santicervan@live.com"
            >
              santicervan@live.com
            </motion.a>
            <motion.a
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-[6rem] mix-blend-exclusion text-white font-serif font-thin -mt-3 hover:text-red-500 transition-colors"
              href="https://wa.me/543517380506"
              target="_blank"
            >
              +54 3517380506
            </motion.a>
          </div>
          <div className="flex flex-col">
            <motion.a
              initial={{ x: 160, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[6rem] mix-blend-exclusion text-white font-semibold -mt-3 hover:text-red-500 pt-4 transition-colors"
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
              className="text-[6rem] mix-blend-exclusion text-white font-bold -mt-12 hover:text-red-500 pt-4 transition-colors"
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
              className="text-[6rem] mix-blend-exclusion text-white font-semibold -mt-12 hover:text-red-500 pt-4 transition-colors"
              href="https://github.com/SantiCervan"
              target="_blank"
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 pb-12">
        {spanish ? (
          <a
            className="mix-blend-exclusion text-white text-3xl underline underline-offset-4 font-serif"
            href="./Santiago Cervan CV.pdf"
            target="_blank"
          >
            Descarga mi CV 2023
          </a>
        ) : (
          <a
            className="mix-blend-exclusion text-white text-3xl underline underline-offset-4 font-serif"
            href="./Santiago Cervan CV English.pdf"
            target="_blank"
          >
            Download 2023 CV
          </a>
        )}
      </div>
    </>
  );
}

export default Contact;
