import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/Home/CategoryNews/CategoryNews";
import NewsLayout from "../Layout/NewsLayout";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SingUpPage from "../Pages/SingUpPage/SingUpPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('https://the-dragon-news-server-hridoy-shill.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-hridoy-shill.vercel.app/categories/${params.id}`)
            },

        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-hridoy-shill.vercel.app/news/${params.id}`)
            }
        ]
    },

    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    
    {
        path: '/singup',
        element: <SingUpPage></SingUpPage>
    }
])

export default router;