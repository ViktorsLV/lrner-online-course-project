import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MyCourses = () => {
    const tabActive = 'text-accent-500 font-bold border-b-4 border-accent-500'

    return (
        <div className='custom-layout'>
            <h1>My Courses</h1>
            <div className='flex space-x-10 my-10'>
                <NavLink to='owned' className={({ isActive }) => isActive ? tabActive : 'hover:text-accent-500'}>
                    <p className=''>Owned courses</p>
                </NavLink>

                <NavLink to='liked' className={({ isActive }) => isActive ? tabActive : 'hover:text-accent-500'}>
                    <p className=''>Liked courses</p>
                </NavLink>
            </div>

            {/* Rendering children routes */}
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MyCourses