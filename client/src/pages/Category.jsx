import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import capitalize from '../utils/capitalize'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { client } from '../utils/client';
import { getCategory } from '../api/queries/categories';
import { getCoursesByCategory } from '../api/queries/course';
import Loader from '../components/common/Loader';
import CourseCard from '../components/CourseCard';


const Category = () => {
    const { slug } = useParams();

    const [state, setState] = useState({ courses: [], error: '', loading: true });
    const [category, setCategory] = useState({})

    const { loading, error, courses } = state;
    // const query = `*[_type == "course" && "${slug}" in category->slug.current]{
    const query = getCoursesByCategory(slug)
    const categoryQuery = getCategory(slug)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courses = await client.fetch(query); // TODO: change to small portion of courses, like "TOP" courses
                console.log(courses)

                setState({ courses, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
                console.log(err);
            }
        };
        
        const fetchCategoryDetails = async () => {
            try {
                const category = await client.fetch(categoryQuery);
                console.log(category);
                setCategory(category);
            } catch (err) {
                setState({ loading: false, error: err.message });
                console.log(err);
            }
        };
        fetchCategoryDetails();
        fetchCourses();
    }, []);

    return (
        <div className='custom-layout'>
            {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
                <div>

                    <div className='font-medium text-gray-400 flex'>
                        <NavLink to={-1} className='hover:text-black'>Categories </NavLink>
                        <ChevronRightIcon className='w-5 mx-1' />
                        <span className='text-black'> {capitalize(slug)}</span>
                    </div>

                    {/* Intro */}
                    <div className='mt-10'>
                        <h1>{capitalize(slug)} Courses</h1>
                        <p className='mt-3'>{category[0]?.description}</p>
                    </div>

                    {/* Featured */}
                    <div className='mt-10'>
                        <h2>Featured courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                            {courses && courses.map(course => {
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
                                    />
                                )
                            })}
                        </div>
                    </div>

                    {/* Other */}
                    <div className='mt-10'>
                        <h2>Courses to get your started</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                            {courses && courses.map(course => {
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
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Category