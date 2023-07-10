/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Perfil from './Perfil';
import Head from 'next/head';

function index() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden
        ? 'SC - ¡No te pierdas mi trabajo! '
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
      </Head>
      <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-slate-200 to-teal-100">
        <NavBar />
        <Perfil />
        <Perfil />
      </div>
    </>
  );
}

export default index;
