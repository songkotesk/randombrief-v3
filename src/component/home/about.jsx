import React from 'react'

const About = () => {
  return (
    <div>
      <br />
      <div className='hr'></div>
      <br />
      <div className='features-box'>
        <div className='box'>
          <div className="card" style={{ height: 339 }}>
            <p className="title">นี่คืออะไร?</p>
            <p className="desc">
              Randombrief.com เป็นเว็บไซต์{'\n'}
              สำหรับคนอยากฝึกออกแบบโลโก้{'\n'}
              และต้องการสร้างงานเพื่อใส่พอร์ต{'\n'}
              โฟลิโอ
            </p>
            <img src='src\assets\emoji1.png' className='absolute right-4 bottom-0 w-auto h-auto' />
          </div>

          <div className="card" style={{ height: 399 }}>
            <p className="title">มันใช้งานได้ดีบน{'\n'}มือถือด้วย!</p>
            <p className="desc">
              ดูเว็บไซต์นี้บนโทรศัพท์ของคุณ{'\n'}
              และรับเลย์เอาต์ใหม่ที่ออกแบบมาให้{'\n'}
              ใช้งานง่ายบนหน้าจอขนาดเล็ก{'\n'}
              โดยเฉพาะ
            </p>
            <img src='src\assets\emoji2.png' className='absolute right-6 bottom-0 w-auto h-auto' />
          </div>
        </div>
        <div className='box'>
          <div className="card" style={{ height: 'calc(100% - 20px)' }}>
            <p className="title">เกี่ยวกับเรา?</p>
            <p className="desc">
              เว็บไซต์นี้เป็นส่วนหนึ่งของการศึกษาตามหลักสูตร{'\n'}
              วิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีมัลติมีเดียและอีสปอร์ต{'\n'}
              คณะวิทยาศาสตรและเทคโนโลยี มหาวิทยาลัยเซาธ์อีสท์บางกอก{'\n'}
              ภาคการศึกษาที่ 4 ปีการศึกษา2565 ในหัวข้อ{'\n'}
              การพัฒนาเว็บไซต์เพื่อการศึกษา{'\n'}
              เรื่อง ปัญหาการขาดประสบ การณ์ของกราฟฟิคดีไซน์เนอร์
            </p>
            <img src='src\assets\emoji3.png' className='absolute right-0 bottom-0 w-auto h-auto rounded-br-[25px]' />
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  )
}

export default About
