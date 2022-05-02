import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto my-3 py-5'>
            <div className="banner-wrapper flex items-center justify-around">
                <div className="img-wrapper">
                    <img src="https://dtt1c9id3txwq.cloudfront.net/assets/images/001/252/549/original/archer-c6-ac1200-5-500x500.jpg?1625901718" alt="" />
                </div>
                <div className="banner-text">
                    <h1 className='text-gray-600 text-3xl font-bold my-3'>TP Link Archer C6 v3.2</h1>
                    <h2 className='text-gray-600 text-xl'>added by: sample@gmail.com</h2>
                    <h2 className='text-gray-600 text-xl'>Quantity: 203</h2>

                </div>
            </div>

        </div>
    );
};

export default Header;