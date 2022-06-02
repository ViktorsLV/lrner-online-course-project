import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react'
import { getMyOrders } from '../../api/queries/user';
import Loader from '../../components/common/Loader';
import { client } from '../../utils/client';
import { Store } from '../../utils/Store';
import no_data from '../../assets/Images/no_data.svg'

const OrderHistory = () => {
  const [orders, setOrders] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const { state } = useContext(Store);
  const { userInfo } = state;

  const query = getMyOrders(userInfo.sub)

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const orders = await client.fetch(query);
        console.log(orders)
        setOrders(orders)

        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(error)
      }
    };
    fetchMyOrders();
  }, []);

  return (
    <div className='w-full'>
      {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
        <div>
          <h3>Order History</h3>
          {orders.length ?
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Order Ref
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date created
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment Method
                    </th>
                  </tr>
                </thead>
                {orders.map((order) => (

                  <tbody key={order._id}>
                    <tr className="bg-white border-b ">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {order._id}
                      </th>
                      <td className="px-6 py-4">
                        {dayjs(order._createdAt).format('MMM D, YYYY')}
                      </td>
                      <td className="px-6 py-4">
                        ${order.totalPrice}
                      </td>
                      <td className="px-6 py-4">
                        {order.paymentMethod}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            : <div className='mt-10 flex flex-col justify-center items-center'>
              <img src={no_data} alt="Course App" className='w-1/4 h-auto'/>
              <p className='mt-3'>You have made no orders</p>
            </div>
          }


        </div>
      )}

    </div>
  )
}

export default OrderHistory