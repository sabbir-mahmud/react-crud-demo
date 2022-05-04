import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = (state) => {
    const { name, model, quantity, supplier } = state.product;
    return (
        <tr className="border-b bg-gray-600 ">
            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                {name}
            </th>
            <td className="px-6 py-4 text-white">
                {model}
            </td>
            <td className="px-6 py-4 text-white">
                {quantity}
            </td>
            <td className="px-6 py-4 text-white">
                {supplier}
            </td>
            <td className="px-6 py-4 text-right">
                <button onClick={() => state.btn0(state.product._id)} href="/" className="font-medium mr-6 text-blue-600 dark:text-blue-500 hover:underline">{state.btn0Value}</button>
                <Link to={`/products/${state.product._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
            </td>
        </tr >
    );
};

export default TableRow;