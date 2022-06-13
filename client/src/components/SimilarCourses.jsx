import React from 'react'
import { UsersIcon } from '@heroicons/react/outline'
import { urlFor } from '../utils/client'
import { NavLink } from 'react-router-dom'
import fakeImage from '../assets/Images/blank_image.png'
import dayjs from 'dayjs'

const SimilarCourses = ({ title, author, mainImage, duration, lessons, price, likes, users, tags, categories, slug, createdAt }) => {
    return (
        <NavLink to={`/course/${slug}`}>
            <div className='flex w-full gap-4 hover:opacity-60'>
                <div className='flex w-full gap-4'>
                    <div className='cursor-pointer'>
                        {mainImage ? <img src={urlFor(mainImage).width(65).height(65).url()} alt="Post img" className='object-cover ' />
                            : <img src={fakeImage} alt="Fake post" />}
                    </div>

                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base text-left font-bold text-neutral-500 leading-4 text-ellipsis overflow-hidden'>{title}</p>
                            <div className='sm:flex hidden'>
                                <span className='text-xs flex flex-row justify-center font-medium'>{duration} hours | </span>
                                <span className='text-xs flex flex-row justify-center font-light ml-2'> Published on {dayjs(createdAt).format('MMM D, YYYY')} </span>
                            </div>
                        </div>

                        <div className='gap-4 hidden md:flex md:flex-row'>
                            <div className="flex flex-row">
                                <p className='text-sm flex flex-row justify-center font-light'>5</p>
                                <svg className="w-5 h-5 ml-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <p className='text-md flex flex-row justify-center font-semibold'>${price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div><hr className='my-4 w-full' /></div>
        </NavLink>

    )
}

SimilarCourses.defaultProps = {
    title: "Test course",
    author: {
        firstName: 'John', 
        lastName: 'Doe',
        avatar: ''
    },
    hours: "25",
    lessons: "11",
    price: "9.99",
    likes: "12",
    users: "100",
    tags: "UI, IT",
    categories: "Productivity",
    slug: "test-course",
}

export default SimilarCourses