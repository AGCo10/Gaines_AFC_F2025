import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {WidgetPage} from "./pages/WidgetPage.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {SplashPage} from "./pages/SplashPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path: "splash", element: <SplashPage />},
            {path: "inventory", element: <WidgetPage />},
            {index: true, element: <SplashPage />},
            {path: "*", element: <ErrorPage />}

        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
