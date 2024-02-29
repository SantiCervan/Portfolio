import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { DarkSpanish } from './entities/generals';
import weeki from '../public/Img/Weeki.jpg';
import iunctus from '../public/Img/Iunctus.jpg';
import formarea from '../public/Img/FormArea.jpg';
import asistencia from '../public/Img/Asistencia.jpg';
import electa from '../public/Img/Electa.jpg';
import voceros from '../public/Img/Voceros.jpg';
import food from '../public/Img/Food.jpg';
import weekiProp from '../public/Img/weekipropietarios.jpg';
import enigma from '../public/Img/Enigma.jpg';
import nextJs from '../public/Icons/nextjs.png';
import nextJsDark from '../public/Icons/nextjsDark.png';
import typeScript from '../public/Icons/typescript.png';
import typeScriptDark from '../public/Icons/typescriptDark.png';
import tailwind from '../public/Icons/tailwind.png';
import tailwindDark from '../public/Icons/tailwindDark.png';
import react from '../public/Icons/react.png';
import reactDark from '../public/Icons/reactDark.png';
import bootstrap from '../public/Icons/bootstrap.png';
import bootstrapDark from '../public/Icons/bootstrapDark.png';
import javascript from '../public/Icons/javascript.png';
import javascriptDark from '../public/Icons/javascriptDark.png';
import { motion } from 'framer-motion';
import ExpCards from './ExpCards';
function Experience({ darkMode, spanish }: DarkSpanish) {
  return (
    <div className="inline w-full md:w-4/5 h-screen pt-12 text-white xs:pb-8 sm:pb-2">
      <div className="mix-blend-exclusion border-b-4 border-white mb-0 md:mb-12">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[2rem] md:text-[2.5rem] 2xl:text-[5rem] font-bold leading-[4rem] pb-3 text-white uppercase cursor-default"
        >
          {spanish ? 'Experiencia' : 'Experience'}
        </motion.p>
      </div>
      <div
        className={`w-full md:border-b-4 ${
          darkMode ? 'md:border-teal-100' : 'md:border-red-950'
        } md:border-black pt-6 md:pt-0 pb-0 lg:pb-16`}
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
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={weeki}
              title="Weeki"
              icon1={nextJs}
              icon2={typeScript}
              icon3={tailwind}
              icon1D={nextJsDark}
              icon2D={typeScriptDark}
              icon3D={tailwindDark}
              text="Website for apartment rentals in Bogota Colombia, included: searches by date, booking, selecting amenities, online payments, etc."
              textSpa="Web de alquileres de departamentos en Bogota Colombia, incluía: búsquedas por fecha, reservar, seleccionar amenities, pagos online, etc."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={iunctus}
              title="Iunctus"
              icon1={nextJs}
              icon2={typeScript}
              icon3={tailwind}
              icon1D={nextJsDark}
              icon2D={typeScriptDark}
              icon3D={tailwindDark}
              text="System for keeping track of bills, and members of the chamber, included:searches by date, filters, orders, login. Administrator role, create projects, edit, delete."
              textSpa="Sistema para hacer seguimiento de proyectos de ley, y de miembros de la cámara, incluía: búsquedas por fecha, filtros, ordenamientos, login. Rol de administrador, crear proyectos, editar, borrar."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={formarea}
              title="Area2"
              icon1={typeScript}
              icon2={react}
              icon3={bootstrap}
              icon1D={typeScriptDark}
              icon2D={reactDark}
              icon3D={bootstrapDark}
              text="Web of a Colombian construction company"
              textSpa="Web de una constructora Colombiana"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={asistencia}
              title="Asistencia Area2"
              icon1={typeScript}
              icon2={react}
              icon3={bootstrap}
              icon1D={typeScriptDark}
              icon2D={reactDark}
              icon3D={bootstrapDark}
              text="Area2 assistance website"
              textSpa="Web asistencia de Area2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={weekiProp}
              title="Weeki propietarios"
              icon1={nextJs}
              icon2={typeScript}
              icon3={tailwind}
              icon1D={nextJsDark}
              icon2D={typeScriptDark}
              icon3D={tailwindDark}
              text="Weeki administration website"
              textSpa="Web de administracion de Weeki"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={electa}
              title="Electa"
              icon1={nextJs}
              icon2={typeScript}
              icon3={tailwind}
              icon1D={nextJsDark}
              icon2D={typeScriptDark}
              icon3D={tailwindDark}
              text='Website of a "social network" for followers of candidates for election in Colombia'
              textSpa="Web de una “red social” para seguidores de candidatos a elección en Colombia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={enigma}
              title="Proyecto Enigma"
              icon1={nextJs}
              icon2={typeScript}
              icon3={tailwind}
              icon1D={nextJsDark}
              icon2D={typeScriptDark}
              icon3D={tailwindDark}
              text="Web to automate and schedule broadcast messages"
              textSpa="Web para automatizar y programar mensajes de difusión"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={voceros}
              title="La Tata"
              icon1={nextJs}
              icon2={typeScript}
              icon3={tailwind}
              icon1D={nextJsDark}
              icon2D={typeScriptDark}
              icon3D={tailwindDark}
              text="Website for a candidate for mayor in Bogotá, Colombia"
              textSpa="Web para una candidata a la alcaldia en Bogotá, Colombia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ExpCards
              darkMode={darkMode}
              spanish={spanish}
              img={food}
              title="Henry Food App"
              icon1={javascript}
              icon2={react}
              icon3={bootstrap}
              icon1D={javascriptDark}
              icon2D={reactDark}
              icon3D={bootstrapDark}
              text="Individual project of a website of recipes and diets"
              textSpa="Proyecto individual de una web de recetas y dietas"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Experience;
