import React from 'react';
import Styles from '../styles/Home.module.css';
import Image from 'next/image';
import Photo from '../public/Img/20211120_152652-02 (1)-01.jpeg';
export default function Perfil() {
  return (
    <div className="w-4/5 h-screen pt-32">
      <div className="h-[90%] w-full flex">
        <div className="w-[60%]">
          <h1 className="text-[5rem] font-bold">Santiago Cervan</h1>
          <h2 className="text-[4rem] font-semibold pl-3">
            Front End Developer
          </h2>
        </div>
        <div className="relative h-full w-[40%] flex justify-end items-center">
          <Image
            src={Photo}
            alt="Photo"
            height={400}
            width={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className={`h-[10%] w-full flex justify-between ${Styles.ondas}`}>
        <p className="uppercase text-lg font-semibold">From Argentina</p>
        <p className="uppercase text-lg font-semibold">
          Available to companies anywhere in the world
        </p>
      </div>
    </div>
  );
}
