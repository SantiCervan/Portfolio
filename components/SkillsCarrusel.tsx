import React from 'react';
import 'swiper/css';

export default function SkillsCarrusel() {
  const skills = [
    'JavaScript',
    'Typescript',
    'React',
    'NextJs',
    'Redux',
    'Node.js',
    'HTML',
    'ReactNative',
    'CSS',
    'Express',
    'Postgres',
    'Sequelize',
    'Figma',
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] bg-white mix-blend-exclusion">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 lg:[&_li]:mx-20  qhd:[&_li]:mx-36 uhd:[&_li]:mx-44 animate-infinite-scroll">
        {skills.map((skills) => (
          <li key={skills} className="flex flex-col items-center gap-4 w-fit">
            <div className="w-[80px] h-[20px] lg:w-[150px] lg:h-[30px] fhd:w-[220px] fhd:h-[50px] qhd:w-[250px] qhd:h-[250px] uhd:w-[300px] uhd:h-[300px] relative flex justify-center items-center">
              <span className="mix-blend-exclusion text-black uppercase font-semibold text-sm xs:text-base lg:text-lg">
                {skills}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 lg:[&_li]:mx-20  qhd:[&_li]:mx-36 uhd:[&_li]:mx-44 animate-infinite-scroll">
        {skills.map((skills) => (
          <li key={skills} className="flex flex-col items-center gap-4 w-fit">
            <div className="w-[80px] h-[20px] lg:w-[150px] lg:h-[30px] fhd:w-[220px] fhd:h-[50px] qhd:w-[250px] qhd:h-[250px] uhd:w-[300px] uhd:h-[300px] relative flex justify-center items-center">
              <span className="mix-blend-exclusion text-black uppercase font-semibold text-sm xs:text-base lg:text-lg">
                {skills}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
