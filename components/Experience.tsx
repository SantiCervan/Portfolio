import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { DarkSpanish } from './entities/generals';
import weeki from '../public/Img/Weeki.jpg';
import iunctus from '../public/Img/Iunctus.jpg';
import formarea from '../public/Img/FormArea.jpg';
import asistencia from '../public/Img/Asistencia.jpg';
import electa from '../public/Img/Electa.jpg';
import voceros from '../public/Img/Voceros.jpg';
import food from '../public/Img/Food.jpg';
function Experience({ darkMode, spanish }: DarkSpanish) {
  return (
    <div className="sm:inline hidden w-4/5 h-screen pt-12 text-white">
      <div className=" mix-blend-exclusion border-b-4 border-white  mb-12">
        <p className="text-[4rem] font-bold text-white uppercase">
          {spanish ? 'Experiencia' : 'Experience'}
        </p>
      </div>
      <div className="w-full border-b-4 border-black pb-16">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex">
              <div className="w-3/4">
                <Image
                  src={weeki}
                  alt="weeki"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[4rem] font-bold`}
                >
                  Weeki
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-2xl font-semibold`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  in consequatur ipsum tempora corrupti numquam eius animi
                  incidunt maxime quidem reprehenderit dolor quasi perferendis
                  harum, labore velit accusamus placeat molestias!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <div className="w-3/4">
                <Image
                  src={iunctus}
                  alt="iunctus"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[4rem] font-bold`}
                >
                  Iunctus
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-2xl font-semibold`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  in consequatur ipsum tempora corrupti numquam eius animi
                  incidunt maxime quidem reprehenderit dolor quasi perferendis
                  harum, labore velit accusamus placeat molestias!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <div className="w-3/4">
                <Image
                  src={formarea}
                  alt="formarea2"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[4rem] font-bold`}
                >
                  AreaCuadrada
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-2xl font-semibold`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  in consequatur ipsum tempora corrupti numquam eius animi
                  incidunt maxime quidem reprehenderit dolor quasi perferendis
                  harum, labore velit accusamus placeat molestias!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <div className="w-3/4">
                <Image
                  src={asistencia}
                  alt="asistencia"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[4rem] font-bold`}
                >
                  Asistencia Area2
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-2xl font-semibold`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  in consequatur ipsum tempora corrupti numquam eius animi
                  incidunt maxime quidem reprehenderit dolor quasi perferendis
                  harum, labore velit accusamus placeat molestias!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <div className="w-3/4">
                <Image
                  src={electa}
                  alt="electa"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[4rem] font-bold`}
                >
                  Electa
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-2xl font-semibold`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  in consequatur ipsum tempora corrupti numquam eius animi
                  incidunt maxime quidem reprehenderit dolor quasi perferendis
                  harum, labore velit accusamus placeat molestias!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full">
              <div className="w-3/4">
                <Image
                  src={voceros}
                  alt="voceros"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/5 h-[25rem] right-0 top-0 z-50 mix-blend-exclusion px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[4rem] font-bold`}
                >
                  La Tata
                </p>
                <div className="flex flex-col h-full justify-between">
                  <p
                    className={`${
                      darkMode ? 'text-teal-100' : 'text-red-950'
                    } text-2xl font-semibold`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Non in consequatur ipsum tempora corrupti numquam eius animi
                    incidunt maxime quidem reprehenderit dolor quasi perferendis
                    harum, labore velit accusamus placeat molestias!
                  </p>
                  <p
                    className={`${
                      darkMode ? 'text-teal-100' : 'text-red-950'
                    } text-2xl font-semibold`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Non
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full">
              <div className="w-3/4">
                <Image
                  src={food}
                  alt="food"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/5 h-[25rem] right-0 top-0 z-50 mix-blend-exclusion px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[4rem] font-bold`}
                >
                  Henry Food App
                </p>
                <div className="flex flex-col h-full justify-between">
                  <p
                    className={`${
                      darkMode ? 'text-teal-100' : 'text-red-950'
                    } text-2xl font-semibold`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Non in consequatur ipsum tempora corrupti numquam eius animi
                    incidunt maxime quidem reprehenderit dolor quasi perferendis
                    harum, labore velit accusamus placeat molestias!
                  </p>
                  <p
                    className={`${
                      darkMode ? 'text-teal-100' : 'text-red-950'
                    } text-2xl font-semibold`}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Non
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Experience;
