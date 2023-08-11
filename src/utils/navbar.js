import useId from "../hooks/useId";
import HomePage from "../pages/HomePage";
import PropertiesPage from "../pages/PropertiesPage";

export const navbar=[
    {
        id:useId,
        title:'Home',
        path:'/home',
        element:<HomePage/>,
        private:false,
        hidden:false
    },
    {
        id:useId,
        title:'Properties',
        path:'/properties',
        element:<PropertiesPage/>,
        private:false,
        hidden:false
    },
    {
        id:useId,
        title:'Sign In',
        path:'/signin',
        element:<h1>Sign In</h1>,
        private:false,
        hidden:true
    },
    {
        id:useId,
        title:'Contacts',
        path:'/contacts',
        element:<h1>Contacts</h1>,
        private:false,
        hidden:false
    }
]