import React from 'react'
import '../css/navbar.css';
import { HashLink } from 'react-router-hash-link'


const NavbarRandom = () => {
  return (
    <div className='flex justify-between items-center border-b-2 bg-white z-10'>
      <div className='flex'>
        <a href="/">
          <p className='text-xl font-semibold p-4 pt-3 pl-10'>สบ.</p>
        </a>
        <p className='text-base font-light p-4'>สนุกกับการออกแบบ</p>
      </div>
      <ul className='flex text-base font-light'>
        <HashLink to="/#article"><li className='p-4 pr-10 list-none'>บล็อก</li></HashLink>
        <HashLink to="/#about"><li className='p-4 pr-10 list-none'>เกี่ยวกับ</li></HashLink>
      </ul>
    </div>
  )
}

export default NavbarRandom
