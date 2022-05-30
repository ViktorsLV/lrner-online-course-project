import React from 'react'

function BlogCard({text}) {
  return (
    <div className='border-2 border-white hover:border-p-color shadow-md w-1/4 rounded-2xl hover:text-white hover:bg-pshade-color'>
        <div className='p-5'>
          <div className='flex flex-col justify-center items-center text-center my-10 mx-5'>
            <div className='w-16 h-16 rounded-full hover:bg-white flex items-center justify-center'>
              <DesktopComputerIcon className='w-10 h-10 p-color mx-auto overflow-hidden '/>
            </div>
            <p className='text-md font-bold mt-5 '>{text}</p>
            <p className=''>Explore a variety of fresh courses</p>
          </div>
        </div>
    </div>
  )
}

export default BlogCard