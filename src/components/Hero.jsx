import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    // h-screen sets the height of an element to fill the entire height of the screen.  used in combination with other layout and positioning classes to create full-height sections or containers
      <section className='relative w-full h-screen mx-auto '>
        {/* inset-0 sets the top, right, bottom, and left properties of an element to 0, effectively positioning the element at the edges of its container. */}
            <div className={`${styles.paddingX} absolute flex flex-row  top-[120px] inset-0 max-w-7xl items-start gap-5`}>
              <div className='flex flex-col justify-center items-center'>
                <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
                <div className='w-1 sm:h-80 h-40 violet-gradient'/>
              </div>
              <div>
                <h1 className={`${styles.heroHeadText}`}>Hello World! I'm <span className='text-[#915eff]'>Manzur Alam</span> </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}> I develop Web Application using MERN</p>
              </div>
            </div>
            <ComputersCanvas/>
      </section>
  )
}

export default Hero