import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Outlet></Outlet>
    }
])