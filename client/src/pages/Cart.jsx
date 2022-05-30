import React, { useContext } from 'react'
import CartList from '../components/Cart/CartList'
import CartSummary from '../components/Cart/CartSummary'
import LikedCourseList from '../components/Cart/LikedCourseList'
import RelevantCourseList from '../components/Cart/RelevantCourseList'
import { Store } from '../utils/Store'
import empty_cart from '../assets/Images/empty_cart.svg'
import BaseButton from '../components/common/BaseButton/BaseButton'
import { NavLink, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/outline'

const Cart = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const navigate = useNavigate();

  const cartItems = cart.cartItems

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='custom-layout'>
      <NavLink to={'/'} className='mt-0 inline-block'>
        <div className='mb-1 hover:text-neutral-500'><ArrowLeftIcon className='w-5 mb-1 inline-block' /> Go Back</div>
      </NavLink>
      <h1>Your Shopping Cart</h1>
      <div className='space-y-10'>
        <div className=''>
          <p className='text-lg mt-10 mb-2'>{cartItems.length} Courses in Cart</p>

          {!cartItems.length ? <div className='flex mx-auto flex-col justify-center items-center border-4 border-primary-500 p-5 mt-2'>
            <img src={empty_cart} alt="Course App" className='w-1/4 mb-5' />
            <p className='mb-5'>Your cart is empty. Explore the shop to find a course and add it to cart! </p>
            <div className='w-max'>
              <BaseButton
                text='Explore'
                onClick={handleClick}
              />
            </div>
          </div> :
            <div className='flex md:flex-row md:space-x-10 flex-col space-x-0 chuj'>
              <CartList />
              <CartSummary />
            </div>}
        </div>
        <LikedCourseList />
        <RelevantCourseList />
      </div>
    </div>
  )
}

export default Cart