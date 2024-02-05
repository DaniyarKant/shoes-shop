import { Link } from "react-router-dom";
import styles from "./AboutTop.module.css";

function AboutTop({ title }) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <p>{title} /</p>
                    <Link to="/">Home</Link>
                </div>
                <p className={styles.bigText}>{title}</p>
            </div>
        </div>
    );
}

export default AboutTop;
