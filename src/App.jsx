import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./features/Home/Home";
import About from "./features/About Us/About";
import ContactUs from "./features/Contact/ContactUs";
import Error from "./ui/Error";
import Shop, { loader as productLoader } from "./features/Shop/Shop";
import RegisterMain, { action as createUser } from "./features/Register/RegisterMain";
import LoginMain from "./features/Login/LoginMain";
import ShopingCart from "./features/ShopingCart/ShopingCart";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,

        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact-us", element: <ContactUs /> },
            { path: "/shop", element: <Shop />, loader: productLoader },
            { path: "/account/login", element: <LoginMain /> },
            { path: "/account/register", element: <RegisterMain />, action: createUser },
            { path: "/shopping/cart", element: <ShopingCart /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
