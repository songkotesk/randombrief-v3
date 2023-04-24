import React from 'react';

function BriefInfo({brief , loading}) {
  
  let fadeoutActive 
  if (loading) {
    fadeoutActive = " fadeout"
  } else {
    fadeoutActive = " "
  }

  return (
    <div className='random-container'>
      <div className="sub">
        <p className='top-right-txt'>สบ.</p>

        <div className={'content-detail ' + fadeoutActive}>
          <p className="title">ชื่อแบรนด์:</p>
          <p className="value">{brief.companyname}</p>
        </div>
        <div className={'content-detail ' + fadeoutActive}>
          <p className="title">รายละเอียดแบรนด์:</p>
          <p className="value">{brief.companydescription}</p>
        </div>
        <div className={'content-detail ' + fadeoutActive}>
          <p className="title">กลุ่มเป้าหมาย:</p>
          <p className="value">{brief.targetaudience}</p>
        </div>

        <div className="col-2">
          <div className="col">
            <div className={'content-detail ' + fadeoutActive}>
              <p className="title">คุณค่าของแบรนด์:</p>
              <p className="value">{brief.brandvalue}</p>
            </div>
            <div className={'content-detail ' + fadeoutActive}>
              <p className="title">สไตล์การออกแบบ:</p>
              <p className="value">{brief.designstyle}</p>
            </div>
            <div className={'content-detail ' + fadeoutActive}>
              <p className="title">สีของแบรนด์:</p>
              <p className="value">{brief.colorpreferece}</p>
            </div>
          </div>
          <div className="col">
            <div className={'content-detail ' + fadeoutActive}>
              <p className="title">ใช้โลโก้นี้ที่ไหนบ้าง:</p>
              <p className="value">{brief.logousage}</p>
            </div>
            <div className={'content-detail ' + fadeoutActive}>
              <p className="title">คู่แข่งของแบรนด์:</p>
              <p className="value">{brief.competitorlogos}</p>
            </div>
            <div className={'content-detail ' + fadeoutActive}>
              <p className="title">ระยะเวลาในการทำงาน:</p>
              <p className="value">{brief.timeline}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BriefInfo
