import styles from "./Main.module.css";

function Main() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerFirst}>
                <h3>Featured Items</h3>
                <div className={styles.desc}>
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
            </div>
            <div className={styles.containerSecond}>
                <div className={styles.product}>
                    <img
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/buty-v2k-run-4CJ5WW.png"
                        alt=""
                    />
                    <p>Men/Women</p>
                    <h4>Nike V2K Run</h4>
                    <span>579.99 zl</span>
                </div>
                <div className={styles.product}>
                    <img
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/buty-v2k-run-4CJ5WW.png"
                        alt=""
                    />
                    <p>Men/Women</p>
                    <h4>Nike V2K Run</h4>
                    <span>579.99 zl</span>
                </div>
                <div className={styles.product}>
                    <img
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/buty-v2k-run-4CJ5WW.png"
                        alt=""
                    />
                    <p>Men/Women</p>
                    <h4>Nike V2K Run</h4>
                    <span>579.99 zl</span>
                </div>
                <div className={styles.product}>
                    <img
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/buty-v2k-run-4CJ5WW.png"
                        alt=""
                    />
                    <p>Men/Women</p>
                    <h4>Nike V2K Run</h4>
                    <span>579.99 zl</span>
                </div>
            </div>
        </div>
    );
}

export default Main;
