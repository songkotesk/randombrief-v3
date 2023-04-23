import React from 'react';
import Navbar from "../component/navbar";
import Footer from '../component/footer';
import '../css/article.css';

function article1() {
  return (
    <>
      <Navbar />
      <div className='articleWraper'>
        <p className='articleHead'>ประเภทของโลโก้</p>
        <div className="articleImage">
          <img src="src\assets\article2.png" alt="/" />
        </div>
        <div className="articleContent">
          <p className='p-10 pb-10 font-light'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;หลายๆ คนคงสงสัยอยากมีโลโก้ (Logo) สวยๆ แต่จะทำยังไงล่ะ? จะออกแบบโลโก้ให้สื่อถึงแบรนด์ของคุณทั้งทีก็แสนจะยาก เพราะจริงๆ แล้วการออกแบบโลโก้ที่ดี นอกจากจะต้องทำให้ดูดีดูน่าสนใจแล้ว จะต้องทำให้มีเอกลักษณ์ มีคาแรคเตอร์ที่เป็นหน้าตา ของแบรนด์ ที่ทำให้คน “จดจำ” ได้ด้วยออกแบบโลโก้ยังไงให้น่าจดจำและสื่อถึงแบรนด์ได้อย่างดี เราลองมาดูโลโก้ 7 สไตล์ของ การออกแบบ ที่มองแล้วทำให้ลูกค้าเข้าใจถึงธุรกิจคุณได้เลยกันดีกว่า</p>
          <img src="src\assets\type1.png" alt="/" className='typeImage mb-5' />
          <p className='articleSection pl-10 pr-10'>1. Word mark</p>
          <p className='pl-10 pr-10 font-light pb-12'> ออกแบบโลโก้โดยใช้ตัวอักษรในการออกแบบโลโก้ล้วนๆ โดยการนำตัวอักษรหลายๆ ตัวมาจัดเรียงเข้าด้วยกัน หรือที่เรียกว่า Logotype อาจจะมีลูกเล่นกับตัวอักษรเพื่อให้สื่อถึงธุรกิจของคุณได้มากขึ้น บริษทที่ใช้โลโก้ลักษณะนี้ เช่น eBay, IBM, CNN, Kleenex เป็นต้น</p>
          <img src="src\assets\type2.png" alt="/" className='typeImage mb-5' />
          <p className='articleSection pl-10 pr-10'>2. Pictorial mark</p>
          <p className='pl-10 pr-10 font-light pb-12'> เป็นโลโก้ที่มีลักษณะเป็นรูปภาพเชิงสัญลักษณ์ที่สามารถเห็นแล้วจดจำได้ง่าย เช่น Starbucks, Twitter, และ Playboy โลโก้ทั้งหลายเหล่านี้ล้วนแต่มีลักษณะเป็นรูปภาพสัญลักษณ์ทั้งสิ้น รูปภาพที่ใช้จะสื่อถึงธุรกิจของคุณ เมื่อกลุ่มเป้าหมายดูแล้วสามารถเข้าใจทันที</p>
          <img src="src\assets\type3.png" alt="/" className='typeImage mb-5' />
          <p className='articleSection pl-10 pr-10'>3. Abstract mark</p>
          <p className='pl-10 pr-10 font-light pb-12'> ตัวโลโก้ที่ออกแบบไม่ได้สื่อถึงสิ่งใดเลย แต่สามารถจดจำได้ง่าย ดูแล้วเหมือนกับภาพศิลปะแบบนามธรรม แบรนด์ที่ประสบความสำเร็จที่ใช้โลโก้ลักษณะนี้มีมากมาย เช่น โลโก้ Adidas, Audi, Pepsi เป็นต้น</p>
          <img src="src\assets\type4.png" alt="/" className='typeImage mb-5' />
          <p className='articleSection pl-10 pr-10'>4. Letter form</p>
          <p className='pl-10 pr-10 font-light pb-12'> โลโก้ลักษณะนี้สร้างจากการประดิษฐ์ตัวอักษรเพียงตัวเดียวให้มีลักษณะพิเศษชวนจดจำ โดยใช้อักษรย่อ ของชื่อธุรกิจหรือชื่อบริษัท เช่น Honda, Uber, Unilever, McDonald’s เป็นต้น</p>
          <img src="src\assets\type5.png" alt="/" className='typeImage mb-5' />
          <p className='articleSection pl-10 pr-10'>5. Emblem</p>
          <p className='pl-10 pr-10 font-light pb-12'> เป็นโลโก้ที่ใช้ภาพสัญลักษณ์ง่ายๆ มาเป็นองค์ประกอบรวมเข้ากับชื่อและล้อมกรอบเอาไว้ในลักษณะต่างๆ ส่วนใหญ่ภาพหรือรูปทรงที่นำมาใช้ในการออกแบบ โลโก้มักจะสื่อความหมายถึงหรือเกี่ยวข้องกับธุรกิจนั้นๆ เช่น Motor harley davidson cycles, Ford, NFL เป็นต้น</p>
          <img src="src\assets\type6.png" alt="/" className='typeImage mb-5' />
          <p className='articleSection pl-10 pr-10'>6. Character</p>
          <p className='pl-10 pr-10 font-light pb-12'> ออกแบบโลโก้โดยใช้รูปภาพคน สัตว์ หรือ มาสคอตที่สื่อถึงธุรกิจหรือสินค้าของคุณในการออกแบบโลโก้ เช่น KFC หรือ Johnnie walker</p>
          <img src="src\assets\type7.png" alt="/" className='typeImage mb-5' />
          <p className='articleSection pl-10 pr-10'>7. Web 2.0</p>
          <p className='pl-10 pr-10 font-light pb-12'>  pb-12ออกแบบโลโก้โดยเน้นให้เข้ากับเว็บไซต์คือเน้นการออกแบบที่เรียบง่ายและเข้าใจง่าย การออกแบบโลโก้ ประเภทนี้จึงเน้นที่การอ่านชื่อของเว็บไซต์ ธุรกิจ หรือสินค้า คล้ายการออกแบบโลโก้ประเภทแรก( Word mask) แต่จะมีลูกเล่นเพิ่มขึ้นมาเล็กน้อย เพื่อเพิ่มความชัดเจนในการอ่านชื่อของโลโก้นั้นๆ เช่นโลโก้ของ Youtube, Google หรือ Skype เป็นต้น</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default article1
