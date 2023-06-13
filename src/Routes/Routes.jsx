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
import SelectClass from "../pages/Dashboard/Student/SelectClass/SelectClass";
import EnrollClass from "../pages/Dashboard/Student/EnrollClass/EnrollClass";
import Classes from "../pages/Classes/Classes";
import Instructor from "../pages/Instructor/Instructor";

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
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/instructor',
                element: <Instructor></Instructor>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            },
            // admin
            {
                path: '/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/manageUser',
                element: <ManageUser></ManageUser>
            },
            // instructor
            {
                path: '/AddClass',
                element: <AddaClass></AddaClass>
            },
            {
                path: '/myClass',
                element: <MyClass></MyClass>
            },
            // student
            {
                path: '/selectedClass',
                element: <SelectClass></SelectClass>
            },
            {
                path: '/enrollClass',
                element: <EnrollClass></EnrollClass>
            }


        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    //     children:[
        // {
        //     path: '/allUsers',
        //     element: <AllUsers></AllUsers>
        // },
        // {
        //     path: '/manageUser',
        //     element: <ManageUser></ManageUser>
        // },
        // // instructor
        // {
        //     path: '/AddClass',
        //     element: <AddaClass></AddaClass>
        // },
        // {
        //     path: '/myClass',
        //     element: <MyClass></MyClass>
        // },
        // // student
        // {
        //     path: '/selectedClass',
        //     element: <SelectClass></SelectClass>
        // },
        // {
        //     path: '/enrollClass',
        //     element: <EnrollClass></EnrollClass>
        // }
    //         
    //     ]
    // },
]);