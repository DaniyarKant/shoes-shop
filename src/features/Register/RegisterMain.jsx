import { Form, Link, redirect } from "react-router-dom";
import styles from "./RegisterMain.module.css";
import AboutTop from "../About Us/AboutTop";
import { register } from "../../services/apiRegistration";

function RegisterMain() {
    return (
        <div>
            <AboutTop title="Create Account" />
            <Form method="POST">
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.loginText}>
                            <h2>Create Account</h2>
                            <p>Please Register using account detail bellow</p>
                        </div>
                        <div className={styles.loginForm}>
                            <input type="text" placeholder="First Name" name="firstName" required />
                            <input type="text" placeholder="Last Name" name="lastName" required />
                            <input type="email" placeholder="Email" name="email" required />
                            <input type="password" placeholder="Password" name="password" required />
                        </div>
                        <div className={styles.loginSubmit}>
                            <button>Create</button>
                            <Link to="/">Return to Store</Link>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    await register(data);

    return redirect(`/account/login`);
}

export default RegisterMain;
