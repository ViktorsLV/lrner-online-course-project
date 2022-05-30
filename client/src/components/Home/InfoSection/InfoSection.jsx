import React from 'react'
import InfoCard from '../../InfoCard'

function InfoSection() {
  return (
    <div className='custom-layout mb-10'>
      <h2 className=''>Our Learning Opportunity</h2>
      <div className='flex justify-center items-center space-x-10 mt-5'>
        <InfoCard text='Explore' description="Explore a variety of different courses" icon="SearchIcon" />
        <InfoCard text='Choose' description="Choose courses suitable for you and purchase them" icon="CursorClickIcon" />
        <InfoCard text='Learn' description="Schedule a time to learn and get started!" icon="CalendarIcon" />
      </div>
    </div>
  )
}

export default InfoSection