import AccountIcon from '@/shared/svg/user.svg';
import DealIcon from '@/shared/svg/dollar-circle.svg';
import SettingsIcon from '@/shared/svg/settings.svg'
import {ROUTES} from "@/shared/constant/routes.ts";

export const sidebarList = [
    {

        title: 'Аккаунт',
        link: ROUTES.ABOUT,
        icon: AccountIcon
    },
    {

        title: 'Сделки',
        link: ROUTES.DEALS,
        icon: DealIcon
    },
    {
        title: 'Настройки',
        link: ROUTES.SETTINGS,
        icon: SettingsIcon
    }
]