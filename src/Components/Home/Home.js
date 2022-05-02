import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Shared/Header/Header/Header';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home :isp warehouse</title>
            </Helmet>
            <Header></Header>
        </div>
    );
};

export default Home;