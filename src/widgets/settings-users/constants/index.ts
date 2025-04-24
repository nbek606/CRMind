import {SETTINGS_USER_LINKS} from "@/shared/constant/settings.ts";
import { SettingsUserRolesWidget } from "@/widgets/settings-users/ui/SettingsUserRolesWidget.tsx"
import { SettingsUserGroupsWidget } from "@/widgets/settings-users/ui/SettingsUserGroupsWidget.tsx"


export const settingsUserRoute = [
    {
        title: 'Группы',
        path: SETTINGS_USER_LINKS.GROUPS.path,
        link: SETTINGS_USER_LINKS.GROUPS.link,
        element:SettingsUserGroupsWidget,
    },
    {
        title: 'Роли',
        path: SETTINGS_USER_LINKS.ROLES.path,
        link: SETTINGS_USER_LINKS.ROLES.link,
        element:SettingsUserRolesWidget,
    }
]