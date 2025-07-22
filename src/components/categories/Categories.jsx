import React from 'react'
import './Categories.css'
const Categories = () => {
  return (
    <>
      <section className='p-6 bg-white'>
        {/* Título principal */}
        <h2 className='text-xl font-semibold text-red-600 flex items-center gap-2 mb-2'>
          <span className='w-2 h-5 bg-red-600 rounded-sm inline-block' />
          Categories
        </h2>

        {/* Subtítulo */}
        <h3 className='text-2xl font-bold mb-4'>Browse By Category</h3>

        {/* Contenedor de categorías */}
        <div class='flex flex-wrap gap-4 md:gap-3 justify-center'>
          <div class='bg-white border-4 border-gray-400 w-32 h-32 md:w-25 md:h-25 flex flex-col justify-center items-center '>
            <img src='/iconos2/telefono.png' alt='Teléfono' />
            <i class='fa-solid fa-mobile-screen-button text-3xl mb-2' />
            <p class='m-0 font-medium'>Phones</p>
          </div>

          <div className='bg-white border-4 border-gray-400 w-32 h-32 md:w-25 md:h-25 flex flex-col justify-center items-center '>
            <img src='/iconos2/computadora.png' alt='Laptop' />
            <i class='fa-solid fa-mobile-screen-button text-3xl mb-2' />
            <p>Computers</p>
          </div>

          <div className='bg-white border-4 border-gray-400 w-32 h-32 md:w-25 md:h-25 flex flex-col justify-center items-center '>
            <img src='/iconos2/smartwatch.png' alt='smartwatch' />
            <i class='fa-solid fa-mobile-screen-button text-3xl mb-2' />
            <p>SmartWatch</p>
          </div>

          <div class='bg-red-600 text-white w-32 h-32 md:w-25 md:h-25 flex flex-col justify-center items-center'>
            <img src='/iconos2/camara.png' alt='Camara' />
            <i class='fa-solid fa-camera text-3xl mb-2 text-white' />
            <p>Camera</p>
          </div>

          <div className='bg-white border-4 border-gray-400 w-32 h-32 md:w-25 md:h-25 flex flex-col justify-center items-center '>
            <img src='/iconos2/auriculares.png' alt='Audifonos' />
            <p>HeadPhones</p>
          </div>

          <div className='bg-white border-4 border-gray-400 w-32 h-32 md:w-25 md:h-25 flex flex-col justify-center items-center '>
            <img src='/iconos2/gaming.png' alt='Audifonos' />
            <p>Gaming</p>
          </div>


        </div>
      </section>
    </>
  )
}

export default Categories
