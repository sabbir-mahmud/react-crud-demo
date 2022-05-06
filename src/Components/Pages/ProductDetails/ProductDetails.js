import React from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useDetails from '../../../Hooks/useDetails/useDetails';
import Loading from '../../Shared/Loading/Loading';
import DetailsHeader from './DetailsHeader/DetailsHeader';

const ProductDetails = () => {
    const productID = useParams();
    const { product, loading, setProduct } = useDetails(productID.id);

    // shipped a single product
    const updateQuantity = () => {
        setProduct({ ...product, quantity: product.quantity - 1 });
        const id = product._id;
        const url = `https://sabbir-assignment-11.herokuapp.com/api/products/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    // shipped same product multiple times
    const shippedStock = (e) => {
        e.preventDefault();
        const id = product._id;
        const qtn = e.target.shipped.value
        const url = `https://sabbir-assignment-11.herokuapp.com/api/products/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: qtn })

        })
            .then(res => res.json())
            .then(data => console.log(data))
        setProduct({ ...product, quantity: product.quantity = product.quantity - qtn });
        toast.info(`${qtn} items have been shipped`);

    }
    const updateStock = (e) => {
        e.preventDefault();
        const id = product._id;
        const qtn = e.target.stockUpdate.value
        const url = `https://sabbir-assignment-11.herokuapp.com/api/product/stock/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: qtn })

        })
            .then(res => res.json())
            .then(data => console.log(data))
        setProduct({ ...product, quantity: product.quantity = parseInt(product.quantity) + parseInt(qtn) });
        toast.info(`${qtn} items has been added to stock`);

    }
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>{product.model}</title>
            </Helmet>
            {
                loading ? <Loading /> : <DetailsHeader
                    product={product}
                    updateQuantity={updateQuantity}
                    shippedStock={shippedStock}
                    updateStock={updateStock}
                />
            }

        </div>
    );
};

export default ProductDetails;