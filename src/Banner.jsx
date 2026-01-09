import React from 'react'

function Banner() {
  return (
    <div className="relative">
      <img src="public\bannerimg.avif" className="w-full h-100 block" />
      <h1 className=" absolute inset-40 top-0 left-0 right-0 m-0 flex items-center justify-center text-white text-5xl font-bold"> We Build Modern Web Solutions.</h1>
      <h5 className='absolute inset-12 top-0 left-0 right-0 m-0 flex items-center justify-center text-white text-2xl '>Innovate and scalable applications for your business.</h5>
      <button className='absolute top-55 left-1/2 -translate-x-1/2 rounded border border-blue-800 px-6 py-2 text-white bg-blue-800 hover:bg-blue-400 font-bold w-45 h-12'>Get Started</button>
    </div>
  )
}

export default Banner
