import React, { useState } from 'react'
import {Link} from "react-router-dom"

import {styles} from "../styles"
import {navLinks} from "../constants"
import {logo,menu,close} from "../assets";


const Navbar = () => {
  // to keep track of active tab  
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false)


  return (
    <nav className ={ `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      {/* using logo and name as a link to homepage and scroll to 0,0 position  */}
      {/* items-center place the children horizontally center */}
     <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick = {
            () => {
              setActive("")
              window.scrollTo(0,0);
            }
          }
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'></img>
          <p className='text-white text-[-18px] font-bold cursor-pointer flex'>Manzur Alam &nbsp; <span className='sm:block hidden'>| Front End Developer</span></p>
        </Link>

        {/* <h1>{navLinks.length}</h1> */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
            {
              navLinks.map((link) => 
                 <li 
                  key={link.id}
                  className={
                  `${
                    active === link.title? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`
                }
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            }
          </ul>
          {/* For small devices , the menu options - hamburger menu  */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            {/* bt default toggle is false , so menu button will be shown , clicking on menu btton(setToggle(!toggle)) will turns it to true which will display close button */}
            <img 
            className='h-[28px] w-[28px] object-contain items-center'
            src={toggle ? close : menu}
            alt='menu'
            onClick={() =>setToggle(!toggle)}
            />
            {/* inner mobile menu  */}
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
            <ul className='list-none flex flex-col justify-end items-start gap-4 '>
            {
              navLinks.map((link) => 
                 <li 
                  key={link.id}
                  className={
                  `${
                    active === link.title? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`
                }
                onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            }
          </ul>
            </div>
          </div>
     </div>
    </nav>
  )
}

export default Navbar