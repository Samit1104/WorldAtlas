import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Components/Layout/AppLayout"

import "./App.css"
import { Home } from "./Pages/Home"
import { Country } from "./Pages/Country"
import { Contact } from "./Pages/Contact"
import { About } from "./Pages/About"
import { ErrorPage } from "./Pages/ErrorPage"
import { CountryDetails } from "./Components/Layout/CountryDetails"


const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"country",
                element:<Country/>,
            },
            {
                path:"country/:id",
                element:<CountryDetails/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"about",
                element:<About/>,
            }
        ]
    }
])


export default function App(){
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}