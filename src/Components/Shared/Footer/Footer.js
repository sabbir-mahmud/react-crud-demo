import React from 'react';
import CustomLink from '../Header/CustomLink/CustomLink';

const Footer = () => {
    return (
        <footer className=" bg-gray-600 py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start justify-around">
                    <div className="px-4 mr-20">
                        <strong className='text-white' >ISP Warehouse</strong>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <h6 className="font-bold text-white mb-2">Address</h6>
                        <address className="not-italic text-white mb-4 text-sm">
                            13 6th SA.<br />
                            Ullapara, Sirajganj
                        </address>
                    </div>
                    <div className="px-4">
                        <h5 className="text-xl text-white font-bold mb-6">Features</h5>
                        <ul className="list-none footer-links md:flex">
                            <li className="mb-2 mr-5">
                                <CustomLink to="/" >Home</CustomLink>
                            </li>
                            <li className="mb-2 mr-5">
                                <CustomLink to="/manage" >Manage</CustomLink>
                            </li>
                            <li className="mb-2 mr-5">
                                <CustomLink to="/my-items" >My Items</CustomLink>
                            </li>
                            <li className="mb-2 mr-5">
                                <CustomLink to="/about" >About</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;