import React from 'react';
import Navbar from "../component/Navbar"
import Landing from "../component/home/landing"
import Article from "../component/home/article"
function Index() {
  return (
    <>
        <Navbar />
        <Landing/>
        <div className="home-container">
            <Article/>
            <br/>
            <div className='hr'></div>
            <br/>
            <div className='features-box'>
                <div className='box'>
                    <div className="card" style={{
                        height: 339
                    }}>
                        <p className="title">นี่คืออะไร?</p>
                        <p className="desc">
                            Randombrief.com เป็นเว็บไซต์{'\n'}
                            สำหรับคนอยากฝึกออกแบบโลโก้{'\n'}
                            และต้องการสร้างงานเพื่อใส่พอร์ต{'\n'}
                            โฟลิโอ
                        </p>
                        <img src='' style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: 111.27,
                            height: 107.1,
                            background: '#ccc' // อย่าลืมลบตรงนี้ออกด้วย
                        }}/>
                    </div>
                    
                    <div className="card" style={{
                        height: 399
                    }}>
                        <p className="title">มันใช้งานได้ดีบน{'\n'}มือถือด้วย!</p>
                        <p className="desc">
                            ดูเว็บไซต์นี้บนโทรศัพท์ของคุณ{'\n'}
                            และรับเลย์เอาต์ใหม่ที่ออกแบบมาให้{'\n'}
                            ใช้งานง่ายบนหน้าจอขนาดเล็ก{'\n'}
                            โดยเฉพาะ
                        </p>
                        <img src='' style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: 111.27,
                            height: 107.1,
                            background: '#ccc' // อย่าลืมลบตรงนี้ออกด้วย
                        }}/>
                    </div>
                </div>
                <div className='box'>
                    <div className="card" style={{
                        height: 'calc(100% - 20px)'
                    }}>
                        <p className="title">เกี่ยวกับเรา?</p>
                        <p className="desc">
                            เว็บไซต์นี้เป็นส่วนหนึ่งของการศึกษาตามหลักสูตร{'\n'}
                            วิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีมัลติมีเดียและอีสปอร์ต{'\n'}
                            คณะวิทยาศาสตรและเทคโนโลยี มหาวิทยาลัยเซาธ์อีสท์บางกอก{'\n'}
                            ภาคการศึกษาที่ 4 ปีการศึกษา2565 ในหัวข้อ{'\n'}
                            การพัฒนาเว็บไซต์เพื่อการศึกษา{'\n'}
                            เรื่อง ปัญหาการขาดประสบ การณ์ของกราฟฟิคดีไซน์เนอร์
                        </p>
                        <img src='' style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: 250,
                            height: 250,
                            background: '#ccc' // อย่าลืมลบตรงนี้ออกด้วย
                        }}/>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    </>
  )
}

export default Index
