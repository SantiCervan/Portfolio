/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Perfil from './Perfil';
import Head from 'next/head';
import Skills from './Skills';
import Experience from './Experience';
import scroll from '../public/Icons/abajo.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Contact from './Contact';

function index() {
  const [darkMode, setDarkMode] = useState(false);
  const [spanish, setSpanish] = useState(true);

  if (spanish) {
    useEffect(() => {
      const handleVisibilityChange = () => {
        document.title = document.hidden
          ? '¡No te pierdas mi portafolio! 😉'
          : 'Santiago Cervan - Front end';
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange
        );
      };
    }, [spanish]);
  } else {
    useEffect(() => {
      const handleVisibilityChange = () => {
        document.title = document.hidden
          ? "Don't miss my portfolio! 😉"
          : 'Santiago Cervan - Front end';
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange
        );
      };
    }, [spanish]);
  }
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      if (navigator?.language.startsWith('en')) {
        setSpanish(false);
      }
    }
  }, []);
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', spanish
        ? "Desarrollador Front End con experiencia en diseño web adaptable, optimización de rendimiento y SEO. Con proyectos destacados como Voike, Omuni y Electa, ofrezco experiencia en JavaScript, TypeScript, React, React Native, NextJs, Figma, etc. proporcionando interfaces amigables y gestión eficiente de Git Flow."
        : "Experienced Front End Developer specializing in responsive web design, performance optimization, and SEO. With a proven track record in projects like Voike, Omuni, and Electa, I offer expertise in JavaScript, TypeScript, React, React Native, NextJs, Figma, etc. delivering user-friendly interfaces and efficient Git Flow management.");
    }
  }, [spanish]);
  
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Head>
        <title>Santiago Cervan - Front end</title>
        <meta
          property="og:description"
          content="Explore my frontend development portfolio. Discover innovative projects and creative solutions."
        />
        <meta property="og:image" content="/Img/metaImage.png" />
      </Head>
      <div
        className={`w-full min-h-screen flex flex-col items-center ${
          darkMode
            ? 'bg-gradient-to-b from-zinc-950 to-red-950'
            : 'bg-gradient-to-b from-slate-200 to-teal-100'
        }`}
      >
        <motion.div
          initial={{ y: 160, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ delay: 3 }}
          className="animate-bounce fixed bottom-3 right-8 mix-blend-exclusion top-[9999]"
        >
          <Image
            src={scroll}
            alt="Scroll"
            width={40}
            height={40}
            onClick={() => scrollToBottom()}
          />
        </motion.div>
        <NavBar
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          setSpanish={setSpanish}
          spanish={spanish}
        />
        <Perfil spanish={spanish} />
        <Experience darkMode={darkMode} spanish={spanish} />
        <Skills spanish={spanish} />
        <Contact darkMode={darkMode} spanish={spanish} />
      </div>
    </>
  );
}

export default index;
