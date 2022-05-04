import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useUser from "../useFirebase/useUser";

const useMyItemsProducts = () => {
    const [products, setProducts] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/api/products?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setProducts(data));
        }

    }, [user]);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/api/products/${id}`;

        fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.info('product deleted successfully')
        setProducts(products.filter(product => product._id !== id));
    }

    return { products, handleDelete };
};

export default useMyItemsProducts;