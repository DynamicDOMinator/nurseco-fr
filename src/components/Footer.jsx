import React from 'react'

function Footer() {
  return (
    <footer className="  mx-auto w-full relative text-center bg-blue-600 text-white">
      <div className="px-6 py-4 md:py-7 xl:pt-10 xl:pb-10">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Ready to get your productivity back?
          <br />
          Book Now.
        </h2>
       
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <p >Contact</p>
            </div>
            <div className="px-5 py-2">
              <p >Pricing</p>
            </div>
            <div className="px-5 py-2">
              <p >Privacy</p>
            </div>
            <div className="px-5 py-2">
              <p>Terms</p>
            </div>
            <div className="px-5 py-2">
              <p >Twitter</p>
            </div>
          </nav>
          <p className="mt-7 text-base">© 2024 XYZ, LLC</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer