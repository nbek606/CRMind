import {SETTINGS_LINKS} from "@/shared/constant/settings.ts";
import {GeneralSettingsWidget} from "@/widgets/general-settings";
import {SettingsUsersWidget} from "@/widgets/settings-users"

export const settingsRoute= [
    {
        title: 'Общие настройки',
        path: SETTINGS_LINKS.GENERAL_SETTINGS.path,
        link: SETTINGS_LINKS.GENERAL_SETTINGS.link,
        element: GeneralSettingsWidget,
    },
    {
        title: 'Пользователи',
        path: SETTINGS_LINKS.USERS.path,
        link: SETTINGS_LINKS.USERS.link,
        element: SettingsUsersWidget
    }
]
