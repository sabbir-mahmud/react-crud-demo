import { useEffect, useState } from "react";

const useManage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const shippedOne = (id) => {
        const url = `http://localhost:5000/api/products/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setProducts(products.map(product => product._id === id ? { ...product, quantity: product.quantity - 1 } : product));
    }

    return { products, setProducts, shippedOne };
}

export default useManage;