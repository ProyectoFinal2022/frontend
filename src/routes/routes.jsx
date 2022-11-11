import { Home } from "./../views/Home"
import { Login } from "./../views/Login"
import { Register } from "./../views/Register"
import { Profile } from "./../views/Profile"

export const routes = [
    {
        path: '/',
        component: <Home/>,
    },{
        authRoute: true,
        path: '/login',
        component: <Login/>,
    },{
        authRoute: true,
        path: '/register',
        component: <Register/>,
    },{
        private: true,
        path: '/profile',
        component: <Profile/>,
    },
]
