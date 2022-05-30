import React from 'react'
import BaseButton from '../../common/BaseButton/BaseButton'
import banner_image from '../../../assets/Images/banner_image.svg'

export default function Header() {
    return (
        <>
            <div className='custom-layout flex flex-row'>
                <div>
                    <div className='mt-20 mb-10'>
                        <h1 className=''>Learn at your <span className='text-accent-500'> own </span> pace</h1>
                        <p>Study any topic, improve your skills - anytime, anywhere. Thousands of courses on demand!</p>
                    </div>
                    <div className='w-max'>
                        <BaseButton text='Get Started' />
                    </div>
                </div>
                <div>
                    <img src={banner_image} alt="Course App" />
                </div>
            </div>
        </>
    )
}
