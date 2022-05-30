import React, { useContext, useEffect, useState } from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { VideoCameraIcon } from '@heroicons/react/outline'
import { DocumentDuplicateIcon } from '@heroicons/react/outline'
import { DownloadIcon } from '@heroicons/react/outline'
import { FolderRemoveIcon } from '@heroicons/react/outline'
import { AcademicCapIcon } from '@heroicons/react/outline'
// import { ShoppingCartIcon } from '@heroicons/react/outline'
// import { NavLink } from 'react-router-dom'
// import dayjs from 'dayjs'
// import capitalize from '../../utils/capitalize'
import { client, urlFor } from '../../utils/client'
import BaseButton from '../common/BaseButton/BaseButton'
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Store } from '../../utils/Store'
import { v4 as uuidv4 } from 'uuid';
import { getUserLikedCourses, getUserPurchasedCourses } from '../../api/queries/user'
import { useNavigate } from 'react-router-dom'

const CourseOverviewCard = ({ slug, title, price, image, id, onClick, buttonText, duration }) => {
  const { state, dispatch } = useContext(Store);
  const [likes, setLikes] = useState([])
  const [purchases, setPurchases] = useState([])
  const navigate = useNavigate()

  const { userInfo } = state;
  const userId = userInfo?.sub
  const likeQuery = getUserLikedCourses(userId)
  const purchaseQuery = getUserPurchasedCourses(userId)

  useEffect(() => {
    if (userInfo !== null) {
      getUserLikes()
      getUserPurchases()
    }
  }, [userInfo])

  const alreadyLiked = !!(likes?.filter((like) => like?._id === id))?.length;
  const alreadyPurchased = !!(purchases?.filter((p) => p?._id === id))?.length;

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

  const likeCourse = (userId) => {
    if (!alreadyLiked) {
      client.patch(userId).setIfMissing({ likedCourses: [] }).append('likedCourses', [{
          _key: uuidv4(),
          _type: 'reference',
          _ref: id
      }])
        .commit({ autoGenerateArrayKeys: true })
        .then((res) => {
          console.log(res);
          getUserLikes()
        });
    }
  };
  
  const unLikeCourse = (userId) => {
    if (alreadyLiked) {
      const courseToRemove = [`likedCourses[_ref == "${id}"]`]
      client.patch(userId).unset(courseToRemove)
        .commit({ autoGenerateArrayKeys: true })
        .then((res) => {
          console.log(res);
          getUserLikes()
        });
    }
  }

  const goToCourse = (slug)  => {
    navigate(`/course/${slug}/learn`)
  }

  return (
    <div className='bg-white h-max rounded-md min-w-80'>
      <img src={urlFor(image).width(350).url()} alt="Post" className='rounded-t-md object-cover w-full h-60 group-hover:scale-105 transition-transform duration-200 ease-in-out' />
      <div className='p-5'>

        <h3>{title}</h3>
        <h1 className='text-accent-500 mt-7'>{price}$</h1>
        <div className='flex mt-5 justify-center space-x-2'>
          {/* TODO: add icon */}
          {alreadyPurchased ?  <BaseButton text={'Go to course'} onClick={() => goToCourse(slug)} /> : <BaseButton text={buttonText} onClick={onClick} />}
          
          {userInfo ? alreadyLiked ? <HeartIconSolid className='w-11 mb-5 text-accent-500 cursor-pointer' onClick={(e) => { e.preventDefault(); unLikeCourse(userId) }} /> : <HeartIcon className='w-11 mb-5 hover:text-accent-500 cursor-pointer' onClick={(e) => { e.preventDefault(); likeCourse(userId) }} /> : null}
        </div>
        <p className='text-center text-sm mt-2 text-gray-500'>30 day money back guarantee </p>
        <div className='mt-4'>
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