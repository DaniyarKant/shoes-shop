import styles from "./AboutBottom.module.css";

function AboutBottom() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <h2>Welcome To Shoes</h2>
                <p>
                    Welcome to Shoes, where footwear is not just a necessity but a style statement. Our journey began
                    with a simple yet profound love for shoes and a vision to create a brand that celebrates
                    individuality and fashion.
                </p>
                <p>
                    Founded in 2024, Shoes emerged from the collective dream of a team of passionate individuals who
                    shared a common goal – to redefine the way people perceive and experience footwear. Our story is
                    woven with threads of innovation, quality craftsmanship, and a deep understanding of the
                    ever-evolving fashion landscape
                </p>
            </div>
            <div className={styles.rightSide}>
                <img
                    src="https://izicop.com/cdn/shop/products/snakerstoreNike_LD_Waffle_Sacai_Clot_Cool_Grey-DH3114-001-0.png?v=1673882488"
                    alt=""
                />
            </div>
        </div>
    );
}

export default AboutBottom;
