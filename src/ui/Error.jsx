import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

function Error() {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div className={styles.center}>
            <div className={styles.container}>
                <h1>Something went wrong 😢</h1>
                <p>{error.data || error.message}</p>
                <button onClick={() => navigate(-1)}>&larr; Go back</button>
            </div>
        </div>
    );
}

export default Error;
