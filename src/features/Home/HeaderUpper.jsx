import { Link } from "react-router-dom";
import styles from "./HeaderUpper.module.css";

function HeaderUpper() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftDiv}>
                <img src="2.webp" alt="left-pict" />
            </div>
            <div>
                <img src="1.webp" alt="right-pict" />
                <div className={styles.content}>
                    <h2>Sport Shoes</h2>
                    <p>Up to 30% off all shoes & products</p>
                    <Link to="/shop">
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderUpper;
