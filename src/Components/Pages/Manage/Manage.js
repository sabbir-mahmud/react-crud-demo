import React from 'react';
import { Link } from 'react-router-dom';
import useManage from '../../../Hooks/useManage/useManage';
import TableRow from './TableRow/TableRow';

const Manage = () => {
    const { products, shippedOne } = useManage();
    return (
        <div className='container mx-auto my-3'>
            <div className="my-3">
                <h3 className='text-2xl text-gray-600 text-center'>Manage all products in warehouse</h3>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th colSpan='5' scope="col" className="px-6 py-3">
                                <Link to='/add-products'>Add Product</Link>
                            </th>
                        </tr>
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product model
                            </th>
                            <th scope="col" className="px-6 py-3">
                                quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <TableRow
                                key={product._id}
                                product={product}
                                btn0={shippedOne}
                                btn0Value='Shipped'
                            >
                                shipped
                            </TableRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Manage;