import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';

const Header = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { email, img, model, name, quantity, supplier, description } = product;

    useEffect(() => {
        fetch('https://sabbir-assignment-11.herokuapp.com/api/products/latest')
            .then(res => res.json())
            .then(data => { setProduct(data[0]); setLoading(false) });

    }, [])
    return (
        <div className='container mx-auto my-3 py-5'>
            {
                loading ? <Loading /> : <><div className="banner-wrapper flex md:flex-row flex-col items-center justify-around">
                    <div className="img-wrapper">
                        <img src={img} alt="" />
                    </div>
                    <div className="banner-text px-5">
                        <h1 className='text-gray-600 text-2xl md:text-3xl font-bold my-3'>{model}</h1>
                        <h2 className='text-gray-600 text-xl'>Name: {name}</h2>
                        <h2 className='text-gray-600 text-xl'>Model: {model}</h2>
                        <h2 className='text-gray-600 text-xl'>added by: {email}</h2>
                        <h2 className='text-gray-600 text-xl'>supplier: {supplier}</h2>
                        <h2 className='text-gray-600 text-xl'>Quantity: {quantity}</h2>
                    </div>
                </div>
                    <p className='my-3 p-3 text-md text-justify text-gray-600'>Name: {model}</p>
                    <p className='mb-7 p-3 mt-3 text-md text-justify text-gray-600'>
                        {description}
                    </p></>
            }

        </div>
    );
};

export default Header;