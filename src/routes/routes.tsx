import type { RouteObject } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Home from "@/pages/home/Home";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
        ],
    },
]

export default routes;