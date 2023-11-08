"use client"
import React, { useState } from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,       
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    

    if (response.status === 200) {
        console.log('Mensaje enviado.');
        setEmailSubmitted(true);
    }
  }

  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Contáctame</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre abierta. 
            Si tienes alguna pregunta o simplemente quieres saludar, 
            ¡haré todo lo posible para responderte!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://github.com/felipe-pm">
                <Image src={GithubIcon} alt="Github icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/felipepinomolina/">
                <Image src={LinkedinIcon} alt="Linkedin icon" />
            </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label 
                    htmlFor='email'
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Tu correo
                </label>
                <input
                    name='email'
                    type="email"
                    id='email'
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='ejemplo@gmail.com'
                />
            </div>

            <div className='mb-6'>
                <label
                    htmlFor='subject' 
                    className='text-white block mb-2 text-sm font-medium'
                >
                    Asunto
                </label>
                <input
                    name='subject'
                    type="text"
                    id='subject'
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Solo diciendo hola!'
                />
            </div>

            <div className='mb-6'>
                <label
                    htmlFor="message"
                    className="text-white block mb-2 text-sm font-medium"
                >
                    Mensaje
                </label>
                <textarea
                    name='message'
                    id='message'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Hola Felipe, vamos a hablar acerca de ...'
                />
            </div>

            <button
                type='submit'
                className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
            >
                Enviar Mensaje
            </button>
            {
                emailSubmitted && (
                    <p className='text-green-500 text-sm mt-4'>
                        Correo enviado correctamente!
                    </p>
                )
            }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
