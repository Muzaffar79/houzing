import Generic from '../pages/Generic'
import Home from '../pages/Home'
import Proporties from '../pages/Proporties'
import SelectedHous from '../pages/SelectedHouse'
import Signin from '../pages/Signin'
import MyProperties from '../pages/MyProperties'
import AddNew from '../pages/AddNew'


export const navbar =[
    {
        id:1,
        title: 'Home',
        path: '/home',
        Element: <Home />,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id:2,
        title: 'Properties',
        path: '/properties',
        Element: <Proporties/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id:3,
        title: 'Selected House',
        path: '/properties/:id',
        Element: <SelectedHous/>,
        search: '?',
        useParams: true,
        hidden: true,
        private: false
    },
    {
        id:4,
        title: 'Contacts',
        path: '/contacts',
        Element: <Generic />,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id:5,
        title: 'Signin',
        path: '/signin',
        Element: <Signin />,
        search: '?',
        hidden: true,
        private: false
    },
    {
        id:6,
        title: 'Signup',
        path: '/signup',
        Element: <Generic />,
        search: '?',
        hidden: true,
        private: false
    },
    {
        id:7,
        title: 'My Properties',
        path: '/myProperties',
        Element: <MyProperties />,
        search: '?',
        useParams: true,
        hidden: true,
        private: false
    },
    {
        id:7,
        title: 'Add New',
        path: '/properties/addnew',
        Element: <AddNew />,
        search: '?',
        useParams: true,
        hidden: true,
        private: false
    },
    {
        id:7,
        title: 'Edit Item',
        path: '/properties/addnew/:id',
        Element: <AddNew />,
        search: '?',
        useParams: true,
        hidden: true,
        private: false
    },

]