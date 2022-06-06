import React, { useContext, useEffect, useState } from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { VideoCameraIcon } from '@heroicons/react/outline'
import { DocumentDuplicateIcon } from '@heroicons/react/outline'
import { DownloadIcon } from '@heroicons/react/outline'
import { FolderRemoveIcon } from '@heroicons/react/outline'
import { AcademicCapIcon } from '@heroicons/react/outline'
import { client, urlFor } from '../../utils/client'
import BaseButton from '../common/BaseButton/BaseButton'
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Store } from '../../utils/Store'
import { v4 as uuidv4 } from 'uuid';
import { getUserLikedCourses, getUserPurchasedCourses } from '../../api/queries/user'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const CourseOverviewCard = ({ slug, title, price, image, id, onClick, buttonText, duration, description, authorFirstName, authorLastName, createdAt, updatedAt, reviewCount }) => {
  const { state, dispatch } = useContext(Store);
  const [likes, setLikes] = useState([])
  const [purchases, setPurchases] = useState([])
  const navigate = useNavigate()

  const { userInfo } = state;
  const userId = userInfo?.sub
  const likeQuery = getUserLikedCourses(userId)
  const purchaseQuery = getUserPurchasedCourses(userId)

  const alreadyLiked = !!(likes?.filter((like) => like?._id === id))?.length;
  const alreadyPurchased = !!(purchases?.filter((p) => p?._id === id))?.length;

  useEffect(() => {
    if (userInfo !== null) {
      getUserLikes()
      getUserPurchases()
    }
  }, [userInfo])


  const getUserLikes = async () => {
    try {
      const likedCourses = await client.fetch(likeQuery)
      setLikes(likedCourses[0].likedCourses)
    } catch (error) {
      console.log(error);
    }
  }

  const getUserPurchases = async () => {
    try {
      const purchasedCourses = await client.fetch(purchaseQuery)
      setPurchases(purchasedCourses[0].purchasedCourses)
    } catch (error) {
      console.log(error);
    }
  }

  const likeCourse = async (userId) => {
    if (!alreadyLiked) {
      const userPatch = client.patch(userId).setIfMissing({ likedCourses: [] }).append('likedCourses', [{
        _key: uuidv4(),
        _type: 'reference',
        _ref: id
      }])

      const coursePatch = client.patch(id).setIfMissing({ likedBy: [] }).append('likedBy', [{
        _key: uuidv4(),
        _type: 'reference',
        _ref: userId
      }])

      await client
        .transaction()
        .patch(coursePatch)
        .patch(userPatch)
        .commit()
        .then((res) => {
          console.log(res);
          getUserLikes()
        })
        .catch((err) => {
          console.error('Transaction failed: ', err.message)
        })
    }
  };

  const unLikeCourse = async (userId) => {
    if (alreadyLiked) {
      const courseToRemove = [`likedCourses[_ref == "${id}"]`]
      const userPatch = client.patch(userId).unset(courseToRemove)
      const userToRemove = [`likedBy[_ref == "${userId}"]`]

      const coursePatch = client.patch(id).unset(userToRemove)

      await client
        .transaction()
        .patch(coursePatch)
        .patch(userPatch)
        .commit()
        .then((res) => {
          console.log(res);
          getUserLikes()
        })
        .catch((err) => {
          console.error('Transaction failed: ', err.message)
        })
    }
  }

  const goToCourse = (slug) => {
    navigate(`/course/${slug}/learn`)
  }

  return (
    <div className='bg-white h-max rounded-lg border-neutral-500 border-4'>
      <img src={urlFor(image).width(350).url()} alt="Post" className=' object-cover w-full h-60 border-t-lg ' />
      <div className='p-5'>

        <h3>{title}</h3>
        <p className='lg:hidden'>{description}</p>
        <h1 className='text-accent-500 mt-7'>{price}$</h1>

        {/* Mobile Only */}
        <div className='flex flex-col gap-1 lg:hidden'>
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
              <p className="ml-2 text-sm font-bold ">4.95</p>
              <span className="w-1 h-1 mx-1.5 bg-white rounded-full"></span>
              <p className="text-sm font-medium ">{reviewCount} reviews</p>
              <span className="w-1 h-1 mx-1.5 bg-white rounded-full"></span>
              <p className="text-sm font-medium ">211 students</p>
            </div>
          </div>
          <p>Created at: {dayjs(createdAt).format('MMM D, YYYY')}</p>
          <p>Last updated at: {dayjs(updatedAt).format('MMM D, YYYY')}</p>
        </div>
        {/* Mobile Only END*/}

        <div className='flex mt-5 justify-center space-x-2'>
          {/* TODO: add icon */}
          {alreadyPurchased ? <BaseButton text={'Go to course'} onClick={() => goToCourse(slug)} /> : <BaseButton text={buttonText} onClick={onClick} />}

          {userInfo ? alreadyLiked ? <HeartIconSolid className='w-11 mb-5 text-accent-500 cursor-pointer' onClick={(e) => { e.preventDefault(); unLikeCourse(userId) }} /> : <HeartIcon className='w-11 mb-5 hover:text-accent-500 cursor-pointer' onClick={(e) => { e.preventDefault(); likeCourse(userId) }} /> : null}
        </div>
        <p className='text-center text-sm mt-2 text-gray-500'>30 day money back guarantee </p>
        <div className='mt-4 hidden lg:block'>
          <h4>In this course you will get:</h4>
          <ul className='mt-4'>
            <li className='flex mb-2'> <span><VideoCameraIcon className='w-6 mr-2' /></span> {duration} hours of content</li>
            <li className='flex mb-2'> <span><DocumentDuplicateIcon className='w-6 mr-2' /></span> Full access to course materials</li>
            <li className='flex mb-2'> <span><DownloadIcon className='w-6 mr-2' /></span> Downloadable resources</li>
            <li className='flex mb-2'> <span><FolderRemoveIcon className='w-6 mr-2' /></span> Lifetime access</li>
            <li className='flex mb-2'> <span><AcademicCapIcon className='w-6 mr-2' /></span> Certificate of completion</li>
          </ul>
        </div>
        <hr className='my-5 border border-gray-400' />
        <div className='mt-4'>
          <h4 >Share this course:</h4>
          <div className='flex justify-around mt-5 group'>
            <div className='rounded-full p-4 w-max bg-white border-2 border-gray-400 hover:scale-90 transition ease-in-out cursor-pointer'><FaTwitter className='text-xl' /></div>
            <div className='rounded-full p-4 w-max bg-white border-2 border-gray-400 hover:scale-90 transition ease-in-out cursor-pointer'><FaEnvelope className='text-xl' /></div>
            <div className='rounded-full p-4 w-max bg-white border-2 border-gray-400 hover:scale-90 transition ease-in-out cursor-pointer'><FaExternalLinkAlt className='text-xl' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseOverviewCard