import React from 'react'
import DynamicIcon from '../../components/common/DynamicIcon'

const CategoryCard = ({ title, icon }) => {
  return (
    <div data-testid={"category-card"} className='content-around shadow-lg w-56 h-64 rounded-2xl bg-white p-5 flex flex-col justify-center items-center text-center my-5 mx-2 hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out hover:bg-accent-500 hover:text-primary-500' >
      <DynamicIcon icon={icon} hover={'primary'}/>
      <p className='text-md font-normal mt-5'>{title}</p>
    </div>
  )
}

export default CategoryCard