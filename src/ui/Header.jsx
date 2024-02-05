import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { usePosts } from "../services/PostContext";
import { useState } from "react";

function Header() {
    const [name, setName] = useState();

    const { isAuthenticated, getSingleUser, logout } = usePosts();

    async function getName() {
        const data = await getSingleUser();
        setName(data.firstName);
    }

    if (isAuthenticated) {
        getName();
    }

    async function handleLogout() {
        await logout();
    }

    return (
        <header className={styles.headerMenu}>
            <div className={styles.headerWrapper}>
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About Us</li>
                    </NavLink>
                    <NavLink to="/shop">
                        <li>Shop</li>
                    </NavLink>
                    <NavLink to="/contact-us">
                        <li>Contact Us</li>
                    </NavLink>
                </ul>
                <div>
                    {isAuthenticated ? (
                        <>
                            <p>Welcome {name}</p>
                            <button onClick={() => handleLogout()}>logout</button>
                        </>
                    ) : (
                        <Link to="account/login">
                            <img src="/user_1144709.png" alt="user-logo" className={styles.headerBorder} />
                        </Link>
                    )}
                    {isAuthenticated ? (
                        <Link to="/shopping/cart">
                            <img src="/handbag_2224552.png" alt="user-padlock" />
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
