import React, { useContext, useEffect } from 'react'
import logo from '../assets/Images/logo_darker.png';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
// import { LockClosedIcon } from '@heroicons/react/solid'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { GoogleLogin } from '@react-oauth/google';
import { client } from '../utils/client'
import jwt_decode from "jwt-decode";
import jsCookie from 'js-cookie';
import { Store } from '../utils/Store';
import { toast, Zoom } from 'react-toastify';

function Login() {
    const navigate = useNavigate();

    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const [ params ] = useSearchParams();
    const redirect = params.get('redirect')

    useEffect(() => {
        if (userInfo) {
            navigate(redirect || '/');
        }
    }, [navigate, userInfo, params]);

    const responseGoogle = async (response) => {
        // console.log(response);
        try {
            const data = jwt_decode(response.credential);
            // console.log(data);

            dispatch({ type: 'USER_LOGIN', payload: data });

            jsCookie.set('userInfo', JSON.stringify(data));
            const { sub, given_name, family_name, picture } = data;

            const doc = {
                _id: sub,
                _type: 'user',
                firstName: given_name,
                lastName: family_name,
                // slug: '', TODO: ??? autogenerate or assign some value
                avatar: picture,
            };
            client.createIfNotExists(doc).then(() => {
                // navigate('/', { replace: true });
                toast("Welcome", {
                    icon: '👋',
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    transition: Zoom,
                    closeOnClick: true,
                    pauseOnHover: false,
                    progress: undefined,
                });
            });
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className='border rounded-sm pt-14 pb-6 px-6 '>
                        <img
                            className="mx-auto h-16 w-auto mb-48"
                            src={logo}
                            alt="Workflow"
                        />
                        <h2 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center mb-8">Log in to your account</h2>
                        <div className="mt-3 flex flex-col justify-center items-center">
                            <GoogleLogin
                                onSuccess={responseGoogle}
                                onError={() => { alert('Login Failed') }}
                                theme='filled_blue'
                                text='continue_with'
                                type='standard'
                                logo_alignment='left'
                                size='medium'
                                width='200px'
                                padding='10px'
                                cancel_on_tap_outside={true}
                            />
                            <NavLink to={-1}>
                                <div className='rounded-md my-5 border-2 border-gray-500 py-0.5 px-5 w-48 hover:bg-slate-100 text-center'><ArrowLeftIcon className='w-5 mb-1 inline-block' /> Go Back</div>
                            </NavLink>

                        </div>
                        {/* <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-purple-500 hover:text-purple-600">
                                start your 14-day free trial
                            </a>
                        </p> */}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Login