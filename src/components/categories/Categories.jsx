import React from 'react'

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
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          <div className='border rounded-md p-4 text-center bg-white shadow-sm'>
            <p>Phones</p>
          </div>

          <div className='border rounded-md p-4 text-center bg-white shadow-sm'>
            <p>Computers</p>
          </div>

          <div className='border rounded-md p-4 text-center bg-white shadow-sm'>
            <p>SmartWatch</p>
          </div>

          <div className='border rounded-md p-4 text-center bg-white-500 text-black shadow-sm'>
            <p>Camera</p>
          </div>

          <div className='border rounded-md p-4 text-center bg-white shadow-sm'>
            <p>HeadPhones</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories
