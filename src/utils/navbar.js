import Generic from '../pages/Generic'
import Home from '../pages/Home'


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
        Element: <Generic />,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id:3,
        title: 'Contacts',
        path: '/contacts',
        Element: <Generic />,
        search: '?',
        hidden: false,
        private: false
    },
]