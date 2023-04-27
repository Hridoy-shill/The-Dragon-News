import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/Home/CategoryNews/CategoryNews";
import NewsLayout from "../Layout/NewsLayout";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/category/:id', 
                element:<CategoryNews></CategoryNews>,
                loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<NewsDetails></NewsDetails>
            }
        ]
    }
])

export default router;