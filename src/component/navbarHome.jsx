import React from 'react'
import '../css/navbar.css';
import { Link } from 'react-scroll'

const NavbarHome = () => {
  return (
    <div className='fixed end-0 w-full truncate flex justify-between items-center border-b-2 bg-white z-10'>
      <div className='flex'>
        <p className='text-xl font-semibold p-4 pt-3 pl-10'>
          <Link to="landing" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>สบ.</Link>
        </p>
        <p className='text-base font-light p-4'>สนุกกับการออกแบบ</p>
      </div>
      <ul className='flex text-base font-light'>
        <li className='p-4 pr-10 list-none'>
          <Link to="article" spy={true} smooth={true} offset={-50} duration={500} className='cursor-pointer'>บล็อก</Link>
        </li>
        <li className='p-4 pr-10 list-none'>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>เกี่ยวกับ</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarHome
