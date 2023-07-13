import React from 'react';
import Image from 'next/image';
import { DarkSpaImg } from './entities/generals';

function ExpCards({
  darkMode,
  spanish,
  img,
  title,
  icon1,
  icon2,
  icon3,
  icon1D,
  icon2D,
  icon3D,
  text,
  textSpa,
}: DarkSpaImg) {
  return (
    <div className="flex flex-col md:flex-row cursor-grab">
      <div className="md:w-3/4 xs:px-1 md:px-0">
        <Image
          src={img}
          alt="weeki"
          width={1024}
          height={576}
          className="rounded-md"
        />
      </div>
      <div className="md:w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion xs:pb-24  md:py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
        <p
          className={`${
            darkMode ? 'text-teal-100' : 'text-red-950'
          } text-[2rem] md:text-[3rem] font-bold leading-[4rem] md:pb-3`}
        >
          {title}
        </p>
        <div className="w-full pt-3 md:pt-4 pb-3 md:pb-12 pl-2 flex gap-10">
          {darkMode ? (
            <>
              <Image src={icon1} alt="NextJs" width={30} height={30} />
              <Image src={icon2} alt="typeScript" width={30} height={30} />
              <Image src={icon3} alt="tailwind" width={30} height={30} />
            </>
          ) : (
            <>
              <Image src={icon1D} alt="NextJs" width={30} height={30} />
              <Image src={icon2D} alt="typeScript" width={30} height={30} />
              <Image src={icon3D} alt="tailwind" width={30} height={30} />
            </>
          )}
        </div>
        <p
          className={`${
            darkMode ? 'text-teal-100' : 'text-red-950'
          }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
        >
          {spanish ? textSpa : text}
        </p>
      </div>
    </div>
  );
}

export default ExpCards;
