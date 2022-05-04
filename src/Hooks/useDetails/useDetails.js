import { useEffect, useState } from "react";

const useDetails = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const url = `http://localhost:5000/api/products/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, [url])

    return { product, loading, setProduct };

};
export default useDetails;