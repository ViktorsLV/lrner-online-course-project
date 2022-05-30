import React from 'react'
import BlogSection from '../components/Home/BlogSection/BlogSection'
import CategoriesSection from '../components/Home/CategoriesSection/CategoriesSection'
import CourseSection from '../components/Home/CourseSection/CourseSection'
import Header from '../components/Home/Header/Header'
import InfoSection from '../components/Home/InfoSection/InfoSection'
import InstructorSection from '../components/Home/InstructorSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <InfoSection/>
      <CategoriesSection/>
      <CourseSection/>
      <InstructorSection/>
      <BlogSection />
    </div>
  )
}

export default Home