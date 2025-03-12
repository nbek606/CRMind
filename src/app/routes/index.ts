import { HomePage } from '@/pages/home';
import { AboutPage } from "@/pages/about";
import { LoginPage } from "@/pages/login";

export const routesList = [
    {
        path: '/',
        auth: true,
        element: HomePage
    },
    {
        path: '/about',
        auth: true,
        element: AboutPage
    },
    {
        path: '/login',
        auth: false,
        element: LoginPage
    }
]