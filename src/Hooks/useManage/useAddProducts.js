import { toast } from "react-toastify";
import useUser from "../useFirebase/useUser";

const useAddProducts = () => {
    const { user } = useUser();
    const addProduct = (e) => {
        e.preventDefault();
        const name = e.target.productName.value;
        const model = e.target.productModel.value;
        const quantity = e.target.productQuantity.value;
        const supplier = e.target.supplier.value;
        const email = user?.email;
        const img = e.target.productImage.value;
        const price = e.target.productPrice.value;
        const description = e.target.productDesc.value;

        const product = {
            name,
            model,
            quantity,
            price,
            supplier,
            description,
            email,
            img,
        }

        if (user?.email) {
            const url = `https://sabbir-assignment-11.herokuapp.com/api/products`
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => console.log(data))

            toast.success("Product added successfully");
            e.target.reset();
        }
        else {
            toast.error('Please login to add products');
        }
    }

    return addProduct;

}

export default useAddProducts;