import React from 'react';

function BriefInfo() {
  return (
    <div className='random-container'>
      <div className="sub">
        <p className='top-right-txt'>สบ.</p>
        <div className='content-detail'>
          <p className="title">Company Name:</p>
          <p className="value">TechFix</p>
        </div>
        <div className='content-detail'>
          <p className="title">Company Description:</p>
          <p className="value">A technology repair service that specializes in fixing mobile devices and laptops.</p>
        </div>
        <div className='content-detail'>
          <p className="title">Target Audience:</p>
          <p className="value">Anyone in need of mobile or laptop repair service.</p>
        </div>

        <div className="col-2">
          <div className="col">
            <div className='content-detail'>
              <p className="title">Brand Values:</p>
              <p className="value">Expertise, reliability, speed</p>
            </div>
            <div className='content-detail'>
            <p className="title">Design Style:</p>
              <p className="value">Modern and sleek.</p>
            </div>
            <div className='content-detail'>
              <p className="title">Color Preferemces:</p>
              <p className="value">Blue and silver.</p>
            </div>
          </div>
          <div className="col">
            <div className='content-detail'>
              <p className="title">Logo Usage:</p>
              <p className="value">On uniforms, vehicles, and website.</p>
            </div>
            <div className='content-detail'>
              <p className="title">Competitor Logos:</p>
              <p className="value">iCracked, uBreakFix.</p>
            </div>
            <div className='content-detail'>
              <p className="title">Timeline:</p>
              <p className="value">3 weeks.</p>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default BriefInfo
