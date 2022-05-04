import React from 'react';
import ShippedStock from '../ShippedStock/ShippedStock';
import UpdateQuantity from '../UpdateQuantity/UpdateQuantity';

const DetailsHeader = ({ product, shippedStock, updateStock }) => {
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
                <ShippedStock shippedStock={shippedStock} />

                <div className="my-3">
                    <UpdateQuantity updateStock={updateStock} />
                </div>
            </div>
        </div>
    );
};

export default DetailsHeader;