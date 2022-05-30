import React from 'react'
import InstructorCard from '../InstructorCard'

function InstructorSection() {
  return (
    <div className='custom-layout mb-10'>
      <h2 className='pb-10'>Instructors on this platform</h2>
      <div className='flex flex-row gap-4 flex-wrap'>
      <InstructorCard/>
      <InstructorCard/>
      <InstructorCard/>
      <InstructorCard/>
      <InstructorCard/>
      <InstructorCard/>
      </div>
    </div>
  )
}

export default InstructorSection