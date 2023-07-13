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
import { motion } from 'framer-motion';
function Experience({ darkMode, spanish }: DarkSpanish) {
  return (
    <div className="inline w-full md:w-4/5 h-screen pt-12 text-white">
      <div className="mix-blend-exclusion border-b-4 border-white mb-0 md:mb-12">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold text-white uppercase"
        >
          {spanish ? 'Experiencia' : 'Experience'}
        </motion.p>
      </div>
      <div
        className={`w-full md:border-b-4 ${
          darkMode ? 'md:border-teal-100' : 'md:border-red-950'
        } md:border-black pt-6 md:pt-0 pb-0 md:pb-16`}
      >
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/4 xs:px-1 md:px-0">
                <Image
                  src={weeki}
                  alt="weeki"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold`}
                >
                  Weeki
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
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
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/4 xs:px-1 md:px-0">
                <Image
                  src={iunctus}
                  alt="iunctus"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold`}
                >
                  Iunctus
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
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
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/4 xs:px-1 md:px-0">
                <Image
                  src={formarea}
                  alt="formarea2"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold`}
                >
                  Area2
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
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
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/4 xs:px-1 md:px-0">
                <Image
                  src={asistencia}
                  alt="asistencia"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold`}
                >
                  Asistencia Area2
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
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
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/4 xs:px-1 md:px-0">
                <Image
                  src={electa}
                  alt="electa"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold`}
                >
                  Electa
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
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
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-3/4 xs:px-1 md:px-0">
                <Image
                  src={voceros}
                  alt="voceros"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-2/5 h-full right-0 top-0 z-50 mix-blend-exclusion py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold`}
                >
                  La Tata
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
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
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-3/4 xs:px-1 md:px-0">
                <Image
                  src={food}
                  alt="food"
                  width={1024}
                  height={576}
                  className="rounded-md"
                />
              </div>
              <div className="md:w-2/5 right-0 top-0 z-50 mix-blend-exclusion py-4 md:pt-0 px-1 md:pl-4 lg:px-12">
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  } text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold`}
                >
                  Henry Food App
                </p>
                <p
                  className={`${
                    darkMode ? 'text-teal-100' : 'text-red-950'
                  }  xs:pl-2 lg:text-2xl md:text-xl font-semibold`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  in consequatur ipsum tempora corrupti numquam eius animi
                  incidunt maxime quidem reprehenderit dolor quasi perferendis
                  harum, labore velit accusamus placeat molestias!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Experience;
