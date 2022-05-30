import React from 'react'
import { HeartIcon, UsersIcon, CollectionIcon, ClockIcon, UserCircleIcon } from '@heroicons/react/outline'
import { urlFor } from '../utils/client'
import { NavLink } from 'react-router-dom'
import fakeImage from '../assets/Images/blank_image.png'

const CourseCard = ({ title, author, mainImage, duration, lessons, price, likes, users, tags, categories, slug, reviewCount }) => {
    return (
        <NavLink to={`/course/${slug}`}>
            <div className='flex flex-col border rounded-lg group cursor-pointer overflow-hidden shadow-md hover:shadow-accent-500'>
                {mainImage ? <img src={urlFor(mainImage).width(250).url()} alt="Post" className='h-40 object-cover w-full group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                    : <img src={fakeImage} alt="Fake" className='h-40 object-cover w-full group-hover:scale-105 transition-transform duration-200 ease-in-out' />}
                <div className='flex flex-col justify-between p-5 bg-primary-500 '>
                    <div className=''>

                        <div className='flex  flex-row justify-between items-start mb-2'>
                            <p className='text-base text-left font-bold text-neutral-500 leading-5 min-h-20'>{title.slice(0, 60)}</p>
                            {author?.avatar ? <img className='ml-2 h-12 w-12 rounded-full min-w-12 min-h-12' src={author?.avatar} alt="Author" /> :
                                <UserCircleIcon className='w-12 h-12 min-w-12 min-h-12' />
                            }
                        </div>
                        <p className='text-xs'>by <span className='text-neutral-500'> {author?.firstName} {author?.lastName} </span></p>
                        <div className='flex flex-row mt-2 space-x-5'>
                            <div className='flex'>
                                <ClockIcon className='w-5 mr-1 text-accent-500 ' />
                                <p className='text-xs flex mt-0.5'>{duration} hours</p>
                            </div>
                            <div className='flex'>
                                <CollectionIcon className='w-5 mr-1 text-accent-500' />
                                <p className='text-xs flex mt-0.5 '> {lessons} Lessons</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-2">
                            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4  text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className='text-xs ml-2'>({reviewCount} reviews)</span>
                        </div>
                    </div>
                    {/* <div>
                    {tags.map((tag, index) => {
                            return (
                                <span className='' key={index}>{tag}</span>
                            )
                        })}
                </div> */}
                    <div className='flex flex-col'>
                        <hr className='my-5 border border-gray-300' />
                        <div className='flex flex-row justify-between'>
                            <p className='text-md text-accent-500 font-bold'>{price}$</p>
                            <div className='flex space-x-5'>
                                <div className='flex'>
                                    <HeartIcon className='w-5 mr-1 text-accent-500' />
                                    <p className='text-xs flex mt-1'> {likes}</p>
                                </div>
                                <div className='flex'>
                                    <UsersIcon className='w-5 mr-1 text-accent-500' />
                                    <p className='text-xs flex mt-1'> {users}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

CourseCard.defaultProps = {
    title: "Test course",
    author: {
        firstName: 'John',
        lastName: 'Doe',
        avatar: ''
    },
    // fakeImage: "../assets/Images/blank_image.png",
    hours: "25",
    lessons: "11",
    price: "9.99",
    likes: "12",
    users: "100",
    tags: "UI, IT",
    categories: "Productivity",
    slug: "test-course",
}

export default CourseCard