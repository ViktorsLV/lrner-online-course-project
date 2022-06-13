import React from 'react'
import DynamicIcon from '../../components/common/DynamicIcon'

const LearnCourseAbout = ({title, description, author }) => {
    return (
        <div className='custom-layout w-full'>
            <div>
                <h3>About this course:</h3>
                <hr className='my-3 border border-gray-300' />
                <h4>{title}</h4>
                <p className='w-2/3 mt-1'>{description}</p>
            </div>
            <div className='mt-8'>
                <h3>Instructor:</h3>
                <hr className='my-3 border border-gray-300' />

                <div className='flex flex-row mb-2'>
                    {author?.avatar ? <img className='ml-2 w-20 h-20 object-cover rounded-full' src={author?.avatar} alt="Author" /> :
                        <DynamicIcon icon="UserCircleIcon" width="20" height="20" />
                    }
                    <div className='ml-4'>
                        <h5 className='text-lg font-bold text-neutral-500'>{author?.firstName} {author?.lastName}</h5>
                        <p className='text-sm text-gray-700'>{author?.email ? author.email : 'No additional details'}</p>
                        <p className='mt-5'>{author?.description ? author?.description : ''}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LearnCourseAbout