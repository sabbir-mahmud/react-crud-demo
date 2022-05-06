import { useEffect, useState } from "react";
import useUser from "../useFirebase/useUser";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useUser();

    useEffect(() => {
        fetch("https://sabbir-assignment-11.herokuapp.com/api/products/latests", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem(`${user.email}`)}`

            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setProducts(data);
            });
    }, [user])


    return { products, loading, setProducts };

}

export default useProducts;