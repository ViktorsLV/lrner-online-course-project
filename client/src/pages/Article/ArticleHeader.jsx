import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleHeader() {
    return (
        <div className=''>
            <div className='bg-black min-h-12 max-h-12 flex flex-row gap-5 justify-around px-20'>
                <Link to='/blog/#development' className='text-white my-auto hover:underline font-bold'>
                    Development
                </Link>
                <Link to='/blog/#Software' className='text-white my-auto hover:underline font-bold'>
                    IT &amp; Software
                </Link>
                <Link to=':Data science' className='text-white my-auto hover:underline font-bold'>
                    Data Science
                </Link>
                <Link to=':Soft skills' className='text-white my-auto hover:underline font-bold'>
                    Soft Skills
                </Link>
                <Link to=':Business' className='text-white my-auto hover:underline font-bold'>
                    Business
                </Link>
                <Link to=':Marketing' className='text-white my-auto hover:underline font-bold'>
                    Marketing
                </Link>
                <Link to=':Design' className='text-white my-auto hover:underline font-bold'>
                    Design
                </Link>
            </div>
        </div>
    )
}
