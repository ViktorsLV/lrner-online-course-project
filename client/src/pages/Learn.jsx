import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../utils/Store';

const Learn = () => {
    const { slug } = useParams();
    const { state } = useContext(Store);
    const navigate = useNavigate()

    const { userInfo } = state;

    useEffect(() => {
        if (!userInfo) {
            navigate(`/login?redirect=/course/${slug}/learn`);
        }
    }, [navigate, userInfo])

    return (
        <div>Learn {slug}</div>
    )
}

export default Learn