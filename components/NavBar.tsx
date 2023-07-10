import React from 'react';

export default function NavBar() {
  return (
    <div className="w-full flex justify-between px-16 py-6 fixed top-0">
      <button className="text-lg font-semibold px-4 py-2 border-2 border-black">
        Logo
      </button>
      <div className="flex">
        <button className="w-20 text-lg font-semibold">Algo</button>
        <button className="w-20 text-lg font-semibold">Contact</button>
      </div>
    </div>
  );
}
