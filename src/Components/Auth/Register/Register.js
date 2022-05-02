import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import useRegister from '../../../Hooks/useFirebase/useRegister';
import './Register.css';

const Register = () => {
    const handleSignUp = useRegister();
    const [agree, setaAgree] = useState(false);
    const handleAgree = (e) => {
        if (e.target.checked) {
            setaAgree(true);
        } else {
            setaAgree(false);
        };
    };
    const agreeClass = "bg-gray-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md  focus:outline-none"
    const disAgreeClass = "bg-gray-200 flex justify-center items-center w-full text-white px-4 py-3 rounded-md  focus:outline-none"
    return (
        <div className="register">
            {/* --------------------------------------------------
        * title
        * -------------------------------------------------- */}

            <Helmet>
                <title>Register :isp warehouse</title>
            </Helmet>


            {/* --------------------------------------------------
            * log in page design
            * -------------------------------------------------- */}

            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="w-full md:w-3/5 relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded sm:p-10">
                        <form onSubmit={handleSignUp}>
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center space-x-5">
                                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 className="leading-relaxed">ISP Warehouse</h2>
                                        <p className="text-sm text-gray-500 font-normal leading-relaxed">Register to manage warehouse...</p>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex flex-col">
                                            <label htmlFor='fullName' className="leading-loose">Full Name:</label>
                                            <input id="fullName" name='fullName' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Sabbir Mahmud" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor='email' className="leading-loose">Email:</label>
                                            <input id="email" name='email' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="sample@email.com" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor='password' className="leading-loose">Password</label>
                                            <input id='password' name='password' type="password" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="password" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor='confirmPassword' className="leading-loose">Password</label>
                                            <input id='confirmPassword' name='confirmPassword' type="password" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="confirm password" />
                                        </div>

                                        <div className="py-3  flex md:flex-row flex-col items-center space-x-4">
                                            <Link className='text-underline text-blue' to='/reset-password'>forget your password?</Link>
                                            <Link className='ml-3 text-underline text-blue' to='/login'>have a account?</Link>
                                        </div>

                                        <div className="py-4 mb-3 flex items-center space-x-4">
                                            <input id='agree' onClick={handleAgree} type="checkbox" />
                                            <label htmlFor="agree">Agree terms and conditions</label>
                                        </div>
                                        <div className="py-4 mb-3 flex items-center space-x-4">
                                            <input type="submit" className={agree ? agreeClass : disAgreeClass} disabled={!agree} value="register" />
                                        </div>

                                        <div className="my-3">
                                            <hr />
                                        </div>
                                        <div className="my-3">
                                            <h3 className='text-center'>log in with social...</h3>
                                        </div>

                                        <div className="flex justify-center items-center space-x-4">
                                            <button className="mr-6 p-5 rounded-full text-white bg-gray-800">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                                    className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 320 512">
                                                    <path fill="currentColor"
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button className="mr-6 p-5 rounded-full text-white bg-gray-800">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
                                                    className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                    <path fill="currentColor"
                                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                                    </path>
                                                </svg>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;