import { useLoaderData } from "react-router-dom";
import { getAllProducts } from "../../services/apiProducts";
import AboutTop from "../About Us/AboutTop";
import ShopProduct from "./ShopProduct";

function Shop() {
    const products = useLoaderData();

    return (
        <div>
            <AboutTop title="Shop now" />
            <ShopProduct products={products} />
        </div>
    );
}

export async function loader() {
    const products = await getAllProducts();
    return products;
}

export default Shop;
