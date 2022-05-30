import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'

const CourseOverviewHeader = ({ title, description, authorFirstName, authorLastName, createdAt, updatedAt, reviewCount, tags }) => {
    console.log('TAGS', tags)
    return (
        <div className='mb-28'>
            <div className='mt-10 flex flex-col gap-1 text-white'>
                <h1 className='mb-3 text-white'>{title}</h1>
                <p>{description}</p>
                <p className='my-4'>Created by:
                    <Link
                        to='/'
                        className="cursor-pointer underline ml-2 text-accent-500 font-bold">
                        {authorFirstName} {authorLastName}
                    </Link>
                </p>
                <div className='flex flex-row mb-2'>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm font-bold text-white">4.95</p>
                        <span className="w-1 h-1 mx-1.5 bg-white rounded-full"></span>
                        <p className="text-sm font-medium text-white">{reviewCount} reviews</p>
                        <span className="w-1 h-1 mx-1.5 bg-white rounded-full"></span>
                        <p className="text-sm font-medium text-white">211 students</p>
                    </div>
                </div>
                <p>Created at: {dayjs(createdAt).format('MMM D, YYYY')}</p>
                <p>Last updated at: {dayjs(updatedAt).format('MMM D, YYYY')}</p>
                <div className='flex flex-wrap mt-4'>
                {tags && tags.map(tag => {
                    return (
                        <div key={tag._id}>
                            <Link to='#' className='px-5 py-1 mr-2 rounded-full border border-gray-300 text-yellow-500 font-semibold text-sm flex align-center w-max cursor-pointer ease'>
                                <p>{tag.name}</p>
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default CourseOverviewHeader