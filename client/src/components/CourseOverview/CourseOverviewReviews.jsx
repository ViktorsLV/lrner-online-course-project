import React, { useState } from 'react'
import { client } from '../../utils/client'
import Review from './Review'
import { v4 as uuidv4 } from 'uuid';

const CourseOverviewReviews = ({ reviews, alreadyPurchased, userId, reRender, id }) => {
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(null)

    const changeRating = e => {
        const target = e.target;
        if (target.checked) {
            setRating(target.value);
        }
    };

    // calculate if the user has already reviewed the course and assign it to variable
    const alreadyReviewed = !!(reviews?.filter((x) => x.postedBy?._id === userId))?.length;

    const leaveReview = async (e) => {
        e.preventDefault()
        console.log('submitted', review, rating)

        // const data = {
        //     // _key: uuidv4(),
        //     _type: 'review',
        //     postedBy: {
        //         _type: 'reference',
        //         _ref: userId
        //     },
        //     review: review,
        //     rating: rating
        // }
        // const coursePatch = client.patch(id).append('reviews', [data])

        // const reviewPatch = client.patch(id).setIfMissing({ reviews: [] }).append('review', [{
        //     _type: 'review',
        //     postedBy: {
        //         _type: 'reference',
        //         _ref: userId
        //     },
        //     review: review,
        //     rating: rating
        // }])
        // await client
        //     .transaction()
        //     .patch(reviewPatch)
        //     .commit()
        //     .then((res) => {
        //         console.log(res);
        //         reRender()
        //     })
        //     .catch((err) => {
        //         console.error('Transaction failed: ', err.message)
        //     })
    }

    return (
        <div className='my-10 w-2/3'>
            <div className='mx-10 mt-8'>
                <h2 className='mb-4 lg:text-left'>Reviews</h2>
                {alreadyPurchased && alreadyReviewed ?
                    <h4 className='text-sm text-green-400'>You have already reviewed this course</h4>
                    :
                    <div className="w-full mb-3">
                        <form action="#" method="POST" onSubmit={(e) => leaveReview(e)}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="">

                                        <div className="col-span-6 sm:col-span-4 mb-5">
                                            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                                                Rating:
                                            </label>
                                            <div className="rating mt-3 flex">
                                                <div className='flex flex-col mx-2'>
                                                    <input type="radio" name="rating-1" value={1} className="cursor-pointer ring-accent-500 focus:text-accent-500 focus:ring-accent-500 text-accent-500 active:text-accent-500 border-accent-500" checked={rating == '1'} onChange={changeRating} />
                                                    <label htmlFor="payment-option-2" className="block ml-1 text-lg font-medium text-gray-900">
                                                        1
                                                    </label>
                                                </div>
                                                <div className='flex flex-col mx-2'>
                                                    <input type="radio" name="rating-2" value={2} className="cursor-pointer ring-accent-500 focus:text-accent-500 focus:ring-accent-500 text-accent-500 active:text-accent-500 border-accent-500" checked={rating == '2'} onChange={changeRating} />
                                                    <label htmlFor="payment-option-2" className="block ml-1 text-lg font-medium text-gray-900">
                                                        2
                                                    </label>
                                                </div>
                                                <div className='flex flex-col mx-2'>
                                                    <input type="radio" name="rating-3" value={3} className="cursor-pointer ring-accent-500 focus:text-accent-500 focus:ring-accent-500 text-accent-500 active:text-accent-500 border-accent-500" checked={rating == '3'} onChange={changeRating} />
                                                    <label htmlFor="payment-option-2" className="block ml-1 text-lg font-medium text-gray-900">
                                                        3
                                                    </label>
                                                </div>
                                                <div className='flex flex-col mx-2'>
                                                    <input type="radio" name="rating-4" value={4} className="cursor-pointer ring-accent-500 focus:text-accent-500 focus:ring-accent-500 text-accent-500 active:text-accent-500 border-accent-500" checked={rating == '4'} onChange={changeRating} />
                                                    <label htmlFor="payment-option-2" className="block ml-1 text-lg font-medium text-gray-900">
                                                        4
                                                    </label>
                                                </div>
                                                <div className='flex flex-col mx-2'>
                                                    <input type="radio" name="rating-5" value={5} className="cursor-pointer ring-accent-500 focus:text-accent-500 focus:ring-accent-500 text-accent-500 active:text-accent-500 border-accent-500" checked={rating == '5'} onChange={changeRating} />
                                                    <label htmlFor="payment-option-2" className="block ml-1 text-lg font-medium text-gray-900">
                                                        5
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                                                Review:
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    onChange={(e) => setReview(e.target.value)}
                                                    value={review}
                                                    id="review"
                                                    name="review"
                                                    rows={3}
                                                    className="shadow-sm focus:ring-accent-500 focus:border-accent-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="I recommend this course!"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    {!rating || !review ?
                                        <button
                                            disabled
                                            className="bg-gray-300 inline-flex justify-center px-4 py-2 rounded-full text-white w-max text-center hover:cursor-not-allowed "
                                        >
                                            Save
                                        </button>
                                        :
                                        <button
                                            type="submit"
                                            className="bg-accent-500 inline-flex justify-center px-4 py-2 hover:opacity-90 rounded-full text-white w-max text-center hover:cursor-pointer "
                                        >
                                            Save
                                        </button>
                                    }
                                </div>

                            </div>
                        </form>
                    </div>
                }

                {reviews ? reviews.map(review => {
                    console.log(alreadyReviewed);
                    return (
                        <Review
                            key={review._id}
                            createdAt={review._createdAt}
                            author={review?.postedBy}
                            rating={review.rating}
                            review={review.review}
                        />
                    )
                })
                    : <p>No reviews under this course yet</p>
                }
            </div>
        </div>
    )
}

export default CourseOverviewReviews