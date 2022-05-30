import { UserCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom';

function InstructorCard() {

  //replace author with user, but query has to be made first
  const author = null;


  return (
    <div className='border rounded-sm p-5 min-w-60 max-w-xs flex flex-row gap-x-2 gap-y-2 '>
      <div>
        {author?.avatar ? <img className='ml-2 h-12 w-12 rounded-full min-w-12 min-h-12' src={author?.avatar} alt="Author" /> :
          <UserCircleIcon className='w-12 h-12 min-w-12 min-h-12' />
        }
      </div>
      <div>
        {/* link to author profile */}
        <Link to='/'>
        <h3 className='font-medium text-lg leading-5'>{("Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer").slice(0, 40)}</h3>
        </Link>
        <div className="flex flex-row">
          <p className='text-sm flex flex-row justify-center font-medium text-yellow-400'>5</p>
          <svg className="w-5 h-5 ml-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <p className='text-sm flex flex-row justify-center font-light pl-2 '>Instructor rating</p>
        </div>
        <p><span className='font-medium text-sm mr'>53221</span> students</p>
        <p><span className='font-medium text-sm mr'>21</span> courses</p>
      </div>
    </div>
  )
}

export default InstructorCard