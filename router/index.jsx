import { createBrowserRouter, Outlet } from "react-router-dom"
import Login from "../components/Login"
import Layout from "../components/Layout"


const AuthLayout = () => {
    return <Outlet/>
}
export default createBrowserRouter([
    {
        element: <AuthLayout/>,
        children: [
            {
                element: <Login/>,
                path: '/login',
            },
            {
                element: <Layout/>,
                path: '/',
            }
        ]
    }
])