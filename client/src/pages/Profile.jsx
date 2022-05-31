import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Store } from "../utils/Store";
import { Outlet } from 'react-router-dom'
import ProfileNavigation from "../components/Profile/ProfileNavigation";

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

    return (
        user && (
            <div className="flex min-h-full py-20">
                <div className='w-1/4'>
                    <ProfileNavigation 
                        avatar={user.picture}
                        firstName={user.given_name}
                        lastName={user.family_name}
                    />
                </div>
                <div className='border w-0.5 bg-black border-black'></div>
                <div className="flex flex-col items-center w-full justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </div>
        )
    );
};

export default Profile