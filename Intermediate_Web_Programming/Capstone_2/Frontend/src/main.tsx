import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {WidgetPage} from "./pages/WidgetPage.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {SplashPage} from "./pages/SplashPage.tsx";
import {BannerContextProvider} from "./util/BannerContext.tsx";

// At the top level, I want to have a promotionals context that will dynamically render my promotions Banner on toggle
// The initial state of this component is false. Toggling a checkbox in the navbar will turn it on or off.


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
            <BannerContextProvider>

        <RouterProvider router={router}/>
            </BannerContextProvider>
        </StrictMode>



)
