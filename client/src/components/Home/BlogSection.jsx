import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../api/queries/blog';
import { client } from '../../utils/client';
import BlogPreview from '../Blog/BlogPreview';
import Loader from '../common/Loader';

function BlogSection() {

    const [state, setState] = useState({ blogs: [], error: '', loading: true });

    const { loading, error, blogs } = state;
    const query = getBlogs()

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogs = await client.fetch(query); // TODO: change to small portion of blogs, like "TOP" blogs
                //console.log(blogs)

                setState({ blogs, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
                <section>
                    <section className='custom-layout mb-10'>
                        <h2>Read Our Blog Posts</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6 p-2 '>
                            {blogs.length > 0 && blogs.map((blog, index) => {
                                return (
                                    <div data-testid={`blog-preview-${index}`} key={blog._id}>
                                    <BlogPreview
                                        data-testid={`blog-preview-${index}`}
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
                    </section>
                </section>
            )}
        </div>
    )
}

export default BlogSection