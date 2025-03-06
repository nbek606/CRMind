import { ROUTES } from "@/shared/constant/routes.ts";
import { lazy } from "react";

export const routesList = [
    {
        path: ROUTES.HOME,
        element: lazy(() => import('@/pages/home'))
    },
    {
        path: ROUTES.ABOUT,
        element: lazy(() => import('@/pages/about'))
    },
    {
        path: ROUTES.LOGIN,
        element: lazy(() => import('@/pages/login'))
    },
    {
        path: ROUTES.REGISTER,
        element: lazy(() => import('@/pages/register'))
    }
];