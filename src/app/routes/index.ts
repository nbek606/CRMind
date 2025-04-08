import { HomePage } from '@/pages/home';
import { AboutPage } from "@/pages/about";
import { LoginPage } from "@/pages/login";
import { DealsPage } from "@/pages/deals";
import {ROUTES} from "@/shared/constant/routes.ts";
import {SettingsPage} from "@/pages/settings/ui/SettingsPage.tsx";

export const routesList = [
    {
        path: ROUTES.HOME,
        auth: true,
        element: HomePage
    },
    {
        path: ROUTES.ABOUT,
        auth: true,
        element: AboutPage
    },
    {
        path: ROUTES.LOGIN,
        auth: false,
        element: LoginPage
    },
    {
        path: ROUTES.DEALS,
        auth: true,
        element: DealsPage
    },
    {
        path: ROUTES.SETTINGS,
        auth: true,
        element: SettingsPage
    }
]