import axios from "axios";

export async function register(dataProvided) {
    try {
        const { data } = await axios.post("http://localhost:3000/api/auth/register", {
            firstName: dataProvided.firstName,
            lastName: dataProvided.lastName,
            email: dataProvided.email,
            password: dataProvided.password,
        });

        localStorage.setItem("token", data.token);
    } catch {
        localStorage.removeItem("token");
        throw Error("Registration is failed");
    }
}

export async function login(dataProvided) {
    try {
        const { data } = await axios.post("http://localhost:3000/api/auth/login", {
            email: dataProvided.email,
            password: dataProvided.password,
        });
        localStorage.setItem("token", data.token);
    } catch {
        localStorage.removeItem("token");
        throw Error("Login is failed");
    }
}

export async function getAllUser() {
    try {
        const { data } = await axios.get("http://localhost:3000/api/auth/getAllUser");
        return data;
    } catch {
        throw Error("");
    }
}
