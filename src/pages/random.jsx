import React, { useState } from 'react';
import Navbar from "../component/Navbar"
import BriefInfo from "../component/random/brief-info"
import Category from '../component/random/category';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faHamburger } from '@fortawesome/free-solid-svg-icons'


function Random() {
    const [isOpenCategory, setOpenCategory] = useState(false);

    return (
        <>
            <Navbar />
            { !isOpenCategory && <BriefInfo/>}
            { isOpenCategory && <Category/>}
            <div className="rand-container">
                <div className="col-3">
                    <div className="col">
                        <button className="btn btn-random" onClick={()=>{
                            // alert(123)
                            setOpenCategory(!isOpenCategory);
                        }}>
                            <FontAwesomeIcon icon={faHamburger}/>
                            <span>ประเภท : สุ่ม</span>
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn primary btn-random">สุ่มบรีฟ</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-random">
                            <FontAwesomeIcon icon={faArrowDown}/>
                            <span>ดาวน์โหลด</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Random;
