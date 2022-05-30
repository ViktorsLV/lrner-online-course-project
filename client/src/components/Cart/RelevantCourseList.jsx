import React from 'react'
import CourseCard from '../CourseCard'

const RelevantCourseList = () => {
  return (
    <div>
        <h2>Courses You might also like:</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
            <CourseCard/>
        </div>
    </div>
  )
}

export default RelevantCourseList