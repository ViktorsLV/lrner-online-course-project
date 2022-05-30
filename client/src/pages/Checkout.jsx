import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import PaymentDetails from '../components/Checkout/PaymentDetails';
import { Store } from '../utils/Store';

const Checkout = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(Store);
    const { userInfo, cart } = state;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=/checkout');
        }
    }, [navigate, userInfo]);

    return (
        <div className='custom-layout'>
            <div className='font-medium flex'>
                <NavLink to={'/cart'} className='text-neutral-500 hover:text-accent-500'>Cart </NavLink>
                <ChevronRightIcon className='w-5 mx-1 text-neutral-500' />
                <span className='text-neutral-500 font-bold'> Checkout</span>
            </div>
            <h1 className='mt-10'>Checkout</h1>
            <div className='flex justify-between mt-10'>
                <PaymentDetails />
                <CheckoutSummary />
            </div>
        </div>
    )
}

export default Checkout