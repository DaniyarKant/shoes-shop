import styles from "./ShopProduct.module.css";
import ShopSingleProduct from "./ShopSingleProduct";

function ShopProduct({ products }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerFirst}>
                <h3>Featured Items</h3>
                <div className={styles.desc}>
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
            </div>
            <div className={styles.containerSecond}>
                {products.map((product) => (
                    <ShopSingleProduct key={product._id} products={product} />
                ))}
            </div>
        </div>
    );
}

export default ShopProduct;
