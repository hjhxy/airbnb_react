import {lazy} from "react";
import {} from 'react-router-dom';
const Home = lazy(()=>import("@/views/Home"));
const Detail = lazy(()=>import("@/views/Detail"));
const Entire = lazy(()=>import("@/views/Entire"));

const routes=[
    {
        path:'/',
        element:<Home/>
    },
    {
      path:"/home",
      element: <Home/>
    },
    {
        path:'/detail',
        element: <Detail/>
    },
    {
        path:'/entire',
        element: <Entire/>
    }
]

export default routes;