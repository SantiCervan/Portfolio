import React from 'react';
import NavBar from './NavBar';
import Perfil from './Perfil';
import Head from 'next/head';

function index() {
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
