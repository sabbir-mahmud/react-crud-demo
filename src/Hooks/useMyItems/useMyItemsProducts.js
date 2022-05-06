import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useUser from "../useFirebase/useUser";

const useMyItemsProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, handleLogout } = useUser();

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
                        setLoading(false);
                    }
                    else {
                        toast.error(data.message);
                        handleLogout();
                    }
                })
        }

    }, [user, handleLogout]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this product?");
        const url = `https://sabbir-assignment-11.herokuapp.com/api/products/${id}`;

        if (confirm) {
            fetch(url, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
            toast.info('product deleted successfully')
            setProducts(products.filter(product => product._id !== id));
        } else {
            toast.info('product not deleted')
        }
    }

    return { products, loading, handleDelete };
};

export default useMyItemsProducts;