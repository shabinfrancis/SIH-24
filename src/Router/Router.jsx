import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About"
import Contact from "../components/Contact";
import Bookings from "../components/Bookings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // {
            //     path: "/",
            //     element: <Home />
            // },
            // {
            //     path: "/about",
            //     element: <About />
            // },
            // {
            //     path: "/contact",
            //     element: <Contact />
            // },
            {
                path: '/bookings',
                element: <Bookings />,
            },
        ]
    }
])

export default router;