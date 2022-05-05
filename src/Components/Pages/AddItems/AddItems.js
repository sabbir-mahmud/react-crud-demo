import React from 'react';
import Helmet from 'react-helmet';
import useUser from '../../../Hooks/useFirebase/useUser';
import useAddProducts from '../../../Hooks/useManage/useAddProducts';

const AddItems = () => {
    const { user } = useUser();
    const addProduct = useAddProducts();
    return (
        <div>
            {/* --------------------------------------------------
        * title
        * -------------------------------------------------- */}

            <Helmet>
                <title>Add Product :isp warehouse</title>
            </Helmet>
            {/* --------------------------------------------------
            * log in page design
            * -------------------------------------------------- */}

            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="w-full md:w-3/5 relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded sm:p-10">
                        <form onSubmit={addProduct} >
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center space-x-5">
                                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 className="leading-relaxed">ISP Warehouse</h2>
                                        <p className="text-sm text-gray-500 font-normal leading-relaxed">add new product to warehouse...</p>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex flex-col">
                                            <input id="productName" name='productName' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Product Name: tp link" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <input id="productModel" name='productModel' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Product Model: Archer C6 V3.2" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <input id="productImage" name='productImage' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Product Image: http://www.img.com/ekahfide.png" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <input id="productPrice" name='productPrice' type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Product Price: $19" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <input id="productQuantity" name='productQuantity' type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Product Quantity: 10" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <input id="productDesc" name='productDesc' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Product description: this product used for improved your internet  " required />
                                        </div>
                                        <div className="flex flex-col">
                                            <input id="supplier" name='supplier' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Supplier: excel tech" required />
                                        </div>
                                        <div className="flex flex-col">
                                            <input id="userEmail" name='userEmail' type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder={`user email: ${user?.email}`} disabled />
                                        </div>


                                        <div className="py-4 mb-3 flex items-center space-x-4">
                                            <input type="submit" className="bg-gray-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:cursor-pointer" value="Add" />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItems;