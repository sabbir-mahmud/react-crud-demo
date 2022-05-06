import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto p-5'>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">Difference between javascript and nodejs</h3>
                <p className="text-md text-gray-500 text-justify">
                    javascript is a client side scripting language and nodejs is a server side scripting language. javascript is used to create web pages and nodejs is used to create web servers. javascript is a programming language and node js is a runtime for javascript
                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">When should you use nodejs and when should you use mongodb</h3>
                <p className="text-md text-gray-500 text-justify">
                    when we want to create a server we use nodejs and when we want to create a database we use mongodb. when we work with i/o, realtime, websockets we use nodejs. when we work with nosql, we use mongodb.
                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">Difference between javascript and nodejs</h3>
                <p className="text-md text-gray-500 text-justify">
                    sql is a relational database, nosql is a non-relational database. sql is a query language, nosql is a data language. sql is a structured language, nosql is an unstructured language. sql is a relational language, nosql is a non-relational language. sql is a query language, nosql is a data language. sql is a structured language, nosql is an unstructured language. sql is a relational language, nosql is a non-relational language. sql is a query language, nosql is a data language. sql is a structured language, nosql is an unstructured language. sql is a relational language, nosql is a non-relational language. sql is a query language, nosql is a data language. sql is a structured language, nosql is an unstructured language.

                </p>
            </div>
            <div className="blog my-5">
                <h3 className="mb-3 text-xl text-gray-600 ">What is the purpose of jwt and how does it work</h3>
                <p className="text-md text-gray-500 text-justify">
                    jwt is a json web token which is a unique token that is used to identify the user. It is used to authenticate the user and to authorize the user to access the resources. It is used to protect the resources from unauthorized access.
                </p>
            </div>
        </div>
    );
};

export default Blog;