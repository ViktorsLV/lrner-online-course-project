import { UserCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function BlogPreview({ slug, title, author, blogCategory }) {
	return (
		<div className="flex flex-wrap justify-between rounded-lg border-2 shadow-md">
			<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white overflow-hidden shadow-lg py-5 ">
					<div className="flex flex-wrap no-underline hover:no-underline">
						<p id="development" className="w-full font-bold text-sm text-gray-900 px-6">{blogCategory?.title}</p>
						<Link to={`/blog/${blogCategory?.slug.current}/${author?.slug?.current}/${slug?.current}`}>
							<p className="w-full font-bold hover:underline text-xl text-accent-500 px-6 pt-3 min-h-20">{title}</p>
						</Link>
					</div>
				</div>
				<div className="flex-none mt-auto bg-white overflow-hidden p-6">
					<div className="flex items-center justify-between">
						{author?.avatar ? <img className='w-8 h-8 rounded-full mr-4' src={author?.avatar} alt="Author" /> :
							<UserCircleIcon className='w-12 h-12 min-w-12 min-h-12' />
						}
						<p className=" text-sm md:text-sm font-normal">{author?.firstName} {author?.lastName}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPreview