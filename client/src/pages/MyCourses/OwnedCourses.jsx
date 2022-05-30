import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserPurchasedCoursesDetails } from '../../api/queries/user';
import Loader from '../../components/common/Loader';
import CourseCard from '../../components/CourseCard';
import { client } from '../../utils/client';
import { Store } from '../../utils/Store';

const OwnedCourses = () => {
    const navigate = useNavigate()
    const [purchasedCourses, setPurchasedCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const { state: { userInfo } } = useContext(Store);
    const userId = userInfo.sub
    const courseQuery = getUserPurchasedCoursesDetails(userId)

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=/my-courses/owned');
        }
    }, [navigate, userInfo]);


    useEffect(() => {
        console.log(userId);
        const getPurchasedCourses = async () => {
            try {
                const purchasedCourses = await client.fetch(courseQuery)
                setPurchasedCourses(purchasedCourses[0].purchasedCourses)
                console.log(purchasedCourses);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getPurchasedCourses()
    }, [])


    return (
        <div>
            {loading ? (<Loader loading={loading} />) : (
                <section className='mb-5'>
                    <h2>Owned Courses</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
                        {purchasedCourses.length && purchasedCourses.map(course => {
                            return (
                                <CourseCard
                                    key={course._id}
                                    title={course.title}
                                    mainImage={course.mainImage}
                                    price={course.price}
                                    author={course.author}
                                    duration={course.courseDuration}
                                    lessons='445'
                                    likes='423'
                                    users='3432'
                                    tags={course.tags}
                                    categories={course.categories}
                                    slug={course.slug.current}
                                    reviewCount={course.reviews?.length || 0}
                                />
                            )
                        })}
                    </div>
                </section>)}
        </div>
    )
}

export default OwnedCourses