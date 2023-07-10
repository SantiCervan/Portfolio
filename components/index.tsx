import React from 'react';
import NavBar from './NavBar';
import Perfil from './Perfil';

export default function index() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-slate-200 to-teal-100">
      <NavBar />
      <Perfil />
    </div>
  );
}
