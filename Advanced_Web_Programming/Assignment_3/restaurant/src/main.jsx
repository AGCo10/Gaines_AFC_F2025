import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MenuPage from "./pages/MenuPage.jsx";
import SplashPage from "./pages/SplashPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HiringPage from "./pages/HiringPage.jsx";


// Create a router that takes an object which represents the routes.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path: "hiring", element: <HiringPage />},
            {path: "splash", element: <SplashPage />},
            {path: "menu", element: <MenuPage />},
            {index: true, element: <SplashPage />},
            {path: "*", element: <ErrorPage />}

        ]
    }
])


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);
