import React, { useEffect, useState } from 'react'
import { getLatestCourses, getTopCourses } from '../../../api/queries/course';
import { client } from '../../../utils/client';
import Loader from '../../common/Loader';
import CourseCard from '../../CourseCard/CourseCard';

function CourseSection() {
    const [topCourses, setTopCourses] = useState([])
    const [latestCourses, setLatestCourses] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const queryTop = getTopCourses()
    const queryLatest = getLatestCourses()

    useEffect(() => {
        fetchLatestCourses();
        fetchTopCourses();
    }, []);

    const fetchLatestCourses = async () => {
        setLoading(true)
        try {
            const latestCourses = await client.fetch(queryLatest);
            
                setLatestCourses(latestCourses);
                setLoading(false)
                console.log('COURSES', latestCourses)
        } catch (err) {
            setError(err);
            setLoading(false)
        }
    };
    const fetchTopCourses = async () => {
        setLoading(true)
        try {
            const topCourses = await client.fetch(queryTop);
            setLoading(false)
            setTopCourses(topCourses);
        } catch (err) {
            setError(err);
            setLoading(false)
        }
    };

    return (
        <div className='custom-layout mb-10'>
            {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
                <section>
                    <section className='mb-5'>
                        <h2>Latest Courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
                            {latestCourses?.length > 0 && latestCourses.map((course, index) => {
                                // console.log('Course', course);
                                return (
                                    <div data-testid={`course-card-${index}`} key={course._id}>
                                        <CourseCard
                                            key={course._id}
                                            title={course.title}
                                            mainImage={course.mainImage}
                                            price={course.price}
                                            author={course.author}
                                            duration={course.courseDuration}
                                            lessons='445'
                                            users='3432'
                                            tags={course.tags}
                                            categories={course.categories}
                                            slug={course.slug.current}
                                            reviewCount={course.reviews?.length || 0}
                                            likeCount={course.likeCount}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    <section>
                        <h2>Top Courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
                            {topCourses?.length > 0 && topCourses.map(course => {
                                // console.log('Course', course);
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
                            })}
                        </div>
                    </section>
                </section>
            )}
        </div>
    )
}

export default CourseSection