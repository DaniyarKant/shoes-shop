import { useEffect, useState } from "react";
import styles from "./ShoppingCartProducts.module.css";
import { usePosts } from "../../services/PostContext";

function ShoppingCartProducts() {
    const { getProductCart, deleteProductCart, createOrder, deleteProductCartAll } = usePosts();

    const [counter, setCounter] = useState(1);
    const [products, setProducts] = useState([]);
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await getProductCart();
            setProducts(data);
        }

        fetchData();
    }, [getProductCart]);

    async function deleteCart(id) {
        try {
            await deleteProductCart(id);
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    async function handleOrder(e) {
        e.preventDefault();
        const productId = products.map((data) => ({ quantity: data.quantity, product: data.product._id }));

        try {
            await createOrder(productId, adress, city, country, phone);
            await deleteProductCartAll();

            const updatedCartData = await getProductCart();
            setProducts(updatedCartData);
        } catch (error) {
            console.error("Error handling order:", error);
        }
    }

    function increase() {
        setCounter((prevCounter) => prevCounter + 1);
    }

    function decrease() {
        if (counter > 1) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.productTitle}>
                <tr>
                    <th className={styles.productRemove}></th>
                    <th className={styles.productThumb}></th>
                    <th className={styles.productName}>Product</th>
                    <th className={styles.productPrice}>Price</th>
                    <th className={styles.productQuantity}>Quantity</th>
                    <th className={styles.productSubtotal}>Total</th>
                </tr>
            </div>
            <div className={styles.productItems}>
                {products.map((product) => (
                    <tr key={product.product._id}>
                        <th className={styles.productRemove}>
                            <button onClick={() => deleteCart(product._id)}>
                                <img src="/trash_1082235.png" alt="trash" />
                            </button>
                        </th>
                        <th className={styles.productThumb}>
                            <img src={product.product.img} alt="trash" />
                        </th>
                        <th className={styles.productName}>{product.product.title}</th>
                        <th className={styles.productPrice}>{product.product.price}</th>
                        <th className={styles.productQuantity}>
                            <div className={styles.buttonContainer}>
                                <button onClick={decrease}>-</button>
                                <div>{counter}</div>
                                <button onClick={increase}>+</button>
                            </div>
                        </th>
                        <th className={styles.productSubtotal}>{product.product.price * counter}</th>
                    </tr>
                ))}
            </div>
            <div className={styles.orderProduct}>
                <form onSubmit={(e) => handleOrder(e)}>
                    <h5>Order product</h5>
                    <div>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Shipping address"
                            onChange={(e) => setAdress(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Country"
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button type="submit">Order product</button>
                </form>
            </div>
        </div>
    );
}

export default ShoppingCartProducts;
