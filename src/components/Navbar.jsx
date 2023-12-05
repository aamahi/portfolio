import React, {useState} from 'react'
import {styles} from "../styles.js";
import {Link} from "react-router-dom";
import {logo} from "../assets/index.js";
const Navbar = () => {
  const [active, setActive] = useState('')
  return (
      <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className={'w-full flex justify-between items-center max-w-7xl mx-auto'}>
          <Link className={'flex items-center gap-2'} to='/' onClick={()=>{setActive('');window.scrollTo(0, 0);}}>
              <img src={logo} alt="logo" className={'w-9 h-9 object-contain'}/>
              <p className={'text-white text-[18px] font-bold cursor-pointer'}>Abdullah Al Mahi <span className={'sm:block hidden'}>| Frontend Developer </span></p>
          </Link>
            <p className={'text-red-500'}>navigationbar</p>
        </div>
      </nav>
  )
}

export default Navbar
