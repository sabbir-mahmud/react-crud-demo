import { useEffect, useState } from "react";

const useManage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
}

export default useManage;