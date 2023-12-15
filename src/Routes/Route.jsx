import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";

const Route = createBrowserRouter([
     {
           path: '/',
           element:  <Main></Main>,
               children: [
                 {
                       path: '/',
                       element: <Home></Home>
                 },
               ]
     },
   

])
export default Route;