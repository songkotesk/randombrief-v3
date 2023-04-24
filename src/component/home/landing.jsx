import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Landing() {
    return (
        <div className='home-landing' id='landing'>
            <div className="centerContainer">
                <div className='sub'>
                    <h1 className='header-txt'>รับบรีฟที่ไม่ซ้ำใคร</h1>
                    <p className='sub-txt'>ฝึกฝนการออกแบบโลโก้โดยใช้บรีฟของลูกค้าที่สร้างขึ้นแบบสุ่ม</p>
                    <br /><br /><br />
                    <a href="/random"><button className="btn primary btn-random">สุ่มบรีฟ</button></a>
                    <div>
                        <a className="btn-sendbrief" href='https://docs.google.com/forms/d/e/1FAIpQLSfTU7-wVlH3wir0FudEVSGTBfwG3y8BrZ1w5bM88E8qGBWS4Q/viewform?usp=share_link' target='_blank'>ส่งบรีฟให้เรา</a>
                    </div>
                </div>
            </div>
            <div className='arrow-down animate-bounce'>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    )
}

export default Landing
