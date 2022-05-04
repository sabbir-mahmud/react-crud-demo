import React from 'react';

const DetailsHeader = ({ product, updateQuantity }) => {
    const { img, model, name, quantity, supplier } = product;

    return (
        <div className='flex items-center my-5'>
            <div className="img-wrapper">
                <img src={img} alt="" />
            </div>
            <div className="details-header md:ml-16">
                <h1 className='text-3xl text-gray-600 mb-3'>Name: {name}</h1>
                <h3 className='text-md text-gray-600 '>Model: {model}</h3>
                <h3 className='text-md text-gray-600 '>Quantity: {quantity}</h3>
                <h3 className='text-md text-gray-600 '>Supplier: {supplier}</h3>
                <button onClick={updateQuantity} className='py-3 px-10 my-5 bg-gray-600 text-white rounded shadow-md'>Shipped</button>
            </div>
        </div>
    );
};

export default DetailsHeader;