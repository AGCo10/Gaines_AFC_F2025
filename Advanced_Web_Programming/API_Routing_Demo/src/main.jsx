import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import SplashPage from "./pages/SplashPage.jsx";
import RandomDogPage from "./pages/RandomDogPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AppLayout from "./components/AppLayout.jsx";

// Create a router that takes an object which represents the routes.
const router = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
        {path: "results", element: <RandomDogPage />},
        {path: "splash", element: <SplashPage />},
        {index: true, element: <SplashPage />},
        {path: "*", element: <ErrorPage />}

    ]
    }
])


// We took the main file and redid it to add the router. This reflected what was created above.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
