import React, { useEffect, useState } from 'react'
import { getCourses } from '../../../api/queries/course';
import { client } from '../../../utils/client';
import Loader from '../../common/Loader';
import CourseCard from '../../CourseCard'

function CourseSection() {

    const [state, setState] = useState({ courses: [], error: '', loading: true });

    const { loading, error, courses } = state;
    const query = getCourses()

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courses = await client.fetch(query); // TODO: change to small portion of courses, like "TOP" courses
                console.log('COURSESSS,', courses)

                setState({ courses, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
            }
        };
        fetchCourses();
    }, []);


    return (
        <div className='custom-layout mb-10'>
            {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
                <section>
                    <section className='mb-5'>
                        <h2>Explore Courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
                            {courses.length && courses.map((course, index) => {
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
                                            likes='423'
                                            users='3432'
                                            tags={course.tags}
                                            categories={course.categories}
                                            slug={course.slug.current}
                                            reviewCount={course.reviews?.length || 0}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    <section>
                        <h2>Top Courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
                            {courses.length && courses.map(course => {
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