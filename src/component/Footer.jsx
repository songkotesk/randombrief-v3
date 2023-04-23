import React from 'react'
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube , faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className='footerWarper pt-5 mt-10'>
      <p>V3.0</p>
      <p>สนับสนุน โดย วิทยาลัยเซาธ์อีสบางกอก</p>
      <div>
        <FontAwesomeIcon icon={faFacebook} size='xl' className='pl-20 '/>
        <FontAwesomeIcon icon={faYoutube} size='xl' className='pl-20 '/>
      </div>
    </div>
  )
}

export default Footer
