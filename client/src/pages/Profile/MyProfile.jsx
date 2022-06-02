import React, { useContext, useEffect, useState } from 'react'
import { getMe } from '../../api/queries/user';
import Loader from '../../components/common/Loader';
import { client } from '../../utils/client';
import { Store } from '../../utils/Store';
import { toast } from 'react-toastify';

const MyProfile = () => {
  // const [state, setState] = useState({ me: [], error: '', loading: true });
  const [me, setMe] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const { state } = useContext(Store);
  const { userInfo } = state;

  const query = getMe(userInfo.sub)

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const me = await client.fetch(query);
        console.log(me)

        setMe(me[0])
        setEmail(me[0].email ? me[0].email : '')
        setDescription(me[0].description ? me[0].description : '')
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(error)
      }
    };
    fetchMe();
  }, []);

  const changeProfile = async (e) => {
    e.preventDefault()
    console.log('submitted');
    setLoading(true)
    const data = {
      email,
      description
    }

    try {
      await client
        .patch(userInfo.sub)
        .set(data)
        .commit()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error('Transaction failed: ', err.message)
        })

      setLoading(false)
      setLoading(false);
      toast("Profile info changed!");
    } catch (error) {
      console.log(error);
      setError(error)
      setLoading(false)
    }
  }

  return (
    <div className='w-full'>
      {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
        <div className=''>
          <div className='mb-5'>
            <h3>Profile</h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="md:col-span-2 ">
            <form action="#" method="POST" onSubmit={(e) => changeProfile(e)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                        First name
                      </label>
                      <input
                        disabled
                        value={me.firstName}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-accent-500 focus:border-accent-500 block w-full shadow-sm sm:text-sm border-gray-300 text-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                        Last name
                      </label>
                      <input
                        disabled
                        value={me.lastName}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-accent-500 focus:border-accent-500 block w-full shadow-sm sm:text-sm border-gray-300 text-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-accent-500 focus:border-accent-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        About You
                      </label>
                      <div className="mt-1">
                        <textarea
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                          id="description"
                          name="description"
                          rows={3}
                          className="shadow-sm focus:ring-accent-500 focus:border-accent-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="you@example.com"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    // className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                    className="bg-accent-500 inline-flex justify-center px-4 py-2 hover:bg-accent-300 rounded-full text-black w-full text-center hover:cursor-pointer "
                  >
                    Save
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyProfile