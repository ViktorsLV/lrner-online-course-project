import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LoginIcon } from '@heroicons/react/outline'
import { Store } from "../utils/Store";
import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate();

    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }
        console.log(userInfo);
        setUser(userInfo)
    }, [navigate, userInfo]);

    // if (isLoading || loading) {
    //     return <div>Loading ...</div>;
    // }
    const tabActive = 'text-accent-500 font-bold border-b-4 border-accent-500'

    return (
        user && (
            <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className='text-3xl mb-4'>Profile page</h1>
                <img src={user.picture} alt={user.family_name} />
                <h2>{user.given_name} {user.family_name}</h2>
                <div className='flex space-x-10 my-10'>
                    <NavLink to='my-profile' className={({ isActive }) => isActive ? tabActive : 'hover:text-accent-500'}>
                        <p className=''>My Profile</p>
                    </NavLink>

                    <NavLink to='order-history' className={({ isActive }) => isActive ? tabActive : 'hover:text-accent-500'}>
                        <p className=''>Order History</p>
                    </NavLink>

                    <NavLink to='delete-profile' className={({ isActive }) => isActive ? tabActive : 'hover:text-accent-500'}>
                        <p className=''>Delete Profile</p>
                    </NavLink>
                </div>

                {/* Rendering children routes */}
                <div>
                    <Outlet />
                </div>
            </div>
        )
    );
};

export default Profile