import React, { useEffect, useState } from 'react'
import { ChevronRightIcon, UserCircleIcon } from '@heroicons/react/outline'
import fakeImage from '../../assets/Images/blank_image.png'
import { getBlogArticle, getBlogsByAuthor } from '../../api/queries/blog';
import { client, urlFor } from '../../utils/client';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const ArticleBody = () => {
    const [article, setArticle] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [authorBlogs, setAuthorBlogs] = useState([])

    const navigate = useNavigate()
    const { slug } = useParams()
    const { authorSlug } = useParams()

    const query = getBlogArticle(slug)
    const authorBlogQuery = getBlogsByAuthor(authorSlug)

    useEffect(() => {
        window.scrollTo(0, 0)

        fetchBlogArticle();
        fetchAuthorBlogs();
    }, [slug, authorSlug]);

    const fetchBlogArticle = async () => {
        setLoading(true)
        try {
            const article = await client.fetch(query);
            console.log(article)

            setArticle(article[0])
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    };

    const fetchAuthorBlogs = async () => {
        setLoading(true)
        try {
            const authorBlogs = await client.fetch(authorBlogQuery);
            console.log(authorBlogs)

            setAuthorBlogs(authorBlogs)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    };

    return (
        <div className='custom-layout'>
            {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : article && (
                <div>
                    <div className='font-medium text-gray-400 mb-5 hidden sm:flex'>
                        <NavLink to={-1} className='hover:text-black'>Blog </NavLink>
                        <ChevronRightIcon className='w-5 mx-1' />
                        <span className='text-black'> {article.title}</span>
                    </div>
                    <div className='max-w-3xl mx-auto'>
                        <div className='flex flex-col text-left mt-4 mb-10'>
                            <h3 className='text-base'>{article.blogCategory.title}</h3>
                            <h1 className='text-3xl md:text-5xl mt-2'>{article.title}</h1>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-4'>
                                {article.author?.avatar ? <img className='ml-2 h-14 w-14 rounded-full min-w-14 min-h-14' src={article.author?.avatar} alt="Author" referrerPolicy="no-referrer" /> :
                                    <UserCircleIcon className='h-14 w-14 min-w-14 min-h-14' />
                                }
                                <div>
                                    <p className='font-bold text-xl'>{article.author.firstName} {article.author.lastName}</p>
                                    <p className='font-light text-base'>Lrner blogger</p>
                                </div>
                            </div>
                        </div>
                        <hr className='my-5' />
                        <div>
                            <p className='my-10'>
                                {article.description}
                            </p>
                            <img src={urlFor(article.mainImage).width(250).url()} alt="Post" className='block mx-auto w-full' />
                            <p className='my-10'>
                                {article.description}
                            </p>
                        </div>
                        <div>
                            <div className='border rounded-lg p-10'>
                                <div className='flex flex-row gap-4 mb-5'>
                                    {article.author?.avatar ? <img className='ml-2 h-14 w-14 rounded-full min-w-14 min-h-14' src={article.author?.avatar} alt="Author" referrerPolicy="no-referrer" /> :
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
                                <div className='mt-5 flex flex-col space-y-2'>
                                    <p className='mt-2 font-bold text-base'>Recent Articles By {article.author.firstName} {article.author.lastName}:</p>
                                    {authorBlogs && authorBlogs.map(blog => (
                                        <NavLink key={blog._id} to={`/blog/${blog.blogCategory.slug.current}/${article.author?.slug?.current}/${blog.slug?.current}`} className='font-medium text-sm text-blue-700 hover:underline'>
                                            <p>{blog.title}</p>
                                        </NavLink>
                                    ))}
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