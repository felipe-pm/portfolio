"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400'>
                    Hola, soy{" "}
                </span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'Felipe Pino',
                        1000,
                        'Desarrollador Web',
                        1000,
                        'Analista de Datos',
                        1000,
                        'Soporte TI',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            
            <div className='flex flex-row justify-center sm:justify-start'>
                <form action='/#contact'>
                    <button type='submit' className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 via-primary-400 to-secondary-400 hover:bg-slate-200 text-white'>
                        Contactame
                    </button>
                </form>
                
                <form action="https://drive.google.com/file/d/1IuPcarNh5wCJ8vTj8YJ71e01e6bBlDXH/view">
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-600 via-primary-400 to-secondary-400  hover:bg-slate-800 text-white'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Descargar CV</span> 
                    </button>
                </form>
                
            </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image
                    src="/images/dev.png"
                    alt="dev image"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={350}
                    height={350}
                />
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
