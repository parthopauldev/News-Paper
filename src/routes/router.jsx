import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    index: true,
                    element:<Home></Home>
                },
                {
                    path: '/Category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader:()=>fetch('/news.json')
                
                }
            ]
           
        },
        {
            path: '/auth',
           element:<p>auth</p>
        },
        {
            path: '/news',
           element:<p>news </p>
        },
        {
            path: '/*',
            element:<p>error</p>
        }
    ]
)
export default router