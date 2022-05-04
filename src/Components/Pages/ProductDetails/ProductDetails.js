import React from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../../../Hooks/useDetails/useDetails';
import DetailsHeader from './DetailsHeader/DetailsHeader';

const ProductDetails = () => {
    const productID = useParams();
    const { product, loading, setProduct } = useDetails(productID.id);
    const updateQuantity = () => {
        setProduct({ ...product, quantity: product.quantity - 1 });
        const id = product._id;
        const url = `http://localhost:5000/api/products/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='container mx-auto'>
            <DetailsHeader
                product={product}
                updateQuantity={updateQuantity}
            />
        </div>
    );
};

export default ProductDetails;