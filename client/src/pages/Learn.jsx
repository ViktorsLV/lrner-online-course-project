import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCourse } from '../api/queries/course';
import { getUserPurchasedCourses } from '../api/queries/user';
import { client } from '../utils/client';
import { Store } from '../utils/Store';

const Learn = () => {
    const [course, setCourse] = useState({});
    const [purchases, setPurchases] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { slug } = useParams();
    const { state } = useContext(Store);
    const navigate = useNavigate()

    const { userInfo } = state;
    const query = getCourse(slug)
    const purchaseQuery = getUserPurchasedCourses(userInfo?.sub)

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!userInfo) {
            navigate(`/login?redirect=/course/${slug}/learn`);
            toast.error('You must be logged in to view this page');
        } else {
            getUserPurchases();
        }

    }, [navigate, userInfo, slug])

    useEffect(() => {
        const hasPurchased = !!(purchases?.filter((p) => p?.slug.current === slug))?.length;

        if (purchases !== null) {
            if (hasPurchased) {
                fetchCourse()
                console.log(hasPurchased);
            }
            else {
                toast.error('You must purchase this course to access the learn page.')
                navigate(`/course/${slug}`)
            }
        }
    }, [navigate, userInfo, slug, purchases])


    const getUserPurchases = async () => {
        setLoading(true);
        try {
            const purchasedCourses = await client.fetch(purchaseQuery)
            setPurchases(purchasedCourses[0].purchasedCourses)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const fetchCourse = async () => {
        setLoading(true);
        try {
            const course = await client.fetch(query);
            console.log('Course', course)

            setCourse(course);
            setLoading(false);
        } catch (err) {
            setError(true);
            setError(err.message);
            console.log(err);
        }
    };


    return (
        <div>Learn {slug}</div>
    )
}

export default Learn