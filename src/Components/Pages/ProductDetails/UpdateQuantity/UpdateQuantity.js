import React from 'react';

const UpdateQuantity = ({ updateStock }) => {
    return (
        <form onSubmit={updateStock} >
            <div className="max-w-md mx-auto">
                <div className="divide-y divide-gray-200">
                    <div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="flex flex-col">
                            <label htmlFor='stockUpdate' className="leading-loose">Update Stock:</label>
                            <input id="stockUpdate" name='stockUpdate' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="100" required />
                        </div>
                        <div className="mb-3 flex items-center space-x-4">
                            <input type="submit" className="bg-gray-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:cursor-pointer" value="update" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UpdateQuantity;