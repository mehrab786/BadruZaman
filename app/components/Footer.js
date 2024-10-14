import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-500 content-center items-center mt-4 text-black h-72 w-full border shadow-sm rounded-md'>
        <div className=' '>
            
        <iframe className='w-full h-48' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233120.45836135466!2d55.64087220300915!3d24.08365401462265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab1a87ca532ab%3A0x3e7b4bb3a96f392!2sSANAYA!5e0!3m2!1sen!2sae!4v1703113582898!5m2!1sen!2sae" 
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='flex flex-col items-center justify-center py-2'>
            <h1 className='font-bold text-1xl text-black'>Badru-Zaman General Transport LLC</h1>
            <h5 className='text-sm mt-1'>All Rights Reserved</h5>
            
            <p className='text-blue-600 text-base -mb-1'> <a href="https://mehrabportfolio.vercel.app/">For Developer's contact <span className='underline underline-offset-auto'>click here</span> </a> </p>
        </div>

        </div>
    </div>
  )
}

export default Footer