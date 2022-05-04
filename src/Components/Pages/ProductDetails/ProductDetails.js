import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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

    const shippedStock = (e) => {
        const id = product._id;
        e.preventDefault();
        const qtn = e.target.shipped.value
        const url = `http://localhost:5000/api/product/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(qtn)

        })
            .then(res => res.json())
            .then(data => console.log(data))
        setProduct({ ...product, quantity: product.quantity = product.quantity - qtn });
        toast.info(`${qtn} items have been shipped`);

    }
    const updateStock = (e) => {
        const id = product._id;
        e.preventDefault();
        const qtn = parseInt(e.target.stockUpdate.value)
        const url = `http://localhost:5000/api/product/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(qtn)

        })
            .then(res => res.json())
            .then(data => console.log(data))
        setProduct({ ...product, quantity: product.quantity = product.quantity + qtn });
        toast.info(`${qtn} items has been added to stock`);

    }
    return (
        <div className='container mx-auto'>
            <DetailsHeader
                product={product}
                updateQuantity={updateQuantity}
                shippedStock={shippedStock}
                updateStock={updateStock}
            />

        </div>
    );
};

export default ProductDetails;