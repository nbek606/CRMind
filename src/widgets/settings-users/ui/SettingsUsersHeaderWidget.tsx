import './SettingsUsersHeaderWidget.scss';
import {BaseButton} from "@/shared/ui/button";

export const SettingsUsersWidgetHeader = () => {
    return (
        <div className="settings__users-widget__header">
            <div className="settings__users-widget__header-wrap">
                <div className="settings__users-widget__header-search">

                </div>
                <div className="settings__users-widget__header-buttons">
                    <BaseButton
                        title="Добавить пользователя"
                        width="auto"
                    />
                </div>
            </div>
        </div>
    )
}