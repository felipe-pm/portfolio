"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TadButton from './TadButton'

const TAB_DATA = [
  {
    id: "skills",
    title: "Habilidades",
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Power BI</li>
        <li>Git</li>
      </ul>
    )
  },
  {
    id: "education",
    title: "Educación",
    content: (
      <ul className='list-disc pl-2'>
        <li>Licenciatura en Ciencias de la Computación, Universidad de Santiago de Chile</li>
        <li>Desarrollador Full Stack JavaScript, Academia Desafío Latam</li>
      </ul>
    )
  },
  {
    id: "certifications",
    title: "Certificaciones",
    content: (
      <ul className='list-disc pl-2'>
        <li>Desarrollo Profesional Data Science</li>
        <li>Desarrollador Full Stack JavaScript</li>
        <li>Analista en Computación Científica</li>
        <li>Desarrollo Profesional Power BI</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.png" alt="About image" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mi</h2>
          <p className='text-base lg:text-lg'>
            Soy un desarrollador Full Stack apasionado por la creación de aplicaciones web interactivas y responsivas. 
            Tengo experiencia trabajando con JavaScript, React, Node.js, Express, PostgreSQL, MySQL, HTML, CSS y Git. 
            Aprendo rápido y siempre busco ampliar mis conocimientos y habilidades. 
            Trabajo en equipo y me entusiasma trabajar con otros para crear aplicaciones increíbles.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TadButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            > 
              {" "}
              Habilidades{" "}
            </TadButton>

            <TadButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            > 
              {" "}
              Educación{" "}
            </TadButton>

            <TadButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            > 
              {" "}
              Certificaciones{" "}
            </TadButton>

          </div>

          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
