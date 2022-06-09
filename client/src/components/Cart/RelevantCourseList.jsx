import React, { useEffect, useState } from 'react'
import { getOldestCourses } from '../../api/queries/course'
import { client } from '../../utils/client'
import Loader from '../common/Loader'
import CourseCard from '../CourseCard/CourseCard'

const RelevantCourseList = () => {
  const [courses, setCourses] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const query = getOldestCourses()

  useEffect(() => {
    const fetchRelevantCourses = async () => {
      setLoading(true)
      try {
        const courses = await client.fetch(query);

        setCourses(courses);
        setLoading(false)
      } catch (err) {
        setError(err);
        setLoading(false)
      }
    };
    fetchRelevantCourses();
  }, []);

  return (
    <div>
      {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
        <div>
          <h2>Courses You might also like:</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
            {courses?.length > 0 && courses.map((course, index) => {
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
        </div>
      )}
    </div>
  )
}

export default RelevantCourseList