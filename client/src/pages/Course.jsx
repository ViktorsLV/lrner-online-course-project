import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import CourseOverviewHeader from '../components/CourseOverview/CourseOverviewHeader';
import CourseOverviewCard from '../components/CourseOverview/CourseOverviewCard';
import capitalize from '../utils/capitalize';
import { client } from '../utils/client';
import { getCourse } from '../api/queries/course';
import { Store } from '../utils/Store';
import { toast, Zoom } from 'react-toastify';
import CourseAbout from '../components/CourseOverview/CourseAbout';
import CourseSimilar from '../components/CourseOverview/CourseSimilar';
import CourseOverviewReviews from '../components/CourseOverview/CourseOverviewReviews';
import Loader from '../components/common/Loader';
import { getUserPurchasedCourses } from '../api/queries/user';

const Course = () => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [purchases, setPurchases] = useState([])
    // const [userCourseList, setUserCourseList] = useState([])
    const { state: { cart, userInfo }, dispatch } = useContext(Store);
    const navigate = useNavigate()
    const userId = userInfo?.sub
    const purchaseQuery = getUserPurchasedCourses(userId)

    const query = getCourse(slug)
    const existItem = cart.cartItems.find((x) => x._id === course._id);
    const alreadyPurchased = !!(purchases?.filter((p) => p?._id === course?._id))?.length;

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchCourse = async () => {
            setLoading(true);
            try {
                const course = await client.fetch(query);
                // console.log('Course', course)

                setCourse(course[0]);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.log(err);
            }
        };
        fetchCourse();
    }, [navigate, slug]);


    useEffect(() => {
        if (userInfo !== null) {
            getUserPurchases()
        }
    }, [userInfo])

    const getUserPurchases = async () => {
        try {
            const purchasedCourses = await client.fetch(purchaseQuery)
            setPurchases(purchasedCourses[0].purchasedCourses)
        } catch (error) {
            console.log(error);
        }
    }

    const addToCartHandler = () => {
        if (userInfo) {
            if (existItem) {
                // toast("Item already added!");
                navigate('/cart');
                return
            } else {
                dispatch({
                    type: 'CART_ADD_ITEM',
                    payload: {
                        _id: course._id,
                        title: course.title,
                        category: course.category.title,
                        slug: course.slug.current,
                        price: course.price,
                        mainImage: course.mainImage,
                        duration: course.courseDuration,
                        author: course.author,
                        description: course.description,
                        reviewCount: course.reviewCount ? course.reviewCount : 0
                    },
                });
                toast("Added to cart!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    transition: Zoom,
                    closeOnClick: true,
                    pauseOnHover: false,
                    progress: undefined,
                });
            }
        } else {
            navigate(`/login?redirect=/course/${slug}`);
            return
        }
    }

    return (
        <div>
            {loading ? <Loader loading={loading} /> : error ? (<div>error message and btn to go back</div>) : (
                <div>
                    <div className='bg-neutral-500 lg:relative custom-layout flex flex-col w-full'>
                        <div className='font-medium flex'>
                            <NavLink to={'/'} className='text-accent-500 hover:text-white'>{capitalize(course?.category.title)} </NavLink>
                            <ChevronRightIcon className='w-5 mx-1 text-white' />
                            <span className='text-white'> {capitalize(course?.title)}</span>
                        </div>

                        {/* Course Overview */}
                        <div className='flex lg:flex-row flex-col-reverse w-full'>
                            <div className='mx-10 lg:w-3/5 w-full hidden lg:block'>
                                <CourseOverviewHeader
                                    title={course.title}
                                    description={course.description}
                                    authorFirstName={course.author.firstName}
                                    authorLastName={course.author.lastName}
                                    createdAt={course._createdAt}
                                    updatedAt={course._updatedAt}
                                    likes={course.likes}
                                    // reviewCount={course.reviews?.length || 0}
                                    reviewCount={course.reviewCount || 0}
                                    tags={course.tags}
                                />
                            </div>

                            <div className='mx-auto mt-5 lg:mt-0 lg:w-1/3 lg:absolute lg:right-5'>
                                <CourseOverviewCard
                                    onClick={addToCartHandler}
                                    title={course.title}
                                    image={course.mainImage}
                                    description={course.description}
                                    authorFirstName={course.author.firstName}
                                    authorLastName={course.author.lastName}
                                    createdAt={course._createdAt}
                                    updatedAt={course._updatedAt}
                                    price={course.price}
                                    likes={course.likes}
                                    duration={course.courseDuration}
                                    id={course._id}
                                    buttonText={existItem ? 'Go to cart' : 'Add to cart'}
                                    slug={slug}
                                    // reviewCount={course.reviews?.length || 0}
                                    reviewCount={course.reviewCount || 0}
                                    alreadyPurchased={alreadyPurchased}
                                />
                            </div>
                        </div>

                    </div>

                    <div className='mt-10 lg:w-2/3 w-full'>
                        <CourseAbout description={course.description} />
                        <CourseSimilar />
                    </div>

                    <CourseOverviewReviews
                        reviews={course.reviews}
                        alreadyPurchased={alreadyPurchased}
                        userId={userId}
                    />
                </div>
            )}
        </div>
    )
}
export default Course