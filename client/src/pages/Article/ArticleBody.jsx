import React, { useEffect, useState } from 'react'
import { ChevronRightIcon, UserCircleIcon } from '@heroicons/react/outline'
import fakeImage from '../../assets/Images/blank_image.png'
import { getBlogArticle } from '../../api/queries/blog';
import { client, urlFor } from '../../utils/client';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const ArticleBody = () => {
    const { slug } = useParams()
    const [state, setState] = useState({ article: {}, error: '', loading: true });
    const navigate = useNavigate()

    const { loading, error, article } = state;
    const query = getBlogArticle(slug)

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchBlogArticle = async () => {
            try {
                const article = await client.fetch(query);
                console.log(article)

                setState({ article: article[0], loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
            }
        };
        fetchBlogArticle();
    }, [slug]);

    return (
        <div className='custom-layout'>
            {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
                <div>
                    <div className='font-medium text-gray-400 flex mb-5'>
                        <NavLink to={-1} className='hover:text-black'>Categories </NavLink>
                        <ChevronRightIcon className='w-5 mx-1' />
                        <span className='text-black'> {article.title}</span>
                    </div>
                    <div className='max-w-3xl mx-auto'>
                        <div className='flex flex-col text-left mt-4 mb-10'>
                            <h3 className='text-base'>{article.blogCategory.title}</h3>
                            <h1 className='text-5xl'>{article.title}</h1>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-4'>
                                {article.author?.avatar ? <img className='ml-2 h-14 w-14 rounded-full min-w-14 min-h-14' src={article.author?.avatar} alt="Author" /> :
                                    <UserCircleIcon className='h-14 w-14 min-w-14 min-h-14' />
                                }
                                <div>
                                    <p className='font-bold text-xl'>{article.author.firstName} {article.author.lastName}</p>
                                    <p className='font-light text-base'>Lrner blogger</p>
                                </div>
                            </div>
                            <button type="button" className="text-blue-900 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 border">
                                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                Share with Google
                            </button>
                        </div>
                        <hr className='my-5' />
                        <div>
                            <p className='my-10'>
                                {article.description}
                            </p>
                            <img src={urlFor(article.mainImage).width(250).url()} alt="Post" className='block mx-auto min-w-100 min-h-48' />
                            <p className='my-10'>
                                {article.description}
                            </p>
                        </div>
                        <div>
                            <div className='border rounded-sm p-10'>
                                <div className='flex flex-row gap-4 mb-5'>
                                    {article.author?.avatar ? <img className='ml-2 h-14 w-14 rounded-full min-w-14 min-h-14' src={article.author?.avatar} alt="Author" /> :
                                        <UserCircleIcon className='h-14 w-14 min-w-14 min-h-14' />
                                    }
                                    <div>
                                        <p className='font-bold text-xl'>{article.author.firstName} {article.author.lastName}</p>
                                        <p className='font-light text-base'>Lrner blogger</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-2 font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p className='mt-2 font-normal text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='mt-2 font-bold text-base'>Recent Articles By {article.author.firstName} {article.author.lastName}</p>
                                    <Link to="#" className='mt-2 font-medium text-sm text-blue-700 hover:underline'>
                                        <p>How much game development experience do you have?</p>
                                    </Link>
                                    <Link to="#" className='mt-2 font-medium text-sm text-blue-700 hover:underline'>
                                        <p>Unity vs Unreal Engine: history</p>
                                    </Link>
                                    <Link to="#" className='mt-2 font-medium text-sm text-blue-700 hover:underline'>
                                        <p>Unity vs. Unreal: Which Game Engine is Best For You?</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ArticleBody