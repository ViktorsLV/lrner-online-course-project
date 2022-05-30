import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LoginIcon } from '@heroicons/react/outline'
import { Store } from "../utils/Store";

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

    return (
        user && (
            <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className='text-3xl mb-4'>Profile page</h1>
                <img src={user.picture} alt={user.family_name} />
                <h2>{user.given_name} {user.family_name}</h2>
                <h2>{user.email}</h2>
            </div>
        )
    );
};

export default Profile