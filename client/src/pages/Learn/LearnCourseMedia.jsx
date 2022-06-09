import React from 'react'
import { urlFor } from '../../utils/client'
import fakeImage from '../../assets/Images/blank_image.png'
import DynamicIcon from '../../components/common/DynamicIcon'

const LearnCourseMedia = ({ mainImage, title, description, author }) => {
    return (
        <div className='w-2/3 h-max '>
            <div>
                {mainImage ? <img src={urlFor(mainImage).url()} alt="Course video" className='object-cover w-full' />
                    : <img src={fakeImage} alt="Fake image" width={'100%'} />}
            </div>
            <div className='custom-layout'>
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
        </div>
    )
}

export default LearnCourseMedia