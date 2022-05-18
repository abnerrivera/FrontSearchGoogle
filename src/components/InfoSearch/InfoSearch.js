import React from 'react'
import AccordionData from './AccordionData/AccordionData'
import InfoAll from './InfoAll/InfoAll'
import InfoSpecific from './InfoSpecific/InfoSpecific'

const InfoSearch = () => {
  return (
    <div className='info'>

      <InfoAll/>

      <InfoSpecific/>
    </div>
  )
}

export default InfoSearch