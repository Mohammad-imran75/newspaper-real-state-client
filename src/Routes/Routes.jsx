import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])