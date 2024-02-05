import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const PostContext = createContext();

function PostProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function getSingleUser() {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.get("http://localhost:3000/api/auth/getUser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return data;
        } catch {}
    }

    async function login(dataProvided) {
        try {
            const { data } = await axios.post("http://localhost:3000/api/auth/login", {
                email: dataProvided.email,
                password: dataProvided.password,
            });
            localStorage.setItem("token", data.token);
            setIsAuthenticated(true);
            return true;
        } catch (error) {
            localStorage.removeItem("token");
            return false;
        }
    }

    function logout() {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    async function addToCart(productId) {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.post(
                "http://localhost:3000/api/cart",
                {
                    product: productId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    async function getProductCart() {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.get("http://localhost:3000/api/cart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteProductCart(id) {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:3000/api/cart/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteProductCartAll() {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:3000/api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function createOrder(productId, adressDOM, cityDOM, countryDOM, phoneDOM) {
        try {
            const token = localStorage.getItem("token");
            const userResponse = await axios.post(
                "http://localhost:3000/api/order",
                {
                    orderItems: productId,
                    shippingAddress: adressDOM,
                    city: cityDOM,
                    country: countryDOM,
                    phone: phoneDOM,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PostContext.Provider
            value={{
                addToCart,
                login,
                logout,
                isAuthenticated,
                getSingleUser,
                getProductCart,
                deleteProductCart,
                createOrder,
                deleteProductCartAll,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

function usePosts() {
    const context = useContext(PostContext);
    if (context === undefined) throw new Error("PostContext was used outside of the PostProvider");
    return context;
}

export { PostProvider, usePosts };
