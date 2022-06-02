import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { getBlogCategories } from '../../api/queries/blog';
import banner_image from '../../assets/Images/banner_image.svg'
import { client } from '../../utils/client';

export default function BlogHeader() {
    const [state, setState] = useState({ categories: [], error: '', loading: true });
    const navigate = useNavigate()

    const { loading, error, categories } = state;
    const query = getBlogCategories()
    const { categorySlug } = useParams();

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

    const activeLink = `text-accent-500 my-auto font-bold`
    return (
        <>
            <div className='custom-layout'>
                <div className='custom-layout flex flex-row gap-20'>
                    <div className='mt-20 mb-10 max-w-lg'>
                        <h1 className='my-2'>Read opinions of our experts!</h1>
                        <p>We are a leading marketplace platform for learning and teaching online. Explore some of our most popular blog posts and learn something new.</p>
                    </div>

                    <div>
                        <img src={banner_image} alt="Course App" />
                    </div>
                </div>

                <div className='bg-black min-h-12 max-h-12 flex flex-row gap-5 justify-around px-20'>
                    {categories && categories.map(category => (
                        // <NavLink key={category._id} replace to={`/blog/${category.slug.current}`} className='text-white font-bold'>
                        <NavLink key={category._id} replace to={`/blog/${category.slug.current}`} className={({ isActive }) => isActive ? activeLink : 'text-white my-auto hover:underline'}>
                            {category.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}
