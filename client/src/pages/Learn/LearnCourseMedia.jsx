import React from 'react'
import { urlFor } from '../../utils/client'
import fakeImage from '../../assets/Images/blank_image.png'

const LearnCourseMedia = ({ mainImage}) => {
    return (
        <div className='w-full h-max'>
            <div>
                {mainImage ? <img src={urlFor(mainImage).url()} alt="Course video" className='object-cover w-full' />
                    : <img src={fakeImage} alt="Fake image" width={'100%'} />}
            </div>
        </div>
    )
}

export default LearnCourseMedia