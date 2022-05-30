import React, { useEffect, useState } from 'react'
import { getCourses } from '../../api/queries/course';
import { client } from '../../utils/client';
import Loader from '../common/Loader';
import StudentsAlsoBought from '../StudentsAlsoBought';

const CourseSimilar = () => {

    const [state, setState] = useState({ courses: [], error: '', loading: true });
    const { loading, error, courses } = state;

    const query = getCourses()

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courses = await client.fetch(query); // TODO: change to small portion of courses, like "TOP" courses
                console.log(courses)

                setState({ courses, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className='flex flex-col mx-10 '>
            <h2 className='mb-4 lg:text-left'>Similar courses</h2>
            {loading ? <Loader loading={loading} /> : error ? (<div>error message and btn to go back</div>) : (
                courses.length && courses.map(course => {
                    return (
                        <StudentsAlsoBought
                            key={course._id}
                            title={course.title}
                            mainImage={course.mainImage}
                            price={course.price}
                            author={course.author}
                            duration={course.courseDuration}
                            lessons='445'
                            likes={course.likes}
                            users='3432'
                            tags={course.tags}
                            categories={course.categories}
                            slug={course.slug.current}
                            createdAt={course._createdAt}
                        />
                    )
                })
            )}
        </div>

    )
}

export default CourseSimilar