import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNavigation = ({ avatar, firstName, lastName }) => {
    const tabActive = 'text-accent-500 font-bold border-b-4 border-accent-500 w-max'

    const pages = [
        { id: 1, url: 'my-profile', text: 'My Profile' },
        { id: 2, url: 'order-history', text: 'Order History' },
        { id: 3, url: 'delete-profile', text: 'Delete Profile' },
    ]

    return (
        <div className='flex flex-col p-5'>
            <div className='flex flex-col items-center mb-20 space-y-5'>
                <img src={avatar} alt={firstName} className="w-2/3 rounded-full" />
                <h3 className='text-md'>{firstName} {lastName}</h3>
            </div>
            <div className='flex flex-col justify-start space-y-3'>
                {pages && pages.map(page => (
                    <NavLink key={page.id} to={`${page.url}`} className={({ isActive }) => isActive ? tabActive : 'hover:text-accent-500'}>
                        <p className='text-lg '>{page.text}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default ProfileNavigation