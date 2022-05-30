import React from 'react'
import DynamicIcon from './common/DynamicIcon'

function InfoCard({ icon, text, description }) {
  return (
    <div className='border-2 border-white shadow-md w-1/4 rounded-2xl bg-primary-500'>
      <div className='p-5'>
        <div className='flex flex-col justify-center items-center text-center my-10 mx-5'>
          <DynamicIcon icon={icon || 'DesktopComputerIcon'} />
          <p className='text-xl text-neutral-500 font-bold mt-5 '>{text}</p>
          <p className=''>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard