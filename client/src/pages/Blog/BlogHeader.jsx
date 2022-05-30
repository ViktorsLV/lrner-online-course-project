import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getBlogCategories } from '../../api/queries/blog';
import banner_image from '../../assets/Images/banner_image.svg'
import { client } from '../../utils/client';

export default function BlogHeader() {
    const [state, setState] = useState({ categories: [], error: '', loading: true });
    const navigate = useNavigate()

    const { loading, error, categories } = state;
    const query = getBlogCategories()

    useEffect(() => {
        const fetchBlogCategories = async () => {
            try {
                const categories = await client.fetch(query);
                console.log(categories)

                setState({ categories, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
            }
        };
        fetchBlogCategories();
    }, []);

    return (
        <>
            <div className='custom-layout'>
                <div className='custom-layout flex flex-row gap-20'>
                    <div className='mt-20 mb-10 max-w-lg'>
                        <h1 className='my-2'>Where possibilities begin</h1>
                        <p>We are a leading marketplace platform for learning and teaching online. Explore some of our most popular content and learn something new.</p>
                    </div>

                    <div>
                        <img src={banner_image} alt="Course App" />
                    </div>
                </div>

                <div className='bg-black min-h-12 max-h-12 flex flex-row gap-5 justify-around px-20'>
                    {categories && categories.map(category => (
                        <Link key={category._id} to={category.slug.current} className='text-white my-auto hover:underline font-bold'>
                            {category.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
