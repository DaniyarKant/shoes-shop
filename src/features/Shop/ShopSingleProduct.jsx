import { useNavigate } from "react-router-dom";
import { usePosts } from "../../services/PostContext";
import styles from "./ShopSingleProduct.module.css";

function ShopSingleProduct({ products }) {
    const { title, price, img, _id } = products;

    const navigate = useNavigate();

    const { addToCart, isAuthenticated } = usePosts();

    async function AddCart() {
        await addToCart(_id);
    }

    return (
        <>
            <div className={styles.product}>
                <img src={img} alt="" />
                <p>Men/Women</p>
                <h4>{title}</h4>
                <span>{price} zl</span>
                {isAuthenticated ? (
                    <button onClick={AddCart}>buy now</button>
                ) : (
                    <button onClick={() => navigate("/account/login")}>buy now</button>
                )}
            </div>
        </>
    );
}

export default ShopSingleProduct;
