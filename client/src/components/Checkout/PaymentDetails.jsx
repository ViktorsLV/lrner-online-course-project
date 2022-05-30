import React, { useState } from 'react'
import payment_cards from '../../assets/Images/payment_cards.jpeg'
import paypal from '../../assets/Images/paypal.jpg'

const PaymentDetails = () => {
    const [paymentMethod, setPaymentMethod] = useState('')

    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            setPaymentMethod(target.value);
        }
    };
    return (
        <div className='w-full mr-10'>
            <h4>Payment Details</h4>
            <div className='mt-5'>
                <p className='text-lg mb-1'>Billing Address:</p>
                <div className='border-2 border-neutral-500 rounded-md py-4 px-2'>
                    <p>Denmark</p>
                </div>
                <div className='mt-10'>
                    <p className='text-lg mb-1'>Payment Option:</p>

                    <fieldset>
                        <legend className="sr-only">Payment Options</legend>
                        <div className="flex justify-between items-center space-x-20 mb-4 border-2 border-neutral-500 rounded-md py-4 px-2 " >
                            <div className='flex'>
                                <input id="payment-option-1" type="radio" name="payment option" value="CreditCard" className="w-4 h-4 mt-2 border-gray-300 " checked={paymentMethod == 'CreditCard'} onChange={handleChange}/>
                                <label htmlFor="payment-option-1" className="block ml-2 text-lg font-medium text-gray-900">
                                    Credit Card
                                </label>
                            </div>
                            <img src={payment_cards} alt="PayPal" className='w-12' />
                        </div>
                        <div className="flex justify-between mb-4 items-center border-2 border-neutral-500 rounded-md py-4 px-2 ">
                            <div className='flex'>
                                <input id="payment-option-2" type="radio" name="payment option" value="PayPal" className="w-4 h-4 mt-2 border-gray-300 " checked={paymentMethod == 'PayPal'} onChange={handleChange}/>
                                <label htmlFor="payment-option-2" className="block ml-2 text-lg font-medium text-gray-900">
                                    PayPal
                                </label>
                            </div>
                            <img src={paypal} alt="PayPalimg" className='w-10' />
                        </div>
                    </fieldset>

                    {/* <div className='border-2 border-neutral-500 rounded-md py-4 px-2 flex flex-col'>
                        <div className='flex justify-between space-x-20'>
                            <p className='font-bold text-md'>Credit Card</p>
                            <p>Image</p>
                        </div>
                        <div className='flex justify-between space-x-20'>
                            <p className='font-bold text-md'>PayPal</p>
                            
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails