import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginMain.module.css";
import AboutTop from "../About Us/AboutTop";
import { usePosts } from "../../services/PostContext";
import { useState } from "react";

function LoginMain() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const { login } = usePosts();

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        const loginSuccessful = await login(data);

        if (!loginSuccessful) {
            setError("Please provide correct email or password");
        } else {
            setError(null);
            navigate("/");
        }
    }

    return (
        <>
            <AboutTop title="Login" />
            <form onSubmit={handleLogin}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.loginText}>
                            <h2>Login</h2>
                            <p>Please login using account detail bellow</p>
                        </div>
                        <div className={styles.loginForm}>
                            {error && <p>{error}</p>}
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.loginSubmit}>
                            <button type="submit">Sign In</button>
                            <Link to="/account/register">Create account</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginMain;
