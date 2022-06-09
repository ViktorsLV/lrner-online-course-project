import React, { useEffect, useState } from 'react'
import { getBlogsByCategory } from '../../api/queries/blog';
import { client } from '../../utils/client';
import BlogPreview from '../../components/Blog/BlogPreview';
import Loader from '../../components/common/Loader';
import { useParams } from 'react-router-dom';
import no_data from '../../assets/Images/no_data.svg'

const BlogArticles = ({ blogSection }) => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { categorySlug } = useParams();
    const query = getBlogsByCategory(categorySlug)

    useEffect(() => {
        console.log(categorySlug)
        const fetchBlogs = async () => {
            setLoading(true)
            try {
                const blogs = await client.fetch(query); // TODO: change to small portion of blogs, like "TOP" blogs
                console.log(blogs)

                setBlogs(blogs)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError(err.message)
            }
        };
        fetchBlogs();
    }, [categorySlug]);

    return (
        <div>
            {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
                <section>
                    <section className='custom-layout mb-10'>
                        <h2>Articles</h2>
                        {blogs.length > 0 ?
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 ">
                                {blogs.map((blog, index) => {
                                    return (
                                        <div data-testid={`article-preview-${index}`} key={blog._id}>
                                        <BlogPreview
                                            key={blog._id}
                                            title={blog.title}
                                            slug={blog.slug}
                                            mainImage={blog.mainImage}
                                            description={(blog.description).slice(0, 100)}
                                            author={blog.author}
                                            blogCategory={blog.blogCategory}
                                            date='unknown'
                                            />
                                            </div>
                                    )
                                })}
                            </div>
                            :
                            <div className='w-full mx-auto mt-20 flex flex-col justify-center items-center'>
                                <img src={no_data} alt="No Articles Found" className='w-1/5 h-auto' />
                                <p className='mt-3'>Unfortunately there are no articles found in this category...</p>
                            </div>
                        }
                    </section>
                </section>
            )}
        </div>
    )
}

export default BlogArticles