import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useUser from "../useFirebase/useUser";

const useMyItemsProducts = () => {
    const [products, setProducts] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        if (user?.email) {
            fetch(`https://sabbir-assignment-11.herokuapp.com/api/products?email=${user?.email}`, {
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
                })
        }

    }, [user]);

    const handleDelete = (id) => {
        const url = `https://sabbir-assignment-11.herokuapp.com/api/products/${id}`;

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