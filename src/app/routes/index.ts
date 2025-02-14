import { HomePage } from '@/pages/home';
import { AboutPage } from "@/pages/about";
import { LoginPage } from "@/pages/login";

export const routesList = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: '/about',
        element: AboutPage
    },
    {
        path: '/login',
        element: LoginPage
    }
]