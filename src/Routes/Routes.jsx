import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../LoginLayout/Login/Login";
import Registration from "../LoginLayout/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AddaClass from "../pages/Dashboard/Instructor/AddaClass/AddaClass";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import MyClass from "../pages/Dashboard/Instructor/MyClass/MyClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Registration></Registration>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            },
            {
                path: '/AddClass',
                element: <AddaClass></AddaClass>
            },
            {
                path: '/myClass',
                element: <MyClass></MyClass>
            },
            {
                path:'/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path:'/manageUser',
                element: <ManageUser></ManageUser>
            }
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    //     children:[
    //         {
    //             path: 'AddClass',
    //             element: <AddaClass></AddaClass>
    //         },
    //         {
    //             path:'allUsers',
    //             element: <AllUsers></AllUsers>
    //         },
    //         {
    //             path:'manageUser',
    //             element: <ManageUser></ManageUser>
    //         }
    //     ]
    // },
]);