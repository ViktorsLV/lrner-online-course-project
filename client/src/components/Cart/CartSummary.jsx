import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../utils/Store';
import BaseButton from '../common/BaseButton/BaseButton'

const CartSummary = () => {
    const { state, dispatch } = useContext(Store);
    const navigate = useNavigate()
    const { cart: { cartItems } } = state;

    const itemsPrice = cartItems.reduce((a, b) => a + b.price, 0)

    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='border-2 rounded-md border-primary-500 p-5 w-full md:mt-3 mt-10 flex flex-col justify-between h-fit '>
            <div>
                <h4>Total:</h4>
                <p className='text-3xl text-accent-500 font-bold'>${itemsPrice.toFixed(2)}</p>
            </div>
            {/* TODO: list items */}
            <div className='w-fit mx-auto mt-10'>
                <BaseButton text="Checkout" onClick={goToCheckout} />
            </div>
        </div>
    )
}

export default CartSummary