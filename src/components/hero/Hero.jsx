import React from 'react'

function Hero({title='Become that you Dreamed', subtitle='Find the Dream job that fits your skills and needs'}) {
  return (
    <>
        <section className="bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 py-20 mb-4">
        <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                <div className="text-center">
                <h1
                className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                >
                {title}
                </h1>
                <p className="my-4 text-xl text-white">
                {subtitle}
                </p>
                </div>
        </div>
        </section>
    </>
  )
}

export default Hero