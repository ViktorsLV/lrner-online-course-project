import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserLikedCoursesDetails } from '../../api/queries/user';
import BaseButton from '../../components/common/BaseButton/BaseButton';
import Loader from '../../components/common/Loader';
import CourseCard from '../../components/CourseCard/CourseCard';
import empty from '../../assets/Images/empty.svg'

import { client } from '../../utils/client';
import { Store } from '../../utils/Store';

const LikedCourses = () => {
    const { state, dispatch } = useContext(Store);
    const [likedCourses, setLikedCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const { userInfo } = state;
    const userId = userInfo?.sub
    const likeQuery = getUserLikedCoursesDetails(userId)

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=/my-courses/owned');
        }
        const getLikedCourses = async () => {
            try {
                const likedCourses = await client.fetch(likeQuery)
                setLikedCourses(likedCourses[0].likedCourses)
                console.log(likedCourses);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getLikedCourses()
    }, [navigate, userInfo])

    const redirect = () => {
        navigate('/')
    }

    return (
        <div>
            {loading ? (<Loader loading={loading} />) : (
                <section className='mb-5'>
                    <h2>Liked Courses:</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
                        {likedCourses.length > 0 ? likedCourses.map(course => {
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
                                    likeCount={course.likeCount}
                                />
                            )
                        }) :

                            <div className='w-full mx-auto mt-20 flex flex-col justify-center items-center'>
                                <img src={empty} alt="No Articles Found" className='w-1/5 h-auto mb-3' />
                                <h3>You have not liked any courses yet</h3>
                                <p>You can like courses from the courses page</p>
                                <div className='w-max mt-5'>
                                    <BaseButton text="Explore Courses" onClick={redirect} />
                                </div>
                            </div>
                        }
                    </div>
                </section>)}
        </div>
    )
}

export default LikedCourses