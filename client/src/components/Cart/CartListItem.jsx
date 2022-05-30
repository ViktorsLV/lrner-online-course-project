import React, { useContext } from 'react'
import { urlFor } from '../../utils/client'
import fakeImage from '../../assets/Images/blank_image.png'
import { ClockIcon, CollectionIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../utils/Store'

const CartListItem = ({ title, mainImage, author, hours, lessons, price, id, likes, users, tags, category, slug }) => {
    const navigate = useNavigate()
    const { dispatch } = useContext(Store);

    const goToCourse = (slug) => {
        navigate(`/course/${slug}`)
    }
    
    const removeItem = (id) => {
        console.log(id)
        dispatch({
            type: 'CART_REMOVE_ITEM',
            payload: {
                _id: id,
            },
        });
    }

    return (
        <div className='border group overflow-hidden w-full flex my-3 rounded-md'>
            {mainImage ? <img src={urlFor(mainImage).url()} alt="Post " className='w-1/4 object-cover cursor-pointer ' onClick={()=>goToCourse(slug)}/> :
                <img src={fakeImage} alt="Fake post " className='h-30 w-1/4 object-cover cursor-pointer'/>
            }
            <div className='flex justify-between w-full p-3 bg-primary-500'>
                <div className='flex flex-col'>
                    <p className='text-base text-left font-bold text-neutral-500 leading-5 cursor-pointer' onClick={()=>goToCourse(slug)}>{title}</p>
                    <p className='text-xs mt-1'>by <span className='text-neutral-500'> {author?.firstName} {author?.lastName} </span></p>
                    <div className="flex items-center mt-2">
                        <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="w-4 h-4  text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className='text-xs ml-2'>(21 ratings)</span>
                    </div>
                    <div className='flex space-x-5 mt-2'>
                        <div className='flex'>
                            <ClockIcon className='w-5 mr-1 text-accent-500' />
                            <p className='text-xs flex mt-0.5'>{hours} hours</p>
                        </div>
                        <div className='flex'>
                            <CollectionIcon className='w-5 mr-1 text-accent-500' />
                            <p className='text-xs flex mt-0.5 '> {lessons} Lessons</p>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-20'>
                    <p onClick={() => removeItem(id)} className='text-accent-500 hover:underline h-max cursor-pointer'>Remove</p>
                    <p className='text-md text-accent-500 font-bold'>${price}</p>
                </div>
            </div>
        </div>
    )
}

CartListItem.defaultProps = {
    title: "Test course",
    author: {
        firstName: 'John',
        lastName: 'Doe',
        // avatar: ''
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

export default CartListItem