import React, {useState} from 'react'
import {styles} from "../styles.js";
import {Link} from "react-router-dom";
import {logo} from "../assets/index.js";
import {navLinks} from "../constants/index.js";
const Navbar = () => {
  const [active, setActive] = useState('')
  return (
      <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className={'w-full flex justify-between items-center max-w-7xl mx-auto'}>
          <Link className={'flex items-center gap-2'} to='/' onClick={()=>{setActive('');window.scrollTo(0, 0);}}>
              <img src={logo} alt="logo" className={'w-9 h-9 object-contain'}/>
              <p className={'text-white text-[18px] font-bold cursor-pointer'}>Abdullah Al Mahi <span className={'sm:block hidden'}>| Frontend Developer </span></p>
          </Link>
          <ul className={'list-none hidden sm:flex flex-row gap-10'}>
              {navLinks.map((link)=>(
                  <li key={link.id} className={`${active === link.title? "text-white" : "text-gray-400"} hover: text-white text[18px] font-medium cursor-pointer`}
                    onClick={()=>(setActive(link.title))}
                  >
                      <a href={`#${link.id}`}>{link.title}</a>
                  </li>
              ))}
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
