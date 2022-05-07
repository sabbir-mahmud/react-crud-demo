import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useHome/useProducts';
import AddItems from '../Pages/AddItems/AddItems';
import Header from '../Shared/Header/Header/Header';
import Loading from '../Shared/Loading/Loading';
import Products from './Products/Products';

const Home = () => {
    const { products, loading } = useProducts();
    return (
        <div>
            <Helmet>
                <title>Home :isp warehouse</title>
            </Helmet>
            <Header></Header>
            <div className="container mx-auto mb-14 my-3">
                <div className="my-3">
                    <Link to='/manage' className='text-2xl text-gray-600 hover:underline'>Manage Inventory</Link>
                </div>

                {
                    loading ? <Loading /> : <div className="mt-9 grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-5">{
                        products.map(product => <Products
                            key={product._id}
                            product={product}
                        ></Products>
                        )}
                    </div>

                }

            </div>
            <AddItems />
        </div>
    );
};

export default Home;