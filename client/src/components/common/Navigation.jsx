import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/Images/logo_darker.png';
import { HeartIcon, LoginIcon, LogoutIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import jsCookie from 'js-cookie'
import { Store } from '../../utils/Store';
import DynamicIcon from './DynamicIcon';

const Navigation = () => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Store);

    const { userInfo } = state;
    const { cart } = state;

    const pages = [
        // { name: 'Explore', url: 'explore', id: 1 },
        // { name: 'About', url: 'about', id: 2 },
        { name: 'Blog Posts', url: '/blog/data-science', id: 3 },
        { name: 'Contact Us', url: '/contact', id: 4 },
    ]

    const mobilePages = [
        { name: 'Profile', url: '/profile/my-profile', id: 1 },
        { name: 'Owned Courses', url: '/my-courses/owned', id: 2 },
        { name: 'Liked Courses', url: '/my-courses/liked', id: 3 },
        { name: 'Blog Posts', url: '/blog/data-science', id: 4 },
        { name: 'Contact Us', url: '/contact', id: 5 },
    ]

    const activeLink = 'text-neutral-500'
    const profileActive = 'border-neutral-500 rounded-full border-2 hidden md:block'

    const logoutClickHandler = () => {
        dispatch({ type: 'USER_LOGOUT' });
        jsCookie.remove('userInfo');
        jsCookie.remove('cartItems');
        navigate('/');
    };

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className='custom-layout flex flex-col justify-between bg-primary-500 border-b-2 border-neutral-500'>
            <div className='flex justify-between'>
                <div className='flex items-center space-x-5'>
                    <Link to='/'>
                        <img src={logo} alt="logo" className='w-16 object-contain cursor-pointer' />
                    </Link>

                    <div className='hidden sm:inline-flex items-center space-x-5 text-gray-500'>
                        {pages.map(page => {
                            return (
                                <NavLink to={page.url} key={page.id} className={({ isActive }) => isActive ? activeLink : ''}>
                                    <p className='text-lg hover:text-neutral-500 hover:cursor-pointer'>{page.name}</p>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>

                <div className='flex items-center justify-around border-l-2 border-gray-300 m-2 text-gray-500'>

                    {!userInfo ?
                        <NavLink to='/login'>
                            <div className='ml-8 flex flex-row hover:border-secondary-500 rounded-full border-2 border-transparent bg-neutral-500 text-white hover:text-neutral-500 hover:bg-white px-3 py-1 hover:cursor-pointer'>
                                <p >Log in </p> <LoginIcon className='h-5 w-auto ml-2 mt-0.5' />
                            </div>
                        </NavLink> :
                        <div className='flex space-x-6'>
                            <NavLink to='/cart' className='mx-2'>
                                <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-accent-500 rounded-lg hover:opacity-90">Cart
                                    <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-accent-300 bg-accent-200 rounded-full">{cart.cartItems?.length}</span>
                                </button>
                            </NavLink>

                            <NavLink to='/my-courses/owned' className='mx-2 hidden md:block'>
                                <HeartIcon className='w-10 hover:text-neutral-500 cursor-pointer ' />
                            </NavLink>

                            <NavLink to='/profile/my-profile' className={({ isActive }) => isActive ? profileActive : 'rounded-full border-2 hover:border-neutral-500 hidden md:block'}>
                                <img src={userInfo.picture} alt={userInfo.given_name} referrerPolicy="no-referrer" className='h-9 w-auto object-fill rounded-full' />
                            </NavLink>

                            <div onClick={logoutClickHandler} className='ml-8 hover:border-transparent rounded-full border-2 border-neutral-500 bg-white text-neutral-500 hover:text-white hover:bg-neutral-500 px-3 py-1 hover:cursor-pointer hidden md:flex md:flex-row'>
                                <p >Log out </p> <LogoutIcon className='h-5 w-auto ml-2 mt-0.5' />
                            </div>

                            <div onClick={toggleMenu} className='ml-8 cursor-pointer md:hidden'>
                                <DynamicIcon icon="MenuIcon" />
                            </div>
                        </div>
                    }
                </div>
            </div>


            {menu &&
                <div className='flex flex-col content-end text-right text-lg space-y-2 mr-3 mt-10'>
                    {mobilePages.map(page => {
                        return (
                            <NavLink key={page.id} to={page.url} onClick={toggleMenu} className={({ isActive }) => isActive ? 'text-neutral-500 underline font-bold ' : ''}>
                                {page.name}
                            </NavLink>
                        )
                    })}

                </div>
            }
        </header>
    )
}

export default Navigation