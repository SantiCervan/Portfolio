/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Perfil from './Perfil';
import Head from 'next/head';
import Habilities from './Habilities';

function index() {
  const [darkMode, setDarkMode] = useState(false);
  const [spanish, setSpanish] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden
        ? "SC - Don't miss out on my work!"
        : 'Santiago Cervan - Front end';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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
        <NavBar
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          setSpanish={setSpanish}
          spanish={spanish}
        />
        <Perfil
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          setSpanish={setSpanish}
          spanish={spanish}
        />
        <Habilities />
      </div>
    </>
  );
}

export default index;
