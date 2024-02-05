import axios from "axios";

export async function getAllProducts() {
    try {
        const { data } = await axios.get("http://localhost:3000/api/product");

        return data;
    } catch {
        throw Error("Registration is failed");
    }
}
