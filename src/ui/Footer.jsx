import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.shoesBrand}>
                    <h2>Shoes</h2>
                    <p>
                        Don't compromise on quality. Invest in footwear that not only looks good but also provides
                        support and durability.
                    </p>
                </div>
                <div className={styles.shoesBrandSecond}>
                    <h2>Services</h2>
                    <p>Home monitoring</p>
                    <p>Air Filters</p>
                    <p>Professional installation</p>
                    <p>Smart Buildings</p>
                    <p>For contractors</p>
                </div>
                <div className={styles.shoesBrandSecond}>
                    <h2>My Account</h2>
                    <p>My Account</p>
                    <p>Contact</p>
                    <p>Shopping cart</p>
                    <p>Shop</p>
                    <p>Services Login</p>
                </div>
                <div className={styles.shoesBrandSecond}>
                    <h2>Contact Info</h2>
                    <p>Address: Your address goes here.</p>
                    <p>Phone//fax: 0123456789</p>
                    <p>Email: demo@example.com</p>
                    <p>www.example.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
