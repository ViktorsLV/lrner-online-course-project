import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';

function Footer() {
    const pages = [
        { name: 'Contact Us', url: 'contact', id: 1 },
        { name: 'About', url: 'about', id: 2 },
        { name: 'Privacy Policy', url: 'privacy-policy', id: 3 },
        { name: 'Terms of Use', url: 'terms', id: 4 },
    ]

    return (
        <footer className="p-4 bg-primary-500 rounded-lg shadow md:px-6 md:py-8 ">
            <div className="sm:flex sm:items-center sm:justify-between">

                <Link to='/' className='flex flex-row'>
                    <img src={logo} alt="logo" className='w-16 object-contain cursor-pointer' />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">Lrner</span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-neutral-500 sm:mb-0 ">
                    {pages.map(page => {
                        return (
                            <li key={page.id}>
                                <Link to={page.url} className="mr-4 hover:underline md:mr-6">
                                    {page.name}
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-neutral-500 sm:text-center ">© 2022 <a href="/" className="hover:underline">Lrner</a>. All Rights Reserved.</span>
        </footer>
    )
}

export default Footer