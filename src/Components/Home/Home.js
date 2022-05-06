import React from 'react';
import Helmet from 'react-helmet';
import useProducts from '../../Hooks/useHome/useProducts';
import Header from '../Shared/Header/Header/Header';
import Products from './Products/Products';

const Home = () => {
    const { products } = useProducts();
    return (
        <div>
            <Helmet>
                <title>Home :isp warehouse</title>
            </Helmet>
            <Header></Header>
            <div className="container mx-auto my-3">
                <div className="my-3">
                    <h3 className='text-2xl text-gray-600 text-center'>Manage Product</h3>
                </div>
                <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        products.map(product => <Products
                            key={product._id}
                            product={product}
                        ></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;