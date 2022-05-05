import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-gray-600 py-9'>
            <div className="container mx-auto">
                <h3 className='text-white text-9xl font-bold text-center pt-3 my-9 drop-shadow-2xl'>404</h3>
                <h3 className='text-white text-5xl text-center drop-shadow-sm'>page Not Found</h3>
                <p className='text-white text-md text-center pt-7 pb-10'>the page you are looking for is not found <Link to='/' className='text-blue-600 underline'>Go Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;