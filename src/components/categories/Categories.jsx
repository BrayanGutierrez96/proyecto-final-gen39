
import React, { useRef } from 'react'
import './Categories.css'

const Categories = () => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
  }

  return (
    <>
      <section className='p-6 bg-white '>
        {/* Título principal */}
        <h2 id='mi-elemento' className='pl-5 text-xl font-semibold text-red-600 flex items-center gap-2 mb-2 max-w-3xl ml-40'>
          <span className='pl-4 w-2 h-5 bg-red-600 rounded-sm inline-block' />
          Categories
        </h2>

        {/* Subtítulo */}
        <h3 className='text-2xl font-bold mb-4 pl-5 max-w-3xl ml-40'>Browse By Category</h3>

      {/* Contenedor con navegación */}
        <div className='relative max-w-3xl mx-auto  '>
          {/* Botón izquierda */}
          <button 
            onClick={scrollLeft}
            className='absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-50'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          {/* Contenedor de categorías con scroll */}
          <div 
            ref={scrollRef}
            className='border border-solid border-0 flex gap-4 overflow-x-auto scrollbar-hide px-12'
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            <div className='hover:bg-red-500 bg-white border-4 border-gray-400 w-32 h-32 flex-shrink-0 flex flex-col justify-center items-center'>
              <img src='/iconos2/telefono.png' alt='Teléfono' />
              <p className='m-0 font-medium'>Phones</p>
            </div>


          <div className='hover:bg-red-500 bg-white border-4 border-gray-400 w-32 h-32 flex flex-shrink-0 flex-col justify-center items-center '>
            <img src='/iconos2/computadora.png' alt='Laptop' />
            <p>Computers</p>
          </div>

          <div className='bg-white border-4 border-gray-400 hover:bg-red-500 w-32 h-32 flex flex-shrink-0 flex-col justify-center items-center '>
            <img src='/iconos2/smartwatch.png' alt='smartwatch' />
            <p>SmartWatch</p>
          </div>

          <div className='border-4 border-gray-400 hover:bg-red-500 bg-red-400 text-white w-32 h-32  flex-shrink-0 flex flex-col justify-center items-center'>
            <img src='/iconos2/camara.png' alt='Camara' />
            <p>Camera</p>
          </div>

          <div className='bg-white hover:bg-red-500 border-4 border-gray-400 w-32 h-32 flex-shrink-0  flex flex-col justify-center items-center '>
            <img src='/iconos2/auriculares.png' alt='Audifonos' />
            <p>HeadPhones</p>
          </div>

          <div className='bg-white hover:bg-red-500 border-4 border-gray-400 w-32 h-32 flex-shrink-0  flex flex-col justify-center items-center '>
            <img src='/iconos2/gaming.png' alt='Audifonos' />
            <p>Gaming</p>
          </div>

           <div className='hover:bg-red-500 bg-white border-4 border-gray-400 w-32 h-32 flex-shrink-0 flex flex-col justify-center items-center'>
              <img src='/iconos2/telefono.png' alt='Tablets' />
              <p>Tablets</p>
            </div>



       </div>

          {/* Botón derecha */}
          <button 
            onClick={scrollRight}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-50'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default Categories
