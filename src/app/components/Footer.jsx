import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <Image
          src="/images/logo.png"
          alt="logo image"
          width={150}
          height={150}
        />
        <p className='text-slate-600 mt-4'>© 2024 Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
