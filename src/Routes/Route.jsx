import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Profile from "../Components/Profile/Profile";
import Courses_Access from "../Pages/Courses_Access/Courses_Access";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Route = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/profile',
                        element: <Profile></Profile>
                  },
                  {
                        path: '/corses-access',
                        element: <Courses_Access></Courses_Access>
                  },
            ]
      },


])
export default Route;