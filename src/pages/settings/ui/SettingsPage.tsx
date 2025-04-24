import './SettingPage.scss';
import {settingsRoute} from "@/pages/settings/constants";
import {BaseTab} from "@/shared/ui/base-tab/ui/BaseTab.tsx";
import {Routes, Route, useNavigate} from "react-router-dom";
import {useLayoutEffect, useState} from "react";

export const SettingsPage = () => {
    const [selectedSettingTitle, setSelectedSettingTitle] = useState<string>()
    const navigate = useNavigate()

    useLayoutEffect(() => {
        navigate(settingsRoute[0]?.link)
        setSelectedSettingTitle(settingsRoute[0]?.title)
    }, [settingsRoute]);
    return (
        <div className="settings__page">
           <h2 className="settings__page-title">
                {selectedSettingTitle}
           </h2>
            <div className="settings__page-wrap">
                <BaseTab
                    list={settingsRoute}
                />
                <div className="settings__page-content">
                    <Routes>
                        {
                            settingsRoute.map(route =>
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<route.element />}
                                />
                            )
                        }
                    </Routes>
                </div>
            </div>
        </div>
    )
}