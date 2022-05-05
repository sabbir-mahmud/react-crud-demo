import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useUser from "../useFirebase/useUser";

const useManage = () => {
    const [products, setProducts] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const { user, loading } = useUser();

    useEffect(() => {
        if (!loading) {
            fetch('http://localhost:5000/api/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem(`${user.email}`)}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setProducts(data);
                    }
                    else {
                        toast.error(data.message);
                    }
                    setLoadingData(false);
                })
        }


    }, [loading, user]);

    const shippedOne = (id) => {
        const url = `http://localhost:5000/api/products/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setProducts(products.map(product => product._id === id ? { ...product, quantity: product.quantity - 1 } : product));
    }

    return { products, loadingData, setProducts, shippedOne };
}

export default useManage;