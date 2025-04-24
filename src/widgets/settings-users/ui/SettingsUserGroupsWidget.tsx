import './SettingsUserGroupsWidget.scss';
import {ShadowBox} from "@/shared/ui/shadow-box";
import {SettingsUsersGroupList} from "@/features/settings-users-group-list";

export const SettingsUserGroupsWidget = () => {
    return (
        <div className="settings__user-groups__widget">
            <ShadowBox
                children={
                    <>
                        <SettingsUsersGroupList/>
                    </>
                }
            />
        </div>
    )
}