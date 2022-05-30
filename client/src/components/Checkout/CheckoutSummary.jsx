import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Store } from '../../utils/Store';
import BaseButton from '../common/BaseButton/BaseButton'
import jsCookie from 'js-cookie'
import { client } from '../../utils/client';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const CheckoutSummary = () => {
    const { state, dispatch } = useContext(Store);
    const navigate = useNavigate()
    const { userInfo, cart: { cartItems, shippingAddress, paymentMethod } } = state;
    const [loading, setLoading] = useState(false)

    const itemsPrice = cartItems.reduce((a, b) => a + b.price, 0)

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/cart');
        }
        console.log(userInfo);
    }, [cartItems]);

    const finishOrder = async () => {
        try {
            setLoading(true);

            const { family_name, given_name, sub } = userInfo;

            const cartDetails = {
                itemsPrice,
                totalPrice: itemsPrice,
                paymentMethod: 'PayPal',
                shippingDetails: {
                    postalCode: '9000',
                    country: 'Denmark',
                    city: 'Aalborg'
                },
                orderItems: cartItems.map((x) => ({
                    ...x,
                    _key: uuidv4(),
                    slug: undefined,
                })),
            };

            const userPatch = client.patch(sub).setIfMissing({ purchasedCourses: [] }).append('purchasedCourses',
                cartItems.map((x) => ({
                    _type: 'reference',
                    _ref: x._id,
                    _key: uuidv4(),
                })))

            await client
                .transaction()
                .create({
                    _type: 'order',
                    user: {
                        _type: 'reference',
                        _ref: sub
                    },
                    firstName: given_name,
                    lastName: family_name,
                    userId: sub,
                    ...cartDetails
                })
                .patch(userPatch)
                .commit()
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.error('Transaction failed: ', err.message)
                })

            dispatch({ type: 'CART_CLEAR' });
            jsCookie.remove('cartItems');
            setLoading(false);
            toast("Order Placed!");

            // navigate(`/order/${data}`);
        } catch (err) {
            setLoading(false);
            console.log(err);
            toast("Error!");
        }
    }

    return (
        <div className='border-2 rounded-md border-primary-500 p-5 max-w-md md:mt-3 mt-10 flex flex-col justify-between h-fit '>
            <h2 className='mb-2'>Summary</h2>
            <div className='flex flex-col'>
                {cartItems.map(item => {
                    return (
                        <div key={item._id} className='flex justify-between space-x-10'>
                            <div className='truncate'>{item.title}</div>
                            <div>${(item.price).toFixed(2)}</div>
                        </div>
                    )
                })}
            </div>
            <hr className='my-5 border border-gray-300' />
            <div className='flex justify-between space-x-10'>
                <h4>Total:</h4>
                <p className='text-2xl font-bold'>${itemsPrice.toFixed(2)}</p>
            </div>
            <div className='mt-2'>
                <p>Lrnr is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>
                <p className='mt-2'>By completing your purchase you agree to these <span className='cursor-pointer hover:underline text-accent-300'>Terms of Service.</span></p>
            </div>
            {/* TODO: list items */}
            <div className='w-fit mx-auto mt-10'>
                <BaseButton text="Complete Payment" onClick={finishOrder} />
            </div>
        </div>
    )
}

export default CheckoutSummary